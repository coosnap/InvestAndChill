import {
  articleLinkWithStock,
  getArticleDetail,
  insertArticle,
  updateArticle,
} from '@/api/article';
import { getStockAll } from '@/api/stock';
import Loader from '@/components/common/Loader';
import { TabDefault } from '@/store/common';
import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import JoditEditor from 'jodit-react';
import { useEffect, useRef, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './style.scss';

export const AddArticleEditor = () => {
  const ref = useRef(null);
  const params = useParams();
  const articleId = params.id;

  const [content, setContent] = useState('');
  const [article, setArticle] = useState({});
  const [stokes, setStokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openUploadFile, setOpenUploadFile] = useState(false);
  const [pathImage, setPathImage] = useState('');

  const setTabDefault = useSetRecoilState(TabDefault);

  const buttons = [
    'bold',
    'strikethrough',
    'underline',
    'italic',
    '|',
    'superscript',
    'subscript',
    '|',
    'align',
    '|',
    'ul',
    'ol',
    'outdent',
    'indent',
    '|',
    'font',
    'fontsize',
    'brush',
    'paragraph',
    '|',
    'image',
    'link',
    'table',
    '|',
    'hr',
    'eraser',
    'copyformat',
    '|',
    'fullsize',
    'selectall',
    '|',
    'source',
    'lineHeight',
    '|',
    'undo',
    'redo',
  ];

  const editorConfig = {
    readonly: false,
    toolbar: true,
    spellcheck: false,
    toolbarButtonSize: 'small',
    toolbarAdaptive: false,
    showCharsCounter: true,
    showWordsCounter: true,
    showXPathInStatusbar: false,
    askBeforePasteHTML: true,
    askBeforePasteFromWord: true,
    buttons: buttons,
    uploader: {
      insertImageAsBase64URI: false,
    },
    wrapNodes: {
      emptyBlockAfterInit: true,
    },
    enter: 'p',
    editorClassName: 'editor-container',
    // width: 800,
    height: 350,
  };

  const saveTypeAndStock = async (result) => {
    if (result && result.id) {
      try {
        if (result.stockId) {
          await articleLinkWithStock(result.id, result.stockId);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setTabDefault('article');
      }
    }
  };

  const handleSaveArticle = async () => {
    let formData = {
      title: article.title,
      content: content,
      url: article.url,
      label: article.label,
    };
    if (articleId) {
      try {
        let result = await updateArticle({ ...formData, id: articleId });
        if (result) {
          await saveTypeAndStock(article);
        }
      } catch (error) {
        console.log('error', error);
        setIsLoading(false);
      }
    } else {
      let data = { ...article, content: content };
      try {
        let result = await insertArticle(data);
        if (result) {
          setTabDefault('article');
        }
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  async function getData() {
    setIsLoading(true);
    try {
      const result = await getStockAll();
      setStokes(result);
    } catch (error) {
      setStokes([]);
    }
    setIsLoading(false);
  }

  async function getArticle() {
    const result = await getArticleDetail(articleId);
    if (result) {
      setContent(result?.content);
      setArticle((prev) => ({
        ...prev,
        id: articleId,
        content: result?.content || '',
        stockId: result?.stockId?.id || '',
        label: result?.label || '',
        url: result?.url || '',
        title: result?.title || '',
      }));
    }
  }

  useEffect(() => {
    if (articleId) {
      getArticle();
    }
    getData();
  }, []);

  const sizeData = [
    { id: 'A', symbol: 'A. Overview' },
    { id: 'A1', symbol: '1. Biz Model' },
    { id: 'A1a', symbol: 'a. Biz Model' },
    { id: 'A1b', symbol: 'b. Market Size n Position' },
    { id: 'A2', symbol: '2. Industry View' },
    { id: 'A2a', symbol: 'a. Đặc tính' },
    { id: 'A2b', symbol: 'b. Mức độ cạnh tranh' },
    { id: 'A2c', symbol: 'c. Wining Model' },
    { id: 'A3', symbol: '3. Competitive Analysis' },
    { id: 'A3a', symbol: 'a. Phân tích - Chứng minh' },
    { id: 'A3b', symbol: 'b. Company Adventure' },
    { id: 'A3c', symbol: 'c. View Fact' },
    { id: 'A4', symbol: '4. Expand Scale' },
    { id: 'A4a', symbol: 'a. Tập trung lợi thế/knowhow sẵn có' },
    { id: 'A4b', symbol: 'b. Mở rộng chuỗi giá trị' },
    { id: 'A5', symbol: '5. Governance Analysis' },
    { id: 'A6', symbol: '6. Đánh giá triển vọng' },
    { id: 'A7', symbol: '7. Rủi ro' },
    { id: 'B', symbol: 'B. Cập nhật Đánh giá DN' },
    { id: 'C', symbol: 'C. Cập nhật Đánh giá Ngành' },
  ];

  const imageHandler = async (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    if (file !== null) {
      formData.append('image', file);
      let response = await fetch(`https://api.imgur.com/3/image`, {
        method: 'POST',
        headers: {
          Authorization: 'Client-ID acf15ce43ac285a',
        },
        body: formData,
      });

      if (response.status === 429) {
        setPathImage('');
        toast.success('Hình ảnh đã tồn tại!', {
          position: 'top-right',
          autoClose: true,
          closeOnClick: true,
          draggable: false,
          toastId: 6,
        });
        return;
      }

      if (response.status === 200) {
        const json = await response.json();
        const src = await json.data.link;
        setPathImage(src);
        toast.success('Upload thành công!', {
          position: 'top-right',
          autoClose: true,
          closeOnClick: true,
          draggable: false,
          toastId: 7,
        });
        return src;
      }
    }
  };

  const unsecuredCopyToClipboard = (text) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      toast.success('Coppy thành công!', {
        position: 'top-right',
        autoClose: true,
        closeOnClick: true,
        draggable: false,
        toastId: 8,
      });
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
    document.body.removeChild(textArea);
  };

  const copyToClipboard = () => {
    let content = pathImage;
    if (window.isSecureContext && navigator.clipboard) {
      navigator.clipboard.writeText(content);
    } else {
      unsecuredCopyToClipboard(content);
    }
  };

  return (
    <div className="mt-8 flex justify-center pb-8">
      {isLoading && <Loader />}
      <div className="min-w-[362px] w-[362px] mr-8">
        <div className="flex gap-4 mb-4">
          <div>
            <FormControl size="small">
              <InputLabel id="stoke-label">Stoke</InputLabel>
              <Select
                labelId="stoke-label"
                id="stoke-label-small"
                className="bg-white min-w-[150px]"
                value={article.stockId || ''}
                label="Stoke"
                onChange={(e) => setArticle((prev) => ({ ...prev, stockId: e.target.value }))}
              >
                {stokes &&
                  stokes.map((e) => (
                    <MenuItem key={e.id} value={e.id}>
                      {e.symbol}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl size="small">
              <InputLabel id="type-label">Label</InputLabel>
              <Select
                labelId="type-label"
                id="type-label-small"
                className="bg-white w-[196px]"
                value={article.label || ''}
                label="Label"
                onChange={(e) => setArticle((prev) => ({ ...prev, label: e.target.value }))}
              >
                {sizeData.map((e) => (
                  <MenuItem
                    key={e.id}
                    value={e.id}
                    sx={{
                      paddingLeft: e.id.length === 2 ? '32px' : e.id.length === 3 ? '48px' : '',
                    }}
                  >
                    {e.symbol}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <TextField
            value={article.title || ''}
            name="title"
            className="w-full bg-white"
            placeholder="Tiêu đề"
            type="text"
            size="small"
            onChange={(e) => setArticle((prev) => ({ ...prev, title: e.target.value }))}
          />
          <Button
            variant="contained"
            sx={{ width: '190px' }}
            size="small"
            onClick={() => setOpenUploadFile(true)}
          >
            Upload Image
          </Button>
        </div>
        <div className="mb-4">
          <TextField
            value={article.url || ''}
            name="title"
            className="w-full bg-white"
            placeholder="Url"
            type="text"
            size="small"
            onChange={(e) => setArticle((prev) => ({ ...prev, url: e.target.value }))}
          />
        </div>
        <div className="text-editor">
          <JoditEditor
            ref={ref}
            value={content}
            config={editorConfig}
            tabIndex={1}
            onBlur={(newContent) => {
              setContent(newContent);
            }}
            // onChange={newContent => (setContent(newContent), console.log('newContent', newContent))}
          />
        </div>
        <div className="mt-4 text-end">
          <Button variant="contained" onClick={handleSaveArticle} className="w-1/6">
            Save
          </Button>
        </div>
      </div>
      <div className="min-w-[1000px] w-[1000px] max-h-[500px] p-6 box-border border bg-second overflow-y-auto">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
      {openUploadFile && (
        <>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
          <div className="absolute left-[30%] top-[30%] w-1/2 min-h-[400px] bg-white rounded-lg p-8">
            <div className="flex flex-col gap-4">
              <div className="flex justify-center">
                <Button variant="contained" component="label" className="w-[190px]">
                  Upload File
                  <input type="file" hidden accept="image/*" onChange={imageHandler} />
                </Button>
              </div>
              <div className="flex items-center">
                <TextField
                  value={pathImage || ''}
                  sx={{ height: '40px', marginRight: '8px' }}
                  className="w-full bg-white"
                  placeholder="Image Url"
                  type="text"
                  size="small"
                  disabled
                />
                {pathImage && (
                  <Button variant="contained" onClick={copyToClipboard} className="ml-1">
                    Copy
                  </Button>
                )}
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <img width={400} src={pathImage || ''} alt="image" />
            </div>
            <div className="absolute right-4 bottom-4">
              <Button
                variant="outlined"
                onClick={() => (setOpenUploadFile(false), setPathImage(''))}
              >
                Close
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

import {
  articleLinkWithStock,
  articleSetType,
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

import './style.scss';

export const AddArticleEditor = () => {
  const ref = useRef(null);
  const query = new URLSearchParams(window.location.search);
  const articalId = query.get('articalId');

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
  ];

  const editorConfig = {
    readonly: false,
    toolbar: true,
    spellcheck: false,
    language: 'vi',
    toolbarButtonSize: 'medium',
    toolbarAdaptive: false,
    showCharsCounter: true,
    showWordsCounter: true,
    showXPathInStatusbar: false,
    askBeforePasteHTML: true,
    askBeforePasteFromWord: true,
    //defaultActionOnPaste: "insert_clear_html",
    buttons: buttons,
    uploader: {
      insertImageAsBase64URI: false,
    },
    // width: 800,
    height: 450,
  };

  const saveTypeAndStock = async (result) => {
    if (result && result.id) {
      try {
        if (result.type) {
          await articleSetType(result.id, result.type);
        }
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
    };
    if (articalId) {
      try {
        let result = await updateArticle({ ...formData, id: articalId });
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
    const result = await getArticleDetail(articalId);
    if (result) {
      setContent(result?.content);
      setArticle((prev) => ({
        ...prev,
        id: articalId,
        content: result?.content || '',
        stockId: result?.stockId?.id || '',
        type: result?.type || '',
        url: result?.url || '',
        title: result?.title || '',
      }));
    }
  }

  useEffect(() => {
    if (articalId) {
      getArticle();
    }
    getData();
  }, []);

  const typeData = [
    { id: '0', symbol: 'Chờ xác nhận loại' },
    { id: '1', symbol: 'Phân Tích Cơ Bản Doanh Nghiệp' },
    { id: '2', symbol: 'Phân Tích Kỹ Thuật Giao Dịch' },
  ];

  const imageHandler = (e) => {
    const file = e.target.files[0];
    let formData = new FormData();
    if (file !== null) {
      formData.append('file', file);
      fetch(`${import.meta.env.VITE_REACT_APP_API}/api/fileStatic/upload`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            return { error: true };
          }
        })
        .then((json) => {
          const src = json.path;
          setPathImage(src);
          return src;
        })
        .catch((err) => {
          console.log('eror: ', err);
        });
    }
  };

  return (
    <div className="mt-8 flex gap-x-8">
      {isLoading && <Loader />}
      <div className="w-1/2 h-1/2">
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
                onChange={(e) => (
                  setArticle((prev) => ({ ...prev, stockId: e.target.value })),
                  console.log('e.target.value', e.target.value)
                )}
              >
                {stokes.map((e) => (
                  <MenuItem key={e.id} value={e.id}>
                    {e.symbol}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl size="small">
              <InputLabel id="type-label">Type</InputLabel>
              <Select
                labelId="type-label"
                id="type-label-small"
                className="bg-white min-w-[250px]"
                value={article.type || ''}
                label="Type"
                onChange={(e) => setArticle((prev) => ({ ...prev, type: e.target.value }))}
              >
                {typeData.map((e) => (
                  <MenuItem key={e.id} value={e.id}>
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
            onChange={(e) => setArticle((prev) => ({ ...prev, title: e.target.value }))}
          />
          <Button
            variant="contained"
            sx={{ width: '190px' }}
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
      <div className="w-1/2 h-[700px] px-6 py-4 border bg-white overflow-y-scroll">
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
                <Button
                  variant="contained"
                  onClick={() => navigator.clipboard.writeText(pathImage)}
                  className="ml-1"
                >
                  Copy
                </Button>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              <img width={400} src={pathImage || ''} alt="image" />
            </div>
            <div className="absolute right-4 bottom-4">
              <Button variant="outlined" onClick={() => setOpenUploadFile(false)}>
                Close
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
import { articleLinkWithStock, articleSetType, getArticleDetail, insertArticle, updateArticle } from '@/api/article';
import { getStockAll } from '@/api/stock';
import Loader from '@/components/common/Loader';
import { Button } from '@/components/ui/button';
import { TabDefault } from '@/store/common';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useSetRecoilState } from 'recoil';
import './Editor.scss';

function Editor() {
  const quillRef = useRef(null);
  const query = new URLSearchParams(window.location.search);
  const articalId = query.get("articalId");

  const [content, setContent] = useState({});
  const [article, setArticle] = useState({});
  const [stokes, setStokes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const setTabDefault = useSetRecoilState(TabDefault);

  const imageHandler = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.setAttribute("multiple", "");
    input.click();

    input.addEventListener("change", async () => {
      const file = input.files[0];
      let formData = new FormData();
      if (file !== null) {
        formData.append('file', file)
        fetch(`${import.meta.env.VITE_REACT_APP_API}/api/fileStatic/upload`, {
          method: 'POST',
          headers: {
            Accept: "application/json",
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
            const editor = quillRef.current.getEditor();
            const range = editor.getSelection();
            editor.insertEmbed(range.index, "image", src);
            return json;
          })
          .catch((err) => {
            console.log("eror: ", err);
          });
      }
    });
  };

  // const deleteImage = async (fileId) => {
  //   const res = await $_lib_fetchData({
  //     url: `/files/${fileId}`,
  //     method: 'delete',
  //     params: {}
  //   })
  // }

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          ["bold", "italic", "underline", "strike"],
          [{ size: [] }],
          [{ font: [] }],
          [{ align: [false, "right", "center", "justify"] }],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          [
            {
              color: [
                "black",
                "red",
                "blue",
                "white",
                "green",
                "yellow",
                "brown",
              ],
            },
          ],
          [
            {
              background: [
                "black",
                "red",
                "blue",
                "white",
                "green",
                "yellow",
                "brown",
              ],
            },
          ],
          ["clean"],
        ],
        handlers: { image: imageHandler },
      },
    }),
    []
  );

  // useEffect(() => {
  //   if (
  //     quillRef.current?.lastDeltaChangeSet?.ops[1]?.delete === 1 &&
  //     imageFiles.length > 0
  //   ) {
  //     for (let index = 0; index < imageFiles.length; index++) {
  //       if (!quillRef.current?.value.includes(imageFiles[index].path)) {
  //         const tempImageFiles = structuredClone(imageFiles)
  //         const filteredIamgeFiles = tempImageFiles.filter(
  //           (image) => image.id !== imageFiles[index].id
  //         )
  //         deleteImage(imageFiles[index].id)
  //         setImageFiles(filteredIamgeFiles)
  //       }
  //     }
  //   }
  // }, [quillRef.current?.lastDeltaChangeSet?.ops[1]?.delete])

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
        setTabDefault("article");
      }
    }
  }

  const handleSaveArticle = async () => {
    let formData = {
      title: article.title,
      content: article.content,
      url: article.url
    }
    if (articalId) {
      try {
        let result = await updateArticle({ ...formData, id: articalId });
        if (result) {
          await saveTypeAndStock(article);
        }
      } catch (error) {
        console.log("error", error);
        setIsLoading(false);
      }
    } else {
      if (article.title && article.content) {
        try {
          let result = await insertArticle(formData);
          if (result) {
            await saveTypeAndStock(result);
          }
        } catch (error) {
          console.log("error", error);
        }
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
      setArticle(prev => ({ ...prev, id: articalId, content: result?.content || '', stockId: result?.stockId?.id || '', type: result?.type || '', url: result?.url || '', title: result?.title || '' }))
    };
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
  ]

  return (
    <>
      <div className="mt-8 flex gap-x-8">
        {isLoading && <Loader />}
        <div className="w-1/2 h-1/2">
          <div className="mb-4">
            <FormControl sx={{ width: "25%" }} size="small">
              <InputLabel id="stoke-label">Stoke</InputLabel>
              <Select
                labelId="stoke-label"
                id="stoke-label-small"
                className="bg-white"
                value={article.stockId || ""}
                label="Stoke"
                onChange={e => setArticle(prev => ({ ...prev, stockId: e.target.value }))}
              >
                {stokes.map((e) => (
                  <MenuItem key={e.id} value={e.id}>
                    {e.symbol}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="mb-4">
            <FormControl sx={{ width: "50%" }} size="small">
              <InputLabel id="type-label">Type</InputLabel>
              <Select
                labelId="type-label"
                id="type-label-small"
                className="bg-white"
                value={article.type || ""}
                label="Type"
                onChange={e => setArticle(prev => ({ ...prev, type: e.target.value }))}
              >
                {typeData.map((e) => (
                  <MenuItem key={e.id} value={e.id}>
                    {e.symbol}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="mb-4">
            <TextField
              value={article.title || ""}
              name="title"
              className="w-full bg-white"
              placeholder="Tiêu đề"
              type="text"
              onChange={(e) =>
                setArticle((prev) => ({ ...prev, title: e.target.value }))
              }
            />
          </div>
          <div className="mb-4">
            <TextField
              value={article.url || ""}
              name="title"
              className="w-full bg-white"
              placeholder="Url"
              type="text"
              onChange={(e) =>
                setArticle((prev) => ({ ...prev, url: e.target.value }))
              }
            />
          </div>
          <div className="text-editor">
            <ReactQuill
              className="bg-white"
              ref={quillRef}
              theme="snow"
              modules={modules}
              value={content}
              onChange={(value) => (setContent(value.replace(/"/g, "'")))} />
          </div>
          <div className="mt-4 text-end">
            <Button
              variant="primary"
              onClick={handleSaveArticle}
              className="w-1/5"
            >
              Save
            </Button>
          </div>
        </div>
        <div className="w-1/2 h-[700px] border bg-white">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </>
  );
}

export default Editor;

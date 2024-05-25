import { getArticleDetail, insertArticle, updateArticle } from '@/api/article';
import { getStockAll } from '@/api/stock';
import Loader from '@/components/common/Loader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { ArticalId } from '@/store/article';
import { TabDefault } from '@/store/common';
import { useEffect, useMemo, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRecoilState, useSetRecoilState } from 'recoil';
import './Editor.scss';
import { fileUpload } from '@/api/file';

let groupCode = '';

function Editor() {
  const quillRef = useRef(null);
  const [article, setArticle] = useState({ title: "", content: "", url: "" });
  const [stokes, setStokes] = useState([]);
  const [content, setContent] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [articalId, setArticleId] = useRecoilState(ArticalId)
  const setTabDefault = useSetRecoilState(TabDefault)

  const imageHandler = () => {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.setAttribute('multiple', '');
    input.click();

    input.addEventListener('change', async () => {
      const files = [...input.files];
      let formData = new FormData();
      formData.append('file', files[0]);
      formData.append('fileName', files[0].name);

      const res = await fileUpload(formData);
      // if (res.data) {
      // groupCode = res.data.fileGroupCode
      // res.data.fileIds.forEach((fileId) => {
      //   const editor = quillRef.current.getEditor()
      //   const range = editor.getSelection()
      //   const src = `http://yourUrl../${fileId}`
      //   editor.insertEmbed(range.index, 'image', src)
      //   setImageFiles((prev) => [...prev, { path: src, id: fileId }])
      // })
      // }
    })
  }

  // const deleteImage = async (fileId) => {
  //   const res = await $_lib_fetchData({
  //     url: `/files/${fileId}`,
  //     method: 'delete',
  //     params: {}
  //   })
  // }

  const modules = useMemo(() => ({
    toolbar: {
      container: [
        ["bold", "italic", "underline", "strike"],
        [{ size: [] }],
        [{ font: [] }],
        [{ align: [false, "right", "center", "justify"] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        [{ color: ["black", "red", "blue", "white", "green", "yellow", "brown"] }],
        [{ background: ["black", "red", "blue", "white", "green", "yellow", "brown"] }],
        ["clean"],
      ],
      handlers: { image: imageHandler }
    }
  }), []);

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

  const handleSaveArticle = async () => {
    if (articalId) {
      try {
        let result = await updateArticle(article);
        if (result) {
          setArticleId("");
          setTabDefault("article");
        }
      } catch (error) {
        console.log('error', error)
      }
    } else {
      try {
        let result = await insertArticle(article);
        if (result) {
          setTabDefault("article");
        }
      } catch (error) {
        console.log('error', error)
      }
    }
  }

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

  async function getArtical() {
    const result = await getArticleDetail(articalId);
    if (result) {
      setContent(result.content);
      setArticle(prev => ({ ...prev, id: articalId, content: result.content, stockId: result.stockId, url: result.url, title: result.title }))
    };
  }

  useEffect(() => {
    if (articalId) {
      getArtical();
    }
    getData();
  }, []);

  return (
    <>
      <div className='mt-8 flex gap-x-8'>
        {isLoading && <Loader />}
        <div className='w-1/2 h-1/2'>
          <div className='mb-4'>
            <Select onValueChange={value => setArticle(prev => ({ ...prev, stockId: value }))}>
              <SelectTrigger className="w-1/2 bg-white">
                <SelectValue placeholder="Select a stoke id" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  {stokes.map(e => (
                    <SelectItem key={e.id} value={e.symbol}>{e.symbol}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='mb-4'>
            <Input value={article.title} placeholder="Title" onInput={e => setArticle(prev => ({ ...prev, title: e.target.value }))} />
          </div>
          <div className='mb-4'>
            <Input value={article.url} placeholder="Url" onInput={e => setArticle(prev => ({ ...prev, url: e.target.value }))} />
          </div>
          <div className="text-editor">
            <ReactQuill
              className='bg-white'
              ref={quillRef}
              theme="snow"
              modules={modules}
              value={content}
              onChange={(value) => setContent(value)} />
          </div>
          <div className='mt-4 text-end'>
            <Button variant="primary" onClick={handleSaveArticle} className="w-1/5">Save</Button>
          </div>
        </div>
        <div className='w-1/2 h-[700px] border bg-white'>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div >
    </>
  )
}

export default Editor;
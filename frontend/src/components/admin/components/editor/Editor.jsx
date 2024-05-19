import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Editor.scss';
import Loader from '@/components/common/Loader';
import { getStockAll } from '@/api/stock';
import { Input } from '@/components/ui/input';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { ArticalId } from '@/store/article';
import { getArticleDetail, insertArticle, updateArticle } from '@/api/article';
import { TabDefault } from '@/store/common';

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
]

function Editor() {
  const reactQuillRef = useRef(null);
  const [article, setArticle] = useState({ title: "", content: "", url: "" });
  const [stokes, setStokes] = useState([]);
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const [articalId, setArticleId] = useRecoilState(ArticalId)
  const setTabDefault = useSetRecoilState(TabDefault)

  const modules = {
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
    },
  };

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
          {/* <div className='mb-4'>
            <Select>
              <SelectTrigger className="w-1/2 bg-white">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  <SelectItem value="apple">Apple</SelectItem>
                  <SelectItem value="banana">Banana</SelectItem>
                  <SelectItem value="blueberry">Blueberry</SelectItem>
                  <SelectItem value="grapes">Grapes</SelectItem>
                  <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div> */}
          <div className='mb-4'>
            <Input value={article.title} placeholder="Title" onInput={e => setArticle(prev => ({ ...prev, title: e.target.value }))} />
          </div>
          <div className='mb-4'>
            <Input value={article.url} placeholder="Url" onInput={e => setArticle(prev => ({ ...prev, url: e.target.value }))} />
          </div>
          <div className="text-editor">
            <ReactQuill
              className='bg-white'
              ref={reactQuillRef}
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
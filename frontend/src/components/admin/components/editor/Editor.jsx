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
  const [content, setContent] = useState('');
  const [stokes, setStokes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  const handleProcedureContentChange = (content, delta, source, editor) => {
    setContent(content);
  }

  const handleSaveArtical = () => {
    console.log("save")
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

  useEffect(() => {
    getData();
  }, []);

  if (isLoading) {
    return <Loader />
  };

  return (
    <>
      <div className='mt-8 flex gap-x-8'>
        <div className='w-1/2 h-1/2'>
          <div className='mb-4'>
            <Select>
              <SelectTrigger className="w-1/2 bg-white">
                <SelectValue placeholder="Select a stoke id" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectGroup>
                  {stokes.map(e => (
                    <SelectItem value={e.id}>{e.symbol}</SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className='mb-4'>
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
          </div>
          <div className="text-editor">
            <ReactQuill
              className='bg-white'
              ref={reactQuillRef}
              theme="snow"
              modules={modules}
              value={content}
              onChange={handleProcedureContentChange} />
          </div>
          <div className='mt-4 text-end'>
            <Button onClick={handleSaveArtical} className="w-1/5">Save</Button>
          </div>
          <div>{content}</div>
        </div>
        <div className='w-1/2 h-[700px] border bg-white'>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </>
  )
}

export default Editor;
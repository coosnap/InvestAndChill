import React, { useEffect, useRef, useState } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Editor.scss';
import { Input } from '@/components/ui/input';
// import { fileUpload } from '@/api/file';

function Editor() {
  const reactQuillRef = useRef(null);
  const [value, setValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  // const imageHandler = useCallback(() => {
  //   const input = document.createElement("input");
  //   input.setAttribute("type", "file");
  //   input.setAttribute("accept", "image/*");
  //   input.click();
  //   input.onchange = async () => {
  //     if (input !== null && input.files !== null) {
  //       const file = input.files[0];
  //       const url = await uploadToFile();
  //       const quill = reactQuillRef.current;
  //       if (quill) {
  //         const range = quill.getEditorSelection();
  //         range && quill.getEditor().insertEmbed(range.index, "image", url);
  //       }
  //     }
  //   };
  // }, []);

  // const uploadToFile = async (file) => {
  //   const formData = new FormData();
  //   formData.append("file", file);
  //   const res = await fileUpload(formData);
  //   const data = await res.json();
  //   const url = data.url;
  //   return url
  // }

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
      // handlers: {
      //   image: imageHandler
      // },
    },
  };

  const handleProcedureContentChange = (content, delta, source, editor) => {
    setValue(content);
    // console.log('content', content)

    // let myblob = new Blob([content], {
    //   type: 'text/plain'
    // });
    // let outurl = URL.createObjectURL(myblob);
    // fetch(outurl)
    //   .then(res => res.text())
    //   .then(data => {
    //     console.log(data)
    //   })

    //let has_attribues = delta.ops[1].attributes || "";
    //console.log(has_attribues);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };

  // async function blobToString (blob) {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.onerror = reject;
  //     reader.onload = () => { resolve(reader.result) };
  //     reader.readAsDataURL(blob);
  //   })
  // }

  // const base64String = await blobToString(blob);

  return (
    <>
      <div className='mt-8 flex gap-x-8'>
        <div className='w-1/2 h-1/2'>
          <div className='mb-6'>
            <Input defaultValue={inputValue} placeholder="Stoke Id" />
          </div>
          <div className="text-editor">
            <ReactQuill
              className='bg-white'
              ref={reactQuillRef}
              theme="snow"
              modules={modules}
              value={value}
              onChange={handleProcedureContentChange} />
          </div>
          <div>{value}</div>
        </div>
        <div className='w-1/2 h-[700px] border bg-white'>
          <div dangerouslySetInnerHTML={{ __html: value }} />
        </div>
      </div>
    </>
  )
}

export default Editor;
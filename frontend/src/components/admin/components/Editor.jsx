import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Editor.scss';

function Editor() {
  const [value, setValue] = useState('');

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font"
  ];

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ size: [] }],
      [{ font: [] }],
      [{ align: ["right", "center", "justify"] }],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      [{ color: ["black", "red", "#785412"] }],
      [{ background: ["white", "red", "#785412"] }]
    ]
  };

  const handleProcedureContentChange = (content, delta, source, editor) => {
    setValue(content);
    console.log('content', content)
    //let has_attribues = delta.ops[1].attributes || "";
    //console.log(has_attribues);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };

  return (
    <>
      <div className='mt-8 flex flex-col justify-center items-center'>
        <div className='h-1/2'>
          <ReactQuill
            theme="snow"
            modules={modules}
            value={value}
            formats={formats}
            onChange={handleProcedureContentChange} />
        </div>
        <div>{value}</div>
      </div>
    </>
  )
}

export default Editor;
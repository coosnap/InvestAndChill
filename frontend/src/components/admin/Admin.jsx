import React, { useState } from "react";
// import readXlsxFile from "read-excel-file";
// import docx4js from "docx4js";
// import mammoth from "mammoth";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Editor from "./components/Editor";
// import ReadFileDoc from "./components/ReadFileDoc";
// import UploadFile from "./components/UploadFile";
import TableQuestion from "./components/question/TableQuestion";
import TableStoke from "./components/stoke/TableStoke";
import TableArticle from "./components/article/TableArticle";
import ProductAdmin from "./components/product";
import { useRecoilValue } from "recoil";
import { TabDefault } from "@/store/common";

// function extractEmails(text) {
//   return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
// }

function Admin() {
  const tabDefault = useRecoilValue(TabDefault);
  // const [file, setFile] = useState();

  // function readFileInputEventAsArrayBuffer(file, callback) {
  //   var reader = new FileReader();

  //   reader.onload = function (loadEvent) {
  //     var arrayBuffer = loadEvent.target.result;
  //     callback(arrayBuffer);
  //   };

  //   reader.readAsArrayBuffer(file);
  // }

  // function displayResult(result) {
  //   console.log('result.value', result.value)
  //   document.getElementById('output').innerHTML = result.value;
  // }

  // function handleSubmitFile() {
  //   if (file) {
  //     readFileInputEventAsArrayBuffer(file, function (arrayBuffer) {
  //       mammoth.convertToHtml({ arrayBuffer: arrayBuffer }).then(displayResult).done();
  //     });
  //   }
  //   return;
  // }

  // const handleFileInput = (event) => {
  //   setFile(event.target.files[0]);
  // };

  return (
    <div className="container mx-auto pt-6">
      <Tabs defaultValue={tabDefault} className="w-full">
        <TabsList>
          <TabsTrigger value="user">User</TabsTrigger>
          <TabsTrigger value="stoke">Stoke</TabsTrigger>
          <TabsTrigger value="article">Article</TabsTrigger>
          <TabsTrigger value="question">Question</TabsTrigger>
          <TabsTrigger value="editor">Editor</TabsTrigger>
          <TabsTrigger value="product">Product</TabsTrigger>
          {/* <TabsTrigger value="upload">Upload File</TabsTrigger> */}
          {/* <TabsTrigger value="readfile">File Viewer</TabsTrigger> */}
          {/* <TabsTrigger value="readfromfile">Read From File</TabsTrigger> */}
        </TabsList>

        <TabsContent value="user">
          User
        </TabsContent>
        <TabsContent value="stoke">
          <TableStoke />
        </TabsContent>
        <TabsContent value="article">
          <TableArticle />
        </TabsContent>
        <TabsContent value="question">
          <TableQuestion />
        </TabsContent>
        <TabsContent value="editor">
          <Editor />
        </TabsContent>
        <TabsContent value="product">
          <ProductAdmin />
        </TabsContent>

        {/* <TabsContent value="upload">
          <UploadFile />
        </TabsContent> */}
        {/* <TabsContent value="readfile">
          <ReadFileDoc />
        </TabsContent> */}
        {/* <TabsContent value="readfromfile">
          <div className="mb-4 py-6 card-body max-w-sm border bg-blue-100">
            <input type="file" id="file-input" accept=".doc,.docx" className="file-input file-input-primary" onChange={handleFileInput} />
            <button type="button" className="mt-2 btn btn-primary text-white" onClick={handleSubmitFile}>Submit</button>
          </div>
          <div id="output"></div>
        </TabsContent> */}
      </Tabs>
    </div>
  );
}

export default Admin;

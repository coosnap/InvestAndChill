import React, { useEffect, useState } from "react";
// import readXlsxFile from "read-excel-file";
// import docx4js from "docx4js";
// import mammoth from "mammoth";
// import ReadFileDoc from "./components/ReadFileDoc";
// import UploadFile from "./components/UploadFile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TableQuestion from "./components/question/TableQuestion";
import TableStoke from "./components/stoke/TableStoke";
import TableArticle from "./components/article/TableArticle";
import ProductAdmin from "./components/product";
import { useRecoilState, useSetRecoilState } from "recoil";
import { TabDefault } from "@/store/common";
import Editor from "./components/editor/Editor";
import { useCookies } from "react-cookie";
import UserAdmin from "./components/user";
import { getUserAll } from "@/api/user";
import { UserAll } from "@/store/user";

// function extractEmails(text) {
//   return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
// }

const tabList = [
  {
    path: "stoke",
    element: <TableStoke />
  },
  {
    path: "article",
    element: <TableArticle />
  },
  {
    path: "question",
    element: <TableQuestion />
  },
  {
    path: "editor",
    element: <Editor />
  },
  {
    path: "product",
    element: <ProductAdmin />
  },
]

function Admin() {
  const cookie = useCookies(['roles']);

  const [tabDefault, setTabDefault] = useRecoilState(TabDefault);
  const setUserAll = useSetRecoilState(UserAll);

  const [users, setUsers] = useState([]);
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
  async function getData() {
    const result = await getUserAll();
    setUserAll(result);
    try {
      setUsers(result);
    } catch (error) {
      setUsers([]);
    }
  }

  useEffect(() => {
    getData();
    (cookie[0].roles.includes("ROLE_MODERATOR_USER")) ? onTabChange('user') : onTabChange('stoke');
  }, [])

  const onTabChange = (value) => {
    setTabDefault(value);
  }

  return (
    <div className="container mx-auto pt-6">
      <Tabs value={tabDefault} onValueChange={onTabChange} className="w-full">
        <TabsList>
          {(cookie[0].roles.includes("ROLE_MODERATOR_USER") || cookie[0].roles.includes("ROLE_ADMIN")) &&
            <TabsTrigger value="user">User</TabsTrigger>
          }
          {(cookie[0].roles.includes("ROLE_MODERATOR_ARTICLE") || cookie[0].roles.includes("ROLE_ADMIN")) &&
            tabList.map(e => (
              <TabsTrigger key={e.path} value={e.path}>{e.path.charAt(0).toUpperCase() + e.path.substring(1, e.path.length)}</TabsTrigger>
            ))
          }

          {/* <TabsTrigger value="upload">Upload File</TabsTrigger> */}
          {/* <TabsTrigger value="readfile">File Viewer</TabsTrigger> */}
          {/* <TabsTrigger value="readfromfile">Read From File</TabsTrigger> */}
        </TabsList>

        {(cookie[0].roles.includes("ROLE_MODERATOR_USER") || cookie[0].roles.includes("ROLE_ADMIN")) &&
          <TabsContent value="user"><UserAdmin /></TabsContent>
        }

        {(cookie[0].roles.includes("ROLE_MODERATOR_ARTICLE") || cookie[0].roles.includes("ROLE_ADMIN")) &&
          tabList.map(e => (
            <TabsContent key={e.path} value={e.path}>{e.element}</TabsContent>
          ))
        }

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

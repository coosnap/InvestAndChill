import { useEffect } from "react";
// import readXlsxFile from "read-excel-file";
// import docx4js from "docx4js";
// import mammoth from "mammoth";
// import ReadFileDoc from "./components/ReadFileDoc";
// import UploadFile from "./components/UploadFile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabDefault } from "@/store/common";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import TableArticle from "./components/article/TableArticle";
import Editor from "./components/editor/Editor";
import ProductAdmin from "./components/product";
import TableQuestion from "./components/question/TableQuestion";
import TableStoke from "./components/stoke/TableStoke";
import UserAdmin from "./components/user";
import { AddArticleEditor } from "./components/add-article";

// function extractEmails(text) {
//   return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
// }

const tabList = [
  {
    path: "stoke",
    title: "Stoke",
    element: <TableStoke />
  },
  {
    path: "article",
    title: "Article",
    element: <TableArticle />
  },
  {
    path: "question",
    title: "Question",
    element: <TableQuestion />
  },
  {
    path: "add-article",
    title: "Add Article",
    element: <AddArticleEditor />
  },
  {
    path: "product",
    title: "Product",
    element: <ProductAdmin />
  },
]

function Admin() {
  const cookie = useCookies(['roles']);
  const navigate = useNavigate();

  const [tabDefault, setTabDefault] = useRecoilState(TabDefault);

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

  useEffect(() => {
    (cookie[0].roles.includes("ROLE_MODERATOR_USER")) ? onTabChange('user') : onTabChange('stoke');
  }, [])

  const onTabChange = (value) => {
    setTabDefault(value);
    navigate('/admin');
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
              <TabsTrigger key={e.path} value={e.path}>{e.title}</TabsTrigger>
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

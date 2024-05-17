import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
import './ReadFileDoc.scss';

function ReadFileDoc() {
  const docs = [
    {
      uri: "http://agile-bayou-65029-c59bb8376f70.herokuapp.com/api/file/3817d33c-0d53-48ae-a290-1d7039f4ffbf",
      fileType: "docx",
    },
    {
      uri: "https://sample-videos.com/xls/Sample-Spreadsheet-10-rows.xls",
      fileType: "xls",
    }
  ]

  return (
    <div>
      {/* <div className='w-[1522px] h-[755px] absolute left-[192px] top-[134px] select-none bg-black-100'></div> */}
      <DocViewer
        className=''
        documents={docs}
        pluginRenderers={DocViewerRenderers}
        style={{ height: 755 }}
        config={{ header: { disableHeader: true } }}
      />
    </div>
  );
}
export default ReadFileDoc;
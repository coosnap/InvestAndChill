import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';

function ReadFileDoc() {
  const docs = [
    {
      uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
      fileType: "docx",
    },
    {
      uri: "https://sample-videos.com/xls/Sample-Spreadsheet-10-rows.xls",
      fileType: "xls",
    }
  ]

  return (
    <div className="">
      <DocViewer documents={docs} pluginRenderers={DocViewerRenderers} style={{ height: 911 }} />
    </div>
  );
}
export default ReadFileDoc;
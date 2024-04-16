import React, { useState } from "react";
// import readXlsxFile from "read-excel-file";
// import docx4js from "docx4js";
import mammoth from "mammoth";
import "./styles.css"

// function extractEmails(text) {
//   return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
// }

function Admin() {
  const [file, setFile] = useState();

  function readFileInputEventAsArrayBuffer(file, callback) {
    var reader = new FileReader();

    reader.onload = function (loadEvent) {
      var arrayBuffer = loadEvent.target.result;
      callback(arrayBuffer);
    };

    reader.readAsArrayBuffer(file);
  }

  function displayResult(result) {
    console.log('result.value', result.value)
    document.getElementById('output').innerHTML = result.value;
  }

  function handleSubmitFile() {
    readFileInputEventAsArrayBuffer(file, function (arrayBuffer) {
      mammoth.convertToHtml({ arrayBuffer: arrayBuffer }).then(displayResult).done();
    });
  }

  const handleFileInput = (event) => {
    setFile(event.target.files[0]);
  };

  return (
    <div className="container mx-auto pt-6">
      <div className="mb-4 py-6 card-body max-w-sm border bg-blue-100">
        <input type="file" id="file-input" accept=".doc,.docx" className="file-input file-input-primary" onChange={handleFileInput} />
        <button type="button" className="mt-2 btn btn-primary text-white" onClick={handleSubmitFile}>Submit</button>
      </div>
      <div id="output"></div>
    </div>
  );
}

export default Admin;

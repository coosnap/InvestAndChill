import React, { useState } from "react";
// import readXlsxFile from "read-excel-file";
// import docx4js from "docx4js";
import mammoth from "mammoth";

// function extractEmails(text) {
//   return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi);
// }

function Admin() {
  const [value, setValue] = useState("")

  function readFileInputEventAsArrayBuffer(file, callback) {
    var reader = new FileReader();

    reader.onload = function (loadEvent) {
      var arrayBuffer = loadEvent.target.result;
      callback(arrayBuffer);
    };

    reader.readAsArrayBuffer(file);
  }

  const handleFileInput = (event) => {
    readFileInputEventAsArrayBuffer(event.target.files[0], function (
      arrayBuffer
    ) {
      mammoth
        .extractRawText({ arrayBuffer: arrayBuffer })
        .then(function (result) {
          var text = result.value;
          console.log(text);
          setValue(text);
        })
        .done();
    });
  };
  return (
    <div className="container">
      <input type="file" id="input" onChange={handleFileInput} />
      <div>{value}</div>
    </div>
  );
}

export default Admin;

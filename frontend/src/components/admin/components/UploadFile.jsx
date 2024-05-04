import { fileUpload } from "@/api/file";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react";

export default function UploadFile() {
  const [file, setFile] = useState();

  function handleChangeFile(e) {
    let file = e.target.files[0];
    if (file) {
      setFile(e.target.files[0]);
    }
  }

  async function handleUploadFile(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("avatar", file);

    await fileUpload(formData);
  }

  return (
    <div className="mt-8 grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="word">Upload File</Label>
      <Input id="word" accept='.doc,.docx' type="file" onChange={handleChangeFile} />
      <Button onClick={handleUploadFile}>Submit</Button>
    </div>
  )
}
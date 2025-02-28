import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import OCRResult from "./components/OCRResult";

function App() {
  const [ocrText, setOcrText] = useState("");

  return (
    <div>
      <h1>OCR Image Uploader</h1>
      <FileUpload setOcrText={setOcrText} />
      <OCRResult ocrText={ocrText} />
    </div>
  );
}

export default App;
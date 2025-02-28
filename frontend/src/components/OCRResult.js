import React from "react";

const OCRResult = ({ ocrText }) => {
    return (
        <div>
            <h2>OCR 結果</h2>
            <textarea value={ocrText} readOnly rows={5} cols={50} />
        </div>
    );
};

export default OCRResult;
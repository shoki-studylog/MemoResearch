import axios from "axios";
import React, { useState } from "react";

const FileUpload = ({ setOcrText }) => {
    const [file, setFile] = useState(null);

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        try {
            const res = await axios.post(
                `${process.env.REACT_APP_API_URL}/process_image`,
                formData,
                { headers: { "Content-Type": "multipart/form-data" } }
            );
            setOcrText(res.data.text);
        } catch (error) {
            console.error("OCR Error:", error);
            alert("OCR処理に失敗しました。");
        }
    };

    return (
        <div>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>アップロード & OCR</button>
        </div>
    );
};

export default FileUpload;
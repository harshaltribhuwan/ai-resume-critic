import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { usePdfParser } from "../hooks/usePdfParser";
import "./ResumeUploader.scss";

export const ResumeUploader = ({ onParsed }) => {
  const { parsePdf } = usePdfParser();
  const fileInputRef = useRef(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFileName(file.name);
      const text = await parsePdf(file);
      onParsed(text);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current.click();
  };

  return (
    <motion.div
      className="uploader"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, type: "spring", damping: 14 }}
    >
      <label>Upload Your Resume (PDF)</label>

      <motion.button
        className="upload-btn"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={triggerFileSelect}
      >
        📎 Upload Resume
      </motion.button>

      {fileName && <p className="file-name">Uploaded: {fileName}</p>}

      <input
        ref={fileInputRef}
        type="file"
        accept=".pdf"
        onChange={handleFileChange}
        style={{ display: "none" }}
      />
    </motion.div>
  );
};

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";
import { usePdfParser } from "../hooks/usePdfParser";
import "./ResumeUploader.scss";

export const ResumeUploader = ({ onParsed }) => {
  const fileInputRef = useRef(null);
  const { parsePdf } = usePdfParser();

  const [fileName, setFileName] = useState("");
  const [showConfetti, setShowConfetti] = useState(false);
  const [width, height] = useWindowSize();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setFileName(file.name);

      const parsedData = await parsePdf(file);
      onParsed(parsedData);

      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
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
      {showConfetti && <Confetti width={width} height={height} />}

      <label>Upload Your Resume (PDF)</label>

      <motion.button
        className="upload-btn"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={triggerFileSelect}
      >
        📎 Upload Resume
      </motion.button>

      {fileName && (
        <motion.p
          className="file-name"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Uploaded: {fileName}
        </motion.p>
      )}

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

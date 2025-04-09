import { motion } from "framer-motion";
import { useState } from "react";
import { ResumeUploader } from "./components/ResumeUploader";
import { FeedbackSection } from "./components/FeedbackSection";
import { getMockedFeedback } from "./utils/parseResume";
import "./App.scss";

export default function App() {
  const [resumeText, setResumeText] = useState("");
  const [feedback, setFeedback] = useState([]);

const handleResumeParsed = ({ text, numPages }) => {
  setResumeText(text);
  setFeedback(getMockedFeedback({ text, numPages }));
};

  return (
      <motion.div
        className="app-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="app-card"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, damping: 14 }}
        >
          <motion.h1
            className="app-heading"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            AI Resume Critic
          </motion.h1>

          <motion.p
            className="app-subheading"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            AI-powered feedback tailored for tech resumes
          </motion.p>

          <ResumeUploader onParsed={handleResumeParsed} />
          {feedback.length > 0 && <FeedbackSection feedback={feedback} />}
        </motion.div>
      </motion.div>
  );
}

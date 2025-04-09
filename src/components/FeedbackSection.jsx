import { motion } from "framer-motion";
import "./FeedbackSection.scss";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const FeedbackSection = ({ feedback }) => {
  return (
    <motion.div
      className="feedback"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 variants={itemVariants}>💡 Detailed Feedback</motion.h2>
      <ul>
        {feedback.map((item, index) => (
          <motion.li key={index} variants={itemVariants}>
            {item}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

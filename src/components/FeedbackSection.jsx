// components/FeedbackSection.jsx
import { Fade, Slide } from "react-awesome-reveal";
import Tilt from "react-parallax-tilt";
import "./FeedbackSection.scss";

export const FeedbackSection = ({ feedback }) => {
  return (
    <div className="feedback">
      <Fade cascade damping={0.1} triggerOnce>
        <h2>💡 Detailed Feedback</h2>
      </Fade>

      <ul>
        {feedback.map((item, index) => (
          <Slide key={index} direction="up" cascade damping={0.15} triggerOnce>
            <Tilt
              tiltMaxAngleX={6}
              tiltMaxAngleY={6}
              glareEnable={true}
              glareColor="#e0e7ff"
            >
              <li>{item}</li>
            </Tilt>
          </Slide>
        ))}
      </ul>
    </div>
  );
};

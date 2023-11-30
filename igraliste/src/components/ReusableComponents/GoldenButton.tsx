import React from "react";
import "./GoldenButton.css";
interface GoldenButtonProps {
  buttonText: string;
  buttonStyle?: React.CSSProperties;
}
const GoldenButton = ({ buttonText, buttonStyle }: GoldenButtonProps) => {
  return (
    <button className="golden-btn" type="submit" style={buttonStyle}>
      {buttonText}
    </button>
  );
};

export default GoldenButton;
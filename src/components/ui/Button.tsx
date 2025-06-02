import "./Button.css";
import LeftArrow from "../icons/LeftArrow";

type ButtonProps = {
  text?: string;
  variant?: "primary" | "secondary" | "back";
  onClick?: () => void;
};

export default function Button({ text, variant, onClick }: ButtonProps) {
  const getButtonClass = () => {
    switch (variant) {
      case "primary":
        return "btn gradient-bg";
      case "secondary":
        return "btn gradient-border";
      case "back":
        return "btn back";
      default:
        return "btn";
    }
  };

  if (variant === "back") {
    return (
      <button className={getButtonClass()} onClick={onClick}>
        <LeftArrow /> {text || "Back"}
      </button>
    );
  }

  return (
    <button className={getButtonClass()} onClick={onClick}>
      {text || "next"}
    </button>
  );
}

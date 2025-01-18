import { useEffect, useState } from "react";

interface IProps {
  text: string;
  delay?: number;
  infinite: boolean;
}

const Typewriter = ({ text, delay = 100, infinite }: IProps) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let timeout: any

    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
        
      }, delay);

    
    } else if (infinite) {
      // ADD THIS CHECK
      setCurrentIndex(0);
      setCurrentText("");
    }

    return () => {clearTimeout(timeout), clearTimeout};
  }, [currentIndex, delay, infinite, text]);

  return <span className="after:h-full after:w-1 break-words w-screen-smallScreens overflow-hidden after:absolute relative after:-right-2 after:bg-light font-code after:animate-title">{currentText}</span>;
};

export default Typewriter;

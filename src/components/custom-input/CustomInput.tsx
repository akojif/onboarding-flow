import { useRef, useEffect, useCallback, useState } from "react";
import "./CustomInput.css";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  type?: string;
  onValueChange: (newValue: string) => void;
  onEnterPress?: () => void;
}

function CustomInput({
  value = "",
  onValueChange,
  placeholder = "type here",
  type = "text",
  spellCheck = false,
  onEnterPress,
  ...props
}: CustomInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const InputCaretRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [cursorPosition, setCursorPosition] = useState(0);

  // Create a canvas for efficient text measurement
  const getTextWidth = useCallback((text: string) => {
    if (!canvasRef.current || !overlayRef.current) return 0;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return 0;
    
    const computedStyle = window.getComputedStyle(overlayRef.current);
    ctx.font = `${computedStyle.fontWeight} ${computedStyle.fontSize} ${computedStyle.fontFamily}`;
    
    return ctx.measureText(text).width;
  }, []);

  // updateCaret uses value and cursorPosition, so we memoize it based on both
  const updateCaret = useCallback(() => {
    if (!inputRef.current || !overlayRef.current || !InputCaretRef.current)
      return;

    // keep caret next to placeholder text if no actual input value
    if (value.length === 0) {
      InputCaretRef.current.style.left = "0px";
      return;
    }

    // Calculate caret position based on text width up to cursor position
    const textUpToCursor = value.substring(0, cursorPosition);
    const textWidth = getTextWidth(textUpToCursor);
    const caretLeft = textWidth + 8;
    
    InputCaretRef.current.style.left = `${caretLeft}px`;

    // Ensure input stays focused and cursor position is maintained
    if (inputRef.current) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(cursorPosition, cursorPosition);
    }
  }, [value, cursorPosition, getTextWidth]);

  // Update caret on every value or cursor position change
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      updateCaret();
    }
  }, [updateCaret]);

  // On window resize re-adjust caret's position
  useEffect(() => {
    window.addEventListener("resize", updateCaret);
    return () => {
      window.removeEventListener("resize", updateCaret);
    };
    // eslint-disable-next-line
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= 30) {
      onValueChange(newValue);
      setCursorPosition(e.target.selectionStart || 0);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value) {
      onEnterPress?.();
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    setCursorPosition(e.currentTarget.selectionStart || 0);
  };

  const handleSelect = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setCursorPosition(e.currentTarget.selectionStart || 0);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setCursorPosition(e.currentTarget.selectionStart || 0);
  };

  return (
    <div className='input-container'>
      <input
        ref={inputRef}
        type={type}
        value={value}
        spellCheck={spellCheck}
        onChange={handleChange}
        onFocus={updateCaret}
        onBlur={updateCaret}
        onKeyDown={handleKeyDown}
        onKeyUp={handleKeyUp}
        onClick={handleClick}
        onSelect={handleSelect}
        maxLength={30}
        {...props}
      />

      <div ref={overlayRef} className='overlay' style={{ paddingLeft: "8px" }}>
        {value.length === 0 ? (
          <span className='placeholder'>{placeholder}</span>
        ) : (
          Array.from(value).map((char, i) => (
            <span key={i} className='typed'>
              {char}
            </span>
          ))
        )}
      </div>

      <div ref={InputCaretRef} className='caret' />
      
      <canvas 
        ref={canvasRef} 
        style={{ 
          position: 'absolute', 
          visibility: 'hidden', 
          pointerEvents: 'none',
          width: '1px',
          height: '1px'
        }} 
      />
    </div>
  );
}

export default CustomInput;

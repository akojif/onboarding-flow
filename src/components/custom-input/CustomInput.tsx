import { useRef, useEffect, useCallback } from "react";
import "./CustomInput.css";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  type?: string;
  onValueChange: (newValue: string) => void;
  websiteVarient?: boolean;
}

function CustomInput({
  value = "",
  onValueChange,
  placeholder = "type here",
  type = "text",
  spellCheck = false,
  websiteVarient,
  ...props
}: CustomInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  // updateCursor uses value and refs, so we memoize it based on value
  const updateCursor = useCallback(() => {
    if (!inputRef.current || !overlayRef.current || !cursorRef.current) return;

    if (value.length === 0) {
      cursorRef.current.style.left = "0px";
      return;
    }

    const overlayWidth = overlayRef.current.scrollWidth;
    const maxWidth = overlayRef.current.offsetWidth;
    const clampedWidth = Math.min(overlayWidth, maxWidth);
    inputRef.current.style.width = "100%";
    cursorRef.current.style.left = `${clampedWidth}px`;

    const container = overlayRef.current.parentElement;
    if (container) {
      container.scrollLeft = container.scrollWidth;
    }
  }, [value]);

  // Update cursor on every value change
  useEffect(() => {
    updateCursor();
  }, [updateCursor]);

  // Add resize listener once (on mount)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    window.addEventListener("resize", updateCursor);

    if (inputRef.current) {
      inputRef.current.focus();
      if (cursorRef.current) {
        cursorRef.current.style.left = "0px";
      }
    }

    return () => window.removeEventListener("resize", updateCursor);
  }, []);

  // Website variant cursor adjustment
  useEffect(() => {
    if (websiteVarient && cursorRef.current) {
      cursorRef.current.style.left = "10ch";
    }
  }, [websiteVarient]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= 40) {
      onValueChange(newValue);
    }
  };

  return (
    <div className='input-container'>
      <input
        ref={inputRef}
        type={type}
        value={value}
        spellCheck={spellCheck}
        onChange={handleChange}
        onFocus={updateCursor}
        onBlur={updateCursor}
        maxLength={40}
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

      <div ref={cursorRef} className='cursor' />
    </div>
  );
}

export default CustomInput;

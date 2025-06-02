import { useRef, useEffect, useCallback } from "react";
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

  // updateCaret uses value and refs, so we memoize it based on value
  const updateCaret = useCallback(() => {
    if (!inputRef.current || !overlayRef.current || !InputCaretRef.current)
      return;

    // keep caret next to placeholder text if no actual input value
    if (value.length === 0) {
      InputCaretRef.current.style.left = "0px";
      return;
    }

    // update caret position
    const overlayWidth = overlayRef.current.scrollWidth;
    const maxWidth = overlayRef.current.offsetWidth;
    const clampedWidth = Math.min(overlayWidth, maxWidth);
    inputRef.current.style.width = "100%";
    InputCaretRef.current.style.left = `${clampedWidth}px`;

    const container = overlayRef.current.parentElement;
    if (container) {
      container.scrollLeft = container.scrollWidth;
    }
  }, [value]);

  // Update caret on every value change
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
      updateCaret();
    }
  }, [updateCaret]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // On window resize re-adjust caret's position
  useEffect(() => {
    window.addEventListener("resize", updateCaret);
    return () => {
      window.removeEventListener("resize", updateCaret);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (newValue.length <= 30) {
      onValueChange(newValue);
    }
  };

  const handleEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value) {
      onEnterPress?.();
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
        onFocus={updateCaret}
        onBlur={updateCaret}
        onKeyDown={handleEnterPress}
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
    </div>
  );
}

export default CustomInput;

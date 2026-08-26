import { useEffect } from "react";
import { useRef } from "react";

export const Exercise1 = () => {
  const focusRef = useRef();
  useEffect(() => {
    focusRef.current.focus();
  }, []);
  return (
    <>
      <input type="text" ref={focusRef} />
      <br />
      <button>Focus Button</button>
    </>
  );
};

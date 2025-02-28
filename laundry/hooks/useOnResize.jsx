import { useEffect, useRef } from "react";

export default function useOnResize(callback, debounceMs = 1) {
  const debounce = useRef();
  useEffect(() => {
    const handleResize = () => {
      clearTimeout(debounce.current);
      debounce.current = setTimeout(callback, debounceMs);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, {});
}

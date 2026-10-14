import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed = 110) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((c) => {
        if (c >= text.length) {
          clearInterval(timer);
          return c;
        }
        return c + 1;
      });
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return text.slice(0, count);
}
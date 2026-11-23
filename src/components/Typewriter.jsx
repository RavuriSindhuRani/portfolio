import { useEffect, useRef, useState } from "react";
import "./Typewriter.css";

/**
 * Types out one or more strings, character by character.
 * - loop=false: types the (single) word once and leaves the cursor blinking.
 * - loop=true: types each word, pauses, deletes, then moves to the next.
 */
export default function Typewriter({
  words,
  loop = true,
  typingSpeed = 85,
  deletingSpeed = 45,
  pauseTime = 1600,
  className = "",
}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [done, setDone] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (done) return undefined;
    const currentWord = words[wordIndex % words.length];

    const tick = () => {
      if (!deleting) {
        const next = currentWord.slice(0, text.length + 1);
        setText(next);
        if (next === currentWord) {
          if (!loop && wordIndex === words.length - 1) {
            setDone(true);
            return;
          }
          timeoutRef.current = setTimeout(() => setDeleting(true), pauseTime);
          return;
        }
      } else {
        const next = currentWord.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setWordIndex((i) => (i + 1) % words.length);
          return;
        }
      }
    };

    timeoutRef.current = setTimeout(
      tick,
      deleting ? deletingSpeed : typingSpeed
    );
    return () => clearTimeout(timeoutRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, deleting, wordIndex, done]);

  const fullLabel = words.join(", ");

  return (
    <span className={className}>
      <span aria-hidden="true">
        {text}
        <span className="typewriter-cursor" />
      </span>
      <span className="sr-only">{fullLabel}</span>
    </span>
  );
}

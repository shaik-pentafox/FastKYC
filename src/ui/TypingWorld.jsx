// import { useState, useEffect, useRef } from "react";

// export default function TypingWord({
//   title2,
//   title3,
//   fixedText,
//   speed = 150,
//   startDelay = 1000,
//   className,
// }) {
//   const words = [title2, title3];
//   const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b));
//   const [typedText, setTypedText] = useState("");

//   const wordIndexRef = useRef(0);
//   const charIndexRef = useRef(0);
//   const isDeletingRef = useRef(false);
//   const lastTimestampRef = useRef(0);
//   const startedRef = useRef(false);

//   useEffect(() => {
//     let animationFrame;

//     const tick = (timestamp) => {
//       if (!lastTimestampRef.current) lastTimestampRef.current = timestamp;
//       const elapsed = timestamp - lastTimestampRef.current;

//       if (!startedRef.current) {
//         if (elapsed > startDelay) {
//           startedRef.current = true;
//           lastTimestampRef.current = timestamp;
//         }
//       } else if (elapsed > speed) {
//         const currentWord = words[wordIndexRef.current];
//         if (!currentWord) return;

//         if (!isDeletingRef.current) {
//           if (charIndexRef.current <= currentWord.length) {
//             setTypedText(currentWord.slice(0, charIndexRef.current));
//             charIndexRef.current += 1;
//           } else {
//             isDeletingRef.current = true;
//           }
//         } else {
//           if (charIndexRef.current >= 0) {
//             setTypedText(currentWord.slice(0, charIndexRef.current));
//             charIndexRef.current -= 1;
//           } else {
//             isDeletingRef.current = false;
//             wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
//             charIndexRef.current = 0;
//           }
//         }
//         lastTimestampRef.current = timestamp;
//       }

//       animationFrame = requestAnimationFrame(tick);
//     };

//     animationFrame = requestAnimationFrame(tick);

//     return () => cancelAnimationFrame(animationFrame);
//   }, [words, speed, startDelay]);

//   return (
//     <p className={`${className} flex items-center`}>
//       {/* Animated text inside fixed-width box with border-box */}
//       <span
//         className="inline-block border-none border-gray-300 text-left box-border"
//         style={{ width: `${longestWord.length}ch` }}
//       >
//         {typedText}
//       </span>
//       <span className="mr-22">{fixedText}</span>
//     </p>
//   );
// }

import { useState, useEffect, useRef } from "react";

export default function TypingWord({
  title2,
  title3,
  fixedText,
  speed,
  startDelay,
  pauseDelay,
  className,
}) {
  const words = [title2, title3];
  const [displayText, setDisplayText] = useState(fixedText);

  const wordIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const lastTimestampRef = useRef(0);
  const startedRef = useRef(false);
  const pauseStartRef = useRef(null);

  useEffect(() => {
    let animationFrame;

    const tick = (timestamp) => {
      if (!lastTimestampRef.current) lastTimestampRef.current = timestamp;
      const elapsed = timestamp - lastTimestampRef.current;

      if (!startedRef.current) {
        if (elapsed > startDelay) {
          startedRef.current = true;
          lastTimestampRef.current = timestamp;
        }
      } else if (elapsed > speed) {
        const currentWord = words[wordIndexRef.current];
        if (!currentWord) return;

        if (!isDeletingRef.current) {
          if (charIndexRef.current <= currentWord.length) {
            setDisplayText(
              currentWord.slice(0, charIndexRef.current) + " " + fixedText
            );
            charIndexRef.current += 1;
          } else {
            if (!pauseStartRef.current) pauseStartRef.current = timestamp;
            if (timestamp - pauseStartRef.current > pauseDelay) {
              isDeletingRef.current = true;
              pauseStartRef.current = null;
            }
          }
        } else {
          if (charIndexRef.current >= 0) {
            setDisplayText(
              currentWord.slice(0, charIndexRef.current) + " " + fixedText
            );
            charIndexRef.current -= 1;
          } else {
            isDeletingRef.current = false;
            wordIndexRef.current = (wordIndexRef.current + 1) % words.length;
            charIndexRef.current = 0;
          }
        }
        lastTimestampRef.current = timestamp;
      }

      animationFrame = requestAnimationFrame(tick);
    };

    animationFrame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(animationFrame);
  }, [words, fixedText, speed, startDelay, pauseDelay]);

  return <p className={className}>{displayText}</p>;
}

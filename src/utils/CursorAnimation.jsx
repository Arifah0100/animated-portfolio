import React, { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  const mouse = useRef({
    x: 0,
    y: 0,
  });

  const position = useRef({
    x: 0,
    y: 0,
  });

  const [cursorSize, setCursorSize] = useState(32);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    let animationFrame;

    const animate = () => {
      // Smooth cursor movement
      const smoothing = 0.15;

      position.current.x +=
        (mouse.current.x - position.current.x) * smoothing;

      position.current.y +=
        (mouse.current.y - position.current.y) * smoothing;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `
          translate3d(
            ${position.current.x - cursorSize / 2}px,
            ${position.current.y - cursorSize / 2}px,
            0
          )
        `;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrame);
    };
  }, [cursorSize]);

  useEffect(() => {
    const interactiveElements =
      "p, h1, h2, h3, h4, h5, h6, a, button";

    const handleMouseOver = (e) => {
      const target = e.target;

      if (
        target.matches(interactiveElements) ||
        target.closest(interactiveElements)
      ) {
        setCursorSize(80);
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;

      if (
        target.matches(interactiveElements) ||
        target.closest(interactiveElements)
      ) {
        setCursorSize(32);
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="
        fixed
        rounded-full
        pointer-events-none
        z-[9999]
        bg-white
        mix-blend-difference
      "
      style={{
        width: `${cursorSize}px`,
        height: `${cursorSize}px`,
        transition: "width 0.3s ease, height 0.3s ease",
        willChange: "transform",
      }}
    />
  );
}
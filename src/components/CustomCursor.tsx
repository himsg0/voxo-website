import { useEffect, useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [hasFinePointer, setHasFinePointer] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const rafRef = useRef<number>(0);
  const posRef = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Only show custom cursor on devices with a fine pointer (mouse)
    const mql = window.matchMedia("(pointer: fine)");
    setHasFinePointer(mql.matches);

    const onChange = (e: MediaQueryListEvent) => {
      setHasFinePointer(e.matches);
      if (!e.matches) {
        document.documentElement.classList.remove("has-custom-cursor");
      }
    };
    mql.addEventListener("change", onChange);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  // Toggle the cursor-hiding class on <html>
  useEffect(() => {
    if (hasFinePointer) {
      document.documentElement.classList.add("has-custom-cursor");
    } else {
      document.documentElement.classList.remove("has-custom-cursor");
    }
    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [hasFinePointer]);

  const flushPosition = useCallback(() => {
    setMousePosition({ ...posRef.current });
    rafRef.current = 0;
  }, []);

  useEffect(() => {
    if (!hasFinePointer) return;

    const updateMousePosition = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(flushPosition);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "button" ||
        target.tagName.toLowerCase() === "a" ||
        target.closest("button") ||
        target.closest("a") ||
        target.classList.contains("interactive")
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("mouseover", handleMouseOver);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [hasFinePointer, flushPosition]);

  // Don't render on touch devices or during SSR
  if (!hasFinePointer) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
      animate={{
        x: mousePosition.x - (isHovering ? 24 : 8),
        y: mousePosition.y - (isHovering ? 24 : 8),
        width: isHovering ? 48 : 16,
        height: isHovering ? 48 : 16,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderRadius: "50%",
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.5,
      }}
    />
  );
}


import React, { useRef } from "react";

export default function CursorFollowImage({ src, alt }) {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);

  const handleMove = (e) => {
    if (!wrapperRef.current || !imgRef.current) return;

    const rect = wrapperRef.current.getBoundingClientRect();

    // cursor position inside the container (0 to 1)
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // move strength (px)
    const moveX = (x - 0.5) * 20;
    const moveY = (y - 0.5) * 20;

    imgRef.current.style.transform = `translate(${moveX}px, ${moveY}px) scale(1.06)`;
  };

  const handleLeave = () => {
    if (!imgRef.current) return;
    imgRef.current.style.transform = "translate(0px, 0px) scale(1)";
  };

  return (
    <div
      ref={wrapperRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="overflow-hidden rounded-xl border border-black/10 dark:border-white/10 aspect-video"
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-200 ease-out"
      />
    </div>
  );
}

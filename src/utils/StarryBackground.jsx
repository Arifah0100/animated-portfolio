import React from "react";

export default function StarryBackground() {
  const stars = Array.from({ length: 120 });

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0F172A]">
      {/* Stars */}
      {stars.map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 3 + 2}s`,
            opacity: Math.random() * 0.7 + 0.2,
          }}
        />
      ))}

      {/* Meteors */}
      <div className="meteor meteor-1" />
      <div className="meteor meteor-2" />
      <div className="meteor meteor-3" />
    </div>
  );
}
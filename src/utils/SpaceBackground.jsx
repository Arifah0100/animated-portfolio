import React, { useMemo } from "react";

export default function SpaceBackground() {
  const stars = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
    }));
  }, []);

  const connections = useMemo(() => {
    const lines = [];

    stars.forEach((star, index) => {
      // Find nearby stars
      const nearbyStars = stars
        .map((other, otherIndex) => ({
          ...other,
          index: otherIndex,
          distance: Math.sqrt(
            Math.pow(star.x - other.x, 2) +
            Math.pow(star.y - other.y, 2)
          ),
        }))
        .filter(
          (other) =>
            other.index !== index &&
            other.distance < 18
        )
        .sort((a, b) => a.distance - b.distance);

      // Randomly connect to 1-2 nearby stars
      nearbyStars.slice(0, Math.floor(Math.random() * 2) + 1).forEach(
        (other) => {
          // Prevent duplicate connections
          const exists = lines.some(
            (line) =>
              (line.from === index && line.to === other.index) ||
              (line.from === other.index && line.to === index)
          );

          if (!exists) {
            lines.push({
              id: `${index}-${other.index}`,
              from: index,
              to: other.index,
              delay: Math.random() * 6,
              duration: Math.random() * 4 + 4,
            });
          }
        }
      );
    });

    return lines;
  }, [stars]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#020617]">

      {/* =========================
          SPACE GLOW
      ========================== */}

      <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-900/10 blur-[120px] -top-40 -left-40" />

      <div className="absolute w-[500px] h-[500px] rounded-full bg-blue-900/10 blur-[120px] bottom-[-200px] right-[-100px]" />

      <div className="absolute w-[350px] h-[350px] rounded-full bg-fuchsia-900/10 blur-[120px] top-[40%] right-[20%]" />

      {/* =========================
          CONSTELLATION LINES
      ========================== */}

      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
      >
        {connections.map((connection) => {
          const from = stars[connection.from];
          const to = stars[connection.to];

          return (
            <line
              key={connection.id}
              x1={`${from.x}%`}
              y1={`${from.y}%`}
              x2={`${to.x}%`}
              y2={`${to.y}%`}
              className="constellation-line"
              style={{
                animationDelay: `${connection.delay}s`,
                animationDuration: `${connection.duration}s`,
              }}
            />
          );
        })}
      </svg>

      {/* =========================
          STARS
      ========================== */}

      {stars.map((star) => (
        <span
          key={star.id}
          className="absolute rounded-full bg-white constellation-star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}

    </div>
  );
}
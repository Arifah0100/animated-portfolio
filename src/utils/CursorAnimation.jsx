import React, { useEffect, useRef } from "react";

export default function CursorAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrame;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let lastX = mouseX;
    let lastY = mouseY;
    let hovering = false;
    let hoverX = 0;
    let hoverY = 0;

    const particles = [];
    const stars = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 80; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.5 + 0.15,
        speed: Math.random() * 0.02 + 0.005,
      });
    }

    const createParticle = () => {
      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed < 1) return;

      particles.push({
        x: mouseX + (Math.random() - 0.5) * 8,
        y: mouseY + (Math.random() - 0.5) * 8,
        vx: -dx * 0.08 + (Math.random() - 0.5) * 0.4,
        vy: -dy * 0.08 + (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2.5 + 0.5,
        life: 1,
        decay: Math.random() * 0.025 + 0.015,
        hue: Math.random() > 0.5 ? 285 : 320,
      });
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      createParticle();
      lastX += (mouseX - lastX) * 0.25;
      lastY += (mouseY - lastY) * 0.25;
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest("a, button, input, textarea, select, [role='button'], [data-cursor='card']");
      if (target) {
        hovering = true;
        const rect = target.getBoundingClientRect();
        hoverX = rect.left + rect.width / 2;
        hoverY = rect.top + rect.height / 2;
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest("a, button, input, textarea, select, [role='button'], [data-cursor='card']");
      if (target && !target.contains(e.relatedTarget)) {
        hovering = false;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.alpha += Math.sin(Date.now() * star.speed) * 0.01;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${Math.max(0.05, star.alpha)})`;
        ctx.fill();
      });

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.life -= particle.decay;
        particle.size *= 0.985;

        if (particle.life <= 0) {
          particles.splice(index, 1);
          return;
        }

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 5
        );

        gradient.addColorStop(0, `hsla(${particle.hue},100%,75%,${particle.life})`);
        gradient.addColorStop(0.4, `hsla(${particle.hue},100%,65%,${particle.life * 0.5})`);
        gradient.addColorStop(1, `hsla(${particle.hue},100%,50%,0)`);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue},100%,85%,${particle.life})`;
        ctx.fill();
      });

      if (hovering) {
        hoverX += (mouseX - hoverX) * 0.08;
        hoverY += (mouseY - hoverY) * 0.08;

        const distance = Math.sqrt(
          Math.pow(mouseX - hoverX, 2) + Math.pow(mouseY - hoverY, 2)
        );

        const radius = 32 + Math.sin(Date.now() * 0.006) * 4;

        ctx.beginPath();
        ctx.arc(hoverX, hoverY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = "rgba(217,70,239,0.35)";
        ctx.lineWidth = 1;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(217,70,239,0.8)";
        ctx.stroke();
        ctx.shadowBlur = 0;

        const orbitPoints = 6;

        for (let i = 0; i < orbitPoints; i++) {
          const angle = Date.now() * 0.002 + (Math.PI * 2 * i) / orbitPoints;
          const orbitRadius = radius + 5;
          const x = hoverX + Math.cos(angle) * orbitRadius;
          const y = hoverY + Math.sin(angle) * orbitRadius;

          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = i % 2 === 0 ? "rgba(217,70,239,0.9)" : "rgba(34,211,238,0.9)";
          ctx.shadowBlur = 12;
          ctx.shadowColor = i % 2 === 0 ? "rgba(217,70,239,0.9)" : "rgba(34,211,238,0.9)";
          ctx.fill();
          ctx.shadowBlur = 0;
        }

        if (distance < 150) {
          const cometX = mouseX - (mouseX - hoverX) * 0.35;
          const cometY = mouseY - (mouseY - hoverY) * 0.35;

          const cometGradient = ctx.createLinearGradient(
            mouseX,
            mouseY,
            cometX,
            cometY
          );

          cometGradient.addColorStop(0, "rgba(255,255,255,0.9)");
          cometGradient.addColorStop(0.2, "rgba(217,70,239,0.8)");
          cometGradient.addColorStop(1, "rgba(217,70,239,0)");

          ctx.beginPath();
          ctx.moveTo(mouseX, mouseY);
          ctx.lineTo(cometX, cometY);
          ctx.strokeStyle = cometGradient;
          ctx.lineWidth = 3;
          ctx.shadowBlur = 15;
          ctx.shadowColor = "rgba(217,70,239,0.8)";
          ctx.stroke();
          ctx.shadowBlur = 0;
        }

        const constellationCount = 5;
        const constellationPoints = [];

        for (let i = 0; i < constellationCount; i++) {
          const angle = Date.now() * 0.0005 + (Math.PI * 2 * i) / constellationCount;
          const distance = radius + 18 + Math.sin(Date.now() * 0.002 + i) * 8;

          constellationPoints.push({
            x: hoverX + Math.cos(angle) * distance,
            y: hoverY + Math.sin(angle) * distance,
          });
        }

        for (let i = 0; i < constellationPoints.length; i++) {
          const point = constellationPoints[i];
          const next = constellationPoints[(i + 1) % constellationPoints.length];

          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(next.x, next.y);
          ctx.strokeStyle = "rgba(168,85,247,0.18)";
          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(point.x, point.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = "rgba(236,72,153,0.8)";
          ctx.shadowBlur = 10;
          ctx.shadowColor = "rgba(236,72,153,0.8)";
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
    />
  );
}
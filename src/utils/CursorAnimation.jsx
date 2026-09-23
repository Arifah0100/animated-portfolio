import React, { useEffect, useRef } from "react";

export default function CursorAnimation() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d", { alpha: true });
    let animationFrame;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let lastX = mouseX;
    let lastY = mouseY;

    let hovering = false;
    let hoverX = 0;
    let hoverY = 0;

    let scrollY = window.scrollY;
    let targetScrollVelocity = 0;
    let scrollVelocity = 0;
    let lastScrollY = scrollY;
    let lastScrollTime = performance.now();

    const particles = [];
    const stars = [];

    const MAX_PARTICLES = 140;
    const STAR_COUNT = 100;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.5 + 0.15,
        twinkle: Math.random() * 0.02 + 0.005,
        depth: Math.random() * 0.8 + 0.2,
        offset: Math.random() * Math.PI * 2,
      });
    }

    const createParticle = () => {
      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed < 1 || particles.length >= MAX_PARTICLES) return;

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

    const handleScroll = () => {
      const now = performance.now();
      const deltaTime = Math.max(now - lastScrollTime, 16);
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY;

      targetScrollVelocity = Math.max(
        -3,
        Math.min(3, (delta / deltaTime) * 16)
      );

      scrollY = currentScrollY;
      lastScrollY = currentScrollY;
      lastScrollTime = now;
    };

    const handleMouseOver = (e) => {
      const target = e.target.closest(
        "a, button, input, textarea, select, [role='button'], [data-cursor='card']"
      );

      if (target) {
        hovering = true;

        const rect = target.getBoundingClientRect();

        hoverX = rect.left + rect.width / 2;
        hoverY = rect.top + rect.height / 2;
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target.closest(
        "a, button, input, textarea, select, [role='button'], [data-cursor='card']"
      );

      if (target && !target.contains(e.relatedTarget)) {
        hovering = false;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    const animate = (time) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      /*
       * =====================================================
       * SMOOTH SCROLL PHYSICS
       * =====================================================
       */

      scrollVelocity += (targetScrollVelocity - scrollVelocity) * 0.08;
      targetScrollVelocity *= 0.92;

      /*
       * =====================================================
       * SPACE STARS
       * =====================================================
       */

      stars.forEach((star) => {
        const twinkle =
          Math.sin(time * star.twinkle + star.offset) * 0.15;

        star.alpha += (twinkle - star.alpha * 0.05) * 0.05;

        /*
         * Scroll movement.
         * Deeper stars move slower.
         */

        star.y -= scrollVelocity * star.depth * 0.7;

        /*
         * Wrap stars around the screen.
         */

        if (star.y < -10) {
          star.y = window.innerHeight + 10;
          star.x = Math.random() * window.innerWidth;
        }

        if (star.y > window.innerHeight + 10) {
          star.y = -10;
          star.x = Math.random() * window.innerWidth;
        }

        const stretch =
          Math.min(Math.abs(scrollVelocity) * star.depth * 4, 12);

        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(
          star.x,
          star.y + (scrollVelocity > 0 ? stretch : -stretch)
        );

        ctx.strokeStyle = `rgba(255,255,255,${Math.max(
          0.05,
          star.alpha
        )})`;

        ctx.lineWidth = star.size;
        ctx.stroke();
      });

      /*
       * =====================================================
       * SCROLLING SPACE PARTICLES
       * =====================================================
       */

      if (Math.abs(scrollVelocity) > 0.25) {
        const amount = Math.min(
          Math.ceil(Math.abs(scrollVelocity) * 1.5),
          5
        );

        for (let i = 0; i < amount; i++) {
          if (particles.length >= MAX_PARTICLES) break;

          particles.push({
            x: Math.random() * window.innerWidth,
            y:
              scrollVelocity > 0
                ? window.innerHeight + 10
                : -10,
            vx: (Math.random() - 0.5) * 0.5,
            vy:
              scrollVelocity > 0
                ? -Math.random() * 2 - 1
                : Math.random() * 2 + 1,
            size: Math.random() * 2 + 0.5,
            life: 0.8,
            decay: 0.025 + Math.random() * 0.02,
            hue: Math.random() > 0.5 ? 285 : 190,
            scrollParticle: true,
          });
        }
      }

      /*
       * =====================================================
       * CURSOR PARTICLES
       * =====================================================
       */

      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];

        particle.x += particle.vx;
        particle.y += particle.vy;

        /*
         * Scroll particles get extra movement.
         */

        if (particle.scrollParticle) {
          particle.y -= scrollVelocity * 1.8;
          particle.vx *= 0.99;
          particle.vy *= 0.99;
        }

        particle.life -= particle.decay;
        particle.size *= 0.985;

        if (
          particle.life <= 0 ||
          particle.x < -50 ||
          particle.x > window.innerWidth + 50 ||
          particle.y < -50 ||
          particle.y > window.innerHeight + 50
        ) {
          particles.splice(i, 1);
          continue;
        }

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 5
        );

        gradient.addColorStop(
          0,
          `hsla(${particle.hue},100%,75%,${particle.life})`
        );

        gradient.addColorStop(
          0.4,
          `hsla(${particle.hue},100%,65%,${particle.life * 0.5})`
        );

        gradient.addColorStop(
          1,
          `hsla(${particle.hue},100%,50%,0)`
        );

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.size * 5,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `hsla(${particle.hue},100%,85%,${particle.life})`;
        ctx.fill();
      }

      /*
       * =====================================================
       * HOVER EFFECT
       * =====================================================
       */

      if (hovering) {
        hoverX += (mouseX - hoverX) * 0.08;
        hoverY += (mouseY - hoverY) * 0.08;

        const distance = Math.sqrt(
          Math.pow(mouseX - hoverX, 2) +
            Math.pow(mouseY - hoverY, 2)
        );

        const radius =
          32 + Math.sin(time * 0.006) * 4;

        ctx.beginPath();
        ctx.arc(
          hoverX,
          hoverY,
          radius,
          0,
          Math.PI * 2
        );

        ctx.strokeStyle = "rgba(217,70,239,0.35)";
        ctx.lineWidth = 1;
        ctx.shadowBlur = 15;
        ctx.shadowColor = "rgba(217,70,239,0.8)";
        ctx.stroke();

        ctx.shadowBlur = 0;

        /*
         * Orbiting particles
         */

        const orbitPoints = 6;

        for (let i = 0; i < orbitPoints; i++) {
          const angle =
            time * 0.002 +
            (Math.PI * 2 * i) / orbitPoints;

          const orbitRadius = radius + 5;

          const x =
            hoverX +
            Math.cos(angle) * orbitRadius;

          const y =
            hoverY +
            Math.sin(angle) * orbitRadius;

          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);

          ctx.fillStyle =
            i % 2 === 0
              ? "rgba(217,70,239,0.9)"
              : "rgba(34,211,238,0.9)";

          ctx.shadowBlur = 12;

          ctx.shadowColor =
            i % 2 === 0
              ? "rgba(217,70,239,0.9)"
              : "rgba(34,211,238,0.9)";

          ctx.fill();

          ctx.shadowBlur = 0;
        }

        /*
         * =================================================
         * COMET
         * =================================================
         */

        if (distance < 150) {
          const cometX =
            mouseX -
            (mouseX - hoverX) * 0.35;

          const cometY =
            mouseY -
            (mouseY - hoverY) * 0.35;

          const cometGradient =
            ctx.createLinearGradient(
              mouseX,
              mouseY,
              cometX,
              cometY
            );

          cometGradient.addColorStop(
            0,
            "rgba(255,255,255,0.9)"
          );

          cometGradient.addColorStop(
            0.2,
            "rgba(217,70,239,0.8)"
          );

          cometGradient.addColorStop(
            1,
            "rgba(217,70,239,0)"
          );

          ctx.beginPath();
          ctx.moveTo(mouseX, mouseY);
          ctx.lineTo(cometX, cometY);

          ctx.strokeStyle = cometGradient;
          ctx.lineWidth = 3;

          ctx.shadowBlur = 15;
          ctx.shadowColor =
            "rgba(217,70,239,0.8)";

          ctx.stroke();

          ctx.shadowBlur = 0;
        }

        /*
         * =================================================
         * CONSTELLATION
         * =================================================
         */

        const constellationCount = 5;
        const constellationPoints = [];

        for (
          let i = 0;
          i < constellationCount;
          i++
        ) {
          const angle =
            time * 0.0005 +
            (Math.PI * 2 * i) /
              constellationCount;

          const distance =
            radius +
            18 +
            Math.sin(
              time * 0.002 + i
            ) *
              8;

          constellationPoints.push({
            x:
              hoverX +
              Math.cos(angle) * distance,
            y:
              hoverY +
              Math.sin(angle) * distance,
          });
        }

        for (
          let i = 0;
          i < constellationPoints.length;
          i++
        ) {
          const point =
            constellationPoints[i];

          const next =
            constellationPoints[
              (i + 1) %
                constellationPoints.length
            ];

          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(next.x, next.y);

          ctx.strokeStyle =
            "rgba(168,85,247,0.18)";

          ctx.lineWidth = 1;
          ctx.stroke();

          ctx.beginPath();

          ctx.arc(
            point.x,
            point.y,
            1.5,
            0,
            Math.PI * 2
          );

          ctx.fillStyle =
            "rgba(236,72,153,0.8)";

          ctx.shadowBlur = 10;
          ctx.shadowColor =
            "rgba(236,72,153,0.8)";

          ctx.fill();

          ctx.shadowBlur = 0;
        }
      }

      /*
       * =====================================================
       * RESET CANVAS EFFECTS
       * =====================================================
       */

      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;

      animationFrame =
        requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "resize",
        resize
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "scroll",
        handleScroll
      );

      window.removeEventListener(
        "mouseover",
        handleMouseOver
      );

      window.removeEventListener(
        "mouseout",
        handleMouseOut
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
    />
  );
}
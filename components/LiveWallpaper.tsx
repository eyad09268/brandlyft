import React, { useEffect, useRef } from 'react';
import { ColorTheme } from '../types';

interface Props {
  theme: ColorTheme;
}

const THEME_COLORS: Record<ColorTheme, { blob1: string; blob2: string; blob3: string; particle: string }> = {
  'cyber-violet': {
    blob1: 'rgba(121, 40, 202, 0.45)',
    blob2: 'rgba(255, 59, 107, 0.38)',
    blob3: 'rgba(67, 56, 202, 0.35)',
    particle: '#ff3b6b',
  },
  'electric-cyan': {
    blob1: 'rgba(0, 242, 254, 0.45)',
    blob2: 'rgba(79, 172, 254, 0.35)',
    blob3: 'rgba(168, 85, 247, 0.3)',
    particle: '#00f2fe',
  },
  'neon-sunset': {
    blob1: 'rgba(255, 123, 0, 0.45)',
    blob2: 'rgba(255, 59, 107, 0.4)',
    blob3: 'rgba(236, 72, 153, 0.3)',
    particle: '#ff7b00',
  },
  'emerald-matrix': {
    blob1: 'rgba(16, 185, 129, 0.4)',
    blob2: 'rgba(6, 182, 212, 0.35)',
    blob3: 'rgba(99, 102, 241, 0.25)',
    particle: '#10b981',
  },
};

export const LiveWallpaper: React.FC<Props> = ({ theme }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let animationId: number;
    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Particle Stars
    const particles = Array.from({ length: 40 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2 + 0.6,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      alpha: Math.random() * 0.7 + 0.3,
      pulse: Math.random() * 0.03 + 0.01,
    }));

    // Blobs
    const blobs = [
      { x: width * 0.25, y: height * 0.25, r: Math.min(width, height) * 0.45, vx: 0.4, vy: 0.3, colorIndex: 'blob1' as const },
      { x: width * 0.75, y: height * 0.35, r: Math.min(width, height) * 0.5, vx: -0.35, vy: 0.45, colorIndex: 'blob2' as const },
      { x: width * 0.5, y: height * 0.8, r: Math.min(width, height) * 0.4, vx: 0.3, vy: -0.3, colorIndex: 'blob3' as const },
    ];

    const render = () => {
      const activeColors = THEME_COLORS[theme] || THEME_COLORS['cyber-violet'];

      // Clear dark background
      ctx.fillStyle = '#05060f';
      ctx.fillRect(0, 0, width, height);

      // Render gradient blobs
      blobs.forEach((b) => {
        b.x += b.vx;
        b.y += b.vy;

        if (b.x - b.r < -100 || b.x + b.r > width + 100) b.vx *= -1;
        if (b.y - b.r < -100 || b.y + b.r > height + 100) b.vy *= -1;

        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        const col = activeColors[b.colorIndex];
        g.addColorStop(0, col);
        g.addColorStop(1, 'rgba(5, 6, 15, 0)');

        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // Interactive Mouse Aura Glow
      const mouseGlow = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 300);
      mouseGlow.addColorStop(0, activeColors.blob1);
      mouseGlow.addColorStop(1, 'rgba(5, 6, 15, 0)');
      ctx.fillStyle = mouseGlow;
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 300, 0, Math.PI * 2);
      ctx.fill();

      // Render Floating Particles / Sparkles
      ctx.fillStyle = activeColors.particle;
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += Math.sin(Date.now() * p.pulse) * 0.01;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.globalAlpha = Math.max(0.1, Math.min(1, p.alpha));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 transition-opacity duration-1000"
    />
  );
};

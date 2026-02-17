"use client";

import React, { useEffect, useMemo, useRef } from "react";

import { cn } from "@/lib/utils";

type WavyBackgroundProps = {
  className?: string;
  children?: React.ReactNode;
  waveWidth?: number;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  colors?: string[];
  backgroundFill?: string;
};

const SPEED = {
  slow: 0.0008,
  fast: 0.0016,
} as const;

function clamp(n: number, min: number, max: number) {
  return Math.min(max, Math.max(min, n));
}

export function WavyBackground({
  className,
  children,
  waveWidth = 60,
  blur = 12,
  speed = "slow",
  waveOpacity = 0.35,
  colors,
  backgroundFill,
}: WavyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);

  const palette = useMemo(
    () =>
      colors ?? ["#14b8a6", "#22c55e", "#38bdf8"],
    [colors]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let t = 0;
    const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;

      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${Math.floor(width)}px`;
      canvas.style.height = `${Math.floor(height)}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const amplitude = Math.max(18, Math.min(60, height * 0.08));
      const opacity = clamp(waveOpacity, 0, 1);

      ctx.globalCompositeOperation = "screen";

      if (backgroundFill) {
        ctx.globalAlpha = clamp(opacity * 0.18, 0, 1);
        ctx.fillStyle = backgroundFill;
        ctx.fillRect(0, 0, width, height);
      }

      for (let c = 0; c < palette.length; c += 1) {
        ctx.beginPath();
        ctx.lineWidth = Math.max(2, Math.min(6, (waveWidth / 60) * 3));
        ctx.strokeStyle = palette[c];
        ctx.globalAlpha = clamp(opacity * (0.9 - c * 0.12), 0, 1);

        const baseY = height * (0.45 + c * 0.08);

        for (let x = 0; x <= width; x += 2) {
          const y =
            baseY +
            Math.sin(x * 0.01 + t * 1.2 + c) * amplitude +
            Math.sin(x * 0.02 - t * 1.4) * (amplitude * 0.35);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }

        ctx.stroke();

        ctx.globalAlpha = clamp(opacity * 0.12, 0, 1);
        ctx.lineTo(width, height);
        ctx.lineTo(0, height);
        ctx.closePath();
        ctx.fillStyle = palette[c];
        ctx.fill();
      }

      t += SPEED[speed];
      animationRef.current = window.requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(() => resize());
    if (canvas.parentElement) ro.observe(canvas.parentElement);

    resize();
    draw();

    return () => {
      ro.disconnect();
      if (animationRef.current) window.cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    };
  }, [palette, speed, waveOpacity, waveWidth]);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
        style={{ filter: blur ? `blur(${blur}px)` : undefined }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_30%,hsl(var(--primary)/0.22)_0%,transparent_70%)]" />
      {children}
    </div>
  );
}

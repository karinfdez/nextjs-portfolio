'use client';

import { useEffect, useState } from 'react';

export default function MouseGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 left-0 w-full h-full z-50"
      style={{
       maskImage: `radial-gradient(circle at ${position.x}px ${position.y}px, white 60px, transparent 120px)`,
       WebkitMaskImage: `radial-gradient(circle at ${position.x}px ${position.y}px, white 60px, transparent 120px)`,   
        background: 'rgba(255, 255, 255, 0.04)', // orange-500 glow
        transition: 'mask-position 0.1s ease-out',
      }}
    />
  );
}

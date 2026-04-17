import React, { useEffect, useRef, ReactNode } from 'react';

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  intensity?: 'soft' | 'medium' | 'strong';
}

const intensityMap = {
  soft:   { spread: 18, bgOpacity: 0.06, borderOpacity: 0.7, lightOpacity: 0.5 },
  medium: { spread: 22, bgOpacity: 0.10, borderOpacity: 0.9, lightOpacity: 0.7 },
  strong: { spread: 28, bgOpacity: 0.14, borderOpacity: 1.0, lightOpacity: 0.9 },
};

// Injeta o CSS uma única vez
let cssInjected = false;
const injectCSS = () => {
  if (cssInjected || typeof document === 'undefined') return;
  cssInjected = true;
  const style = document.createElement('style');
  style.innerHTML = `
    .ideal-glow::before,
    .ideal-glow::after {
      pointer-events: none;
      content: "";
      position: absolute;
      inset: calc(var(--ig-border) * -1px);
      border: calc(var(--ig-border) * 1px) solid transparent;
      border-radius: 16px;
      background-attachment: fixed;
      background-size: calc(100% + (2 * var(--ig-border) * 1px)) calc(100% + (2 * var(--ig-border) * 1px));
      background-repeat: no-repeat;
      background-position: 50% 50%;
      mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
      mask-clip: padding-box, border-box;
      mask-composite: intersect;
    }
    .ideal-glow::before {
      background-image: radial-gradient(
        calc(var(--ig-size) * 0.75px) calc(var(--ig-size) * 0.75px) at
        calc(var(--ig-x, 0) * 1px) calc(var(--ig-y, 0) * 1px),
        hsl(calc(205 + var(--ig-xp, 0) * var(--ig-spread, 22)) 88% 58% / var(--ig-bop, 0.9)),
        transparent 100%
      );
      filter: brightness(1.8);
    }
    .ideal-glow::after {
      background-image: radial-gradient(
        calc(var(--ig-size) * 0.5px) calc(var(--ig-size) * 0.5px) at
        calc(var(--ig-x, 0) * 1px) calc(var(--ig-y, 0) * 1px),
        hsl(0 100% 100% / var(--ig-lop, 0.7)),
        transparent 100%
      );
    }
  `;
  document.head.appendChild(style);
};

const GlowCard: React.FC<GlowCardProps> = ({
  children,
  className = '',
  intensity = 'medium',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { spread, bgOpacity, borderOpacity, lightOpacity } = intensityMap[intensity];

  useEffect(() => {
    injectCSS();
    const syncPointer = (e: PointerEvent) => {
      if (!cardRef.current) return;
      const el = cardRef.current;
      el.style.setProperty('--ig-x', e.clientX.toFixed(2));
      el.style.setProperty('--ig-xp', (e.clientX / window.innerWidth).toFixed(4));
      el.style.setProperty('--ig-y', e.clientY.toFixed(2));
      // spotlight background
      el.style.backgroundImage = `radial-gradient(
        220px 220px at ${e.clientX}px ${e.clientY}px,
        hsl(${205 + (e.clientX / window.innerWidth) * spread} 85% 62% / ${bgOpacity}),
        transparent
      )`;
    };
    document.addEventListener('pointermove', syncPointer);
    return () => document.removeEventListener('pointermove', syncPointer);
  }, [spread, bgOpacity]);

  return (
    <div
      ref={cardRef}
      className={`ideal-glow relative rounded-2xl overflow-hidden ${className}`}
      style={{
        '--ig-border': 2,
        '--ig-size': 220,
        '--ig-spread': spread,
        '--ig-bop': borderOpacity,
        '--ig-lop': lightOpacity,
        border: '2px solid rgba(31,156,216,0.18)',
        backgroundAttachment: 'fixed',
        backgroundPosition: '50% 50%',
        backgroundColor: 'transparent',
      } as React.CSSProperties}
    >
      {children}
    </div>
  );
};

export { GlowCard };

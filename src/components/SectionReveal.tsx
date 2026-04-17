import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode, CSSProperties } from "react";

type AnimationType = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "zoom-in";

interface SectionRevealProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;        // ms
  duration?: number;     // ms
  className?: string;
  style?: CSSProperties;
  threshold?: number;
}

const getInitialStyle = (animation: AnimationType): CSSProperties => {
  switch (animation) {
    case "fade-up":    return { opacity: 0, transform: "translateY(40px)" };
    case "fade-in":    return { opacity: 0 };
    case "fade-left":  return { opacity: 0, transform: "translateX(-40px)" };
    case "fade-right": return { opacity: 0, transform: "translateX(40px)" };
    case "zoom-in":    return { opacity: 0, transform: "scale(0.94)" };
    default:           return { opacity: 0 };
  }
};

const getVisibleStyle = (): CSSProperties => ({
  opacity: 1,
  transform: "none",
});

export const SectionReveal = ({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 600,
  className = "",
  style = {},
  threshold = 0.12,
}: SectionRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        ...(isVisible ? getVisibleStyle() : getInitialStyle(animation)),
        transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
};

/* Versão para stagger de múltiplos filhos */
interface StaggerRevealProps {
  children: ReactNode[];
  animation?: AnimationType;
  staggerDelay?: number;   // ms entre cada filho
  initialDelay?: number;   // ms antes do primeiro
  duration?: number;
  className?: string;
  itemClassName?: string;
  threshold?: number;
}

export const StaggerReveal = ({
  children,
  animation = "fade-up",
  staggerDelay = 100,
  initialDelay = 0,
  duration = 550,
  className = "",
  itemClassName = "",
  threshold = 0.12,
}: StaggerRevealProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold });

  return (
    <div ref={ref} className={className}>
      {(children as ReactNode[]).map((child, i) => (
        <div
          key={i}
          className={itemClassName}
          style={{
            ...(isVisible ? getVisibleStyle() : getInitialStyle(animation)),
            transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${initialDelay + i * staggerDelay}ms, transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${initialDelay + i * staggerDelay}ms`,
            willChange: "opacity, transform",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

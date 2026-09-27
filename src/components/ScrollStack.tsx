import React, { useEffect, useRef, useState, useCallback } from 'react';
import './ScrollStack.css';

export interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = '',
}) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

export interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  scaleDuration?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
  onStackComplete?: () => void;
}

export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemStackDistance = 8,
  baseScale = 0.96,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const childArray = React.Children.toArray(children);
  const totalCards = childArray.length;

  const [scales, setScales] = useState<number[]>(() =>
    new Array(totalCards).fill(1)
  );
  const [opacities, setOpacities] = useState<number[]>(() =>
    new Array(totalCards).fill(1)
  );

  const updateCardTransforms = useCallback(() => {
    if (!cardRefs.current.length) return;

    const newScales = new Array(totalCards).fill(1);
    const newOpacities = new Array(totalCards).fill(1);
    const viewportHeight = window.innerHeight;

    for (let i = 0; i < totalCards; i++) {
      const cardEl = cardRefs.current[i];
      if (!cardEl) continue;

      // Check how far the NEXT card (i + 1) has scrolled toward its sticky pin
      if (i < totalCards - 1) {
        const nextCardEl = cardRefs.current[i + 1];
        if (nextCardEl) {
          const nextRect = nextCardEl.getBoundingClientRect();
          const nextStickyTop = 75 + (i + 1) * itemStackDistance;

          // As nextCard approaches its sticky position, gently scale and dim current card
          const distanceToPin = nextRect.top - nextStickyTop;
          if (distanceToPin < viewportHeight * 0.45) {
            const progress = Math.max(
              0,
              Math.min(1, 1 - distanceToPin / (viewportHeight * 0.45))
            );
            const targetScale = 1 - progress * (1 - baseScale);
            newScales[i] = Math.round(targetScale * 1000) / 1000;
            newOpacities[i] = Math.round((1 - progress * 0.16) * 100) / 100;
          }
        }
      }
    }

    setScales(newScales);
    setOpacities(newOpacities);
  }, [totalCards, itemStackDistance, baseScale]);

  useEffect(() => {
    let animationFrameId: number;

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(updateCardTransforms);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateCardTransforms();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [updateCardTransforms]);

  return (
    <div
      ref={containerRef}
      className={`scroll-stack-wrapper relative w-full ${className}`.trim()}
    >
      {childArray.map((child, index) => {
        const stickyTop = 75 + index * itemStackDistance;
        const scale = scales[index] ?? 1;
        const opacity = opacities[index] ?? 1;

        return (
          <div
            key={index}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="scroll-stack-sticky-item sticky"
            style={{
              top: `${stickyTop}px`,
              zIndex: index + 10,
              marginBottom:
                index === totalCards - 1
                  ? '4rem'
                  : 'clamp(180px, 30vh, 260px)',
              transform: `scale(${scale})`,
              transformOrigin: 'top center',
              filter: `brightness(${opacity})`,
              transition: 'transform 0.15s ease-out, filter 0.15s ease-out',
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default ScrollStack;
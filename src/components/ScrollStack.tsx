import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

export interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = '',
}) => (
  <div className={`w-full h-full flex flex-col [&>*]:flex-1 [&>*]:h-full ${itemClassName}`.trim()}>
    {children}
  </div>
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

const GAP = 0;           // extra space between a resting card and the next one below it (visible gap = GAP + PEEK)
const PEEK = 18;         // how much of each stacked card's top edge stays visible
const END_HOLD = 0.15;   // extra scroll (in viewport heights) to linger on the finished stack

const CardLayer: React.FC<{
  children: React.ReactNode;
  index: number;
  total: number;
  progress: MotionValue<number>;
  travel: number;        // px between consecutive cards (= uniform card height + GAP)
  scrollRange: number;   // total px of scroll the stack animation spans
  height: number | null; // uniform card height (null while measuring)
  layerRef: (el: HTMLDivElement | null) => void;
}> = ({ children, index, total, progress, travel, scrollRange, height, layerRef }) => {
  // Card i finishes arriving after i * travel px of scroll
  const endFor = (i: number) => (i * travel) / scrollRange;
  const startFor = (i: number) => ((i - 1) * travel) / scrollRange;

  // Cards wait in list order exactly `travel` apart, scroll up 1:1 with the
  // page, and lock onto the stack when they arrive.
  const y = useTransform(
    progress,
    index === 0 ? [0, 1] : [0, endFor(index)],
    index === 0 ? [0, 0] : [index * PEEK + index * travel, index * PEEK],
    { clamp: true }
  );

  // Shrink & dim one step each time a newer card lands on top
  const depthAt = (p: number) => {
    let d = 0;
    for (let j = index + 1; j < total; j++) {
      const s = startFor(j);
      const e = endFor(j);
      d += Math.min(1, Math.max(0, (p - s) / (e - s)));
    }
    return d;
  };
  const scale = useTransform(progress, (p) => 1 - depthAt(p) * 0.03);
  const filter = useTransform(
    progress,
    (p) => `brightness(${Math.max(0.35, 1 - depthAt(p) * 0.22)})`
  );

  return (
    <motion.div
      ref={layerRef}
      style={{
        y,
        scale,
        filter,
        height: height ?? 'auto',
        zIndex: index + 10,
        transformOrigin: 'top center',
        willChange: 'transform, filter',
      }}
      className={`${
        index === 0 ? 'relative' : 'absolute inset-x-0 top-0'
      } w-full flex flex-col [&>*]:flex-1`}
    >
      {children}
    </motion.div>
  );
};

export const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerEls = useRef<(HTMLDivElement | null)[]>([]);
  const childArray = React.Children.toArray(children);
  const total = childArray.length;

  // null = measuring natural heights; number = every card forced to this height
  const [cardH, setCardH] = useState<number | null>(null);
  const [lastH, setLastH] = useState(600);
  // Rendered height of the visible card (may differ from the layer height if
  // the card doesn't stretch) — travel is based on this so no empty gap appears.
  const [visualH, setVisualH] = useState<number | null>(null);
  const [vh, setVh] = useState(() =>
    typeof window === 'undefined' ? 900 : window.innerHeight
  );

  // Measure every card at its natural height, then lock all to the tallest.
  useLayoutEffect(() => {
    if (cardH !== null) return;
    const tallest = Math.max(
      0,
      ...layerEls.current.map((el) => el?.offsetHeight ?? 0)
    );
    if (tallest > 0) {
      setCardH(tallest);
      setLastH(tallest);
    }
  }, [cardH, total]);

  // After heights are locked, measure what the cards actually render at.
  useLayoutEffect(() => {
    if (cardH === null) {
      setVisualH(null);
      return;
    }
    const tallestVisual = Math.max(
      0,
      ...layerEls.current.map(
        (el) =>
          (el?.firstElementChild?.firstElementChild as HTMLElement | null)
            ?.offsetHeight ?? 0
      )
    );
    setVisualH(tallestVisual > 0 ? Math.min(tallestVisual, cardH) : null);
  }, [cardH, total]);

  // Re-measure when the viewport or web fonts change card heights
  useEffect(() => {
    const remeasure = () => {
      setVh(window.innerHeight);
      setCardH(null);
    };
    window.addEventListener('resize', remeasure);
    document.fonts?.ready.then(remeasure);
    return () => window.removeEventListener('resize', remeasure);
  }, []);

  const travel = (visualH ?? cardH ?? lastH) + GAP;
  const scrollRange = Math.max(1, (total - 1) * travel + END_HOLD * vh);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`.trim()}
      style={{ height: vh + scrollRange }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-start pt-8 overflow-hidden">
        <div className="relative w-full max-w-6xl mx-auto">
          {childArray.map((child, index) => (
            <CardLayer
              key={index}
              index={index}
              total={total}
              progress={scrollYProgress}
              travel={travel}
              scrollRange={scrollRange}
              height={cardH}
              layerRef={(el) => {
                layerEls.current[index] = el;
              }}
            >
              {child}
            </CardLayer>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollStack;

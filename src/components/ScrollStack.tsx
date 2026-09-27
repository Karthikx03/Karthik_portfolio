import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

export interface ScrollStackItemProps {
  children: React.ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem: React.FC<ScrollStackItemProps> = ({
  children,
  itemClassName = '',
}) => (
  <div className={`w-full ${itemClassName}`.trim()}>{children}</div>
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

const CardLayer: React.FC<{
  children: React.ReactNode;
  index: number;
  total: number;
  progress: MotionValue<number>;
}> = ({ children, index, total, progress }) => {
  const stackOffset = index * 12;

  // Arrival window for cards 1..total-1
  const arriveStart = 0.12 + (index - 1) * 0.22;
  const arriveEnd = arriveStart + 0.16;

  // y position: card 0 is fixed at 0. Card i > 0 animates from 650px to stackOffset
  const y = useTransform(
    progress,
    index === 0
      ? [0, 1]
      : [Math.max(0, arriveStart - 0.02), arriveStart, Math.min(1, arriveEnd)],
    index === 0 ? [0, 0] : [650, 650, stackOffset]
  );

  // Opacity: fades in cleanly as it enters
  const opacity = useTransform(
    progress,
    index === 0
      ? [0, 1]
      : [
          Math.max(0, arriveStart - 0.02),
          arriveStart + 0.04,
          Math.min(1, arriveEnd),
        ],
    index === 0 ? [1, 1] : [0, 1, 1]
  );

  // Subsequent cards arriving cause this card to scale down and dim
  const numSubsequent = total - 1 - index;
  const finalScale = Math.max(0.88, 1 - numSubsequent * 0.03);
  const finalBrightness = Math.max(0.68, 1 - numSubsequent * 0.08);

  const scaleStart = index === 0 ? 0.12 : arriveEnd;
  const scaleEnd = 0.94;

  const scale = useTransform(
    progress,
    numSubsequent === 0 ? [0, 1] : [scaleStart, scaleEnd],
    numSubsequent === 0 ? [1, 1] : [1, finalScale]
  );

  const brightnessVal = useTransform(
    progress,
    numSubsequent === 0 ? [0, 1] : [scaleStart, scaleEnd],
    numSubsequent === 0 ? [1, 1] : [1, finalBrightness]
  );

  const filter = useTransform(brightnessVal, (b) => `brightness(${b})`);

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        filter,
        zIndex: index + 10,
        transformOrigin: 'top center',
      }}
      className={
        index === 0 ? 'relative w-full' : 'absolute inset-x-0 top-0 w-full'
      }
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
  const childArray = React.Children.toArray(children);
  const total = childArray.length;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${className}`.trim()}
      style={{ height: `${total * 75}vh` }}
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        <div className="relative w-full max-w-6xl mx-auto">
          {childArray.map((child, index) => (
            <CardLayer
              key={index}
              index={index}
              total={total}
              progress={scrollYProgress}
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
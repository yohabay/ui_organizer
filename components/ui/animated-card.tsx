"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { forwardRef, ReactNode } from 'react';

interface AnimatedCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  scale?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

const AnimatedCard = forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ 
    children, 
    className, 
    hover = true, 
    delay = 0, 
    direction = 'up',
    scale = true,
    glow = false,
    onClick,
    ...props 
  }, ref) => {
    const getInitialPosition = () => {
      switch (direction) {
        case 'up': return { y: 20, opacity: 0 };
        case 'down': return { y: -20, opacity: 0 };
        case 'left': return { x: -20, opacity: 0 };
        case 'right': return { x: 20, opacity: 0 };
        default: return { y: 20, opacity: 0 };
      }
    };

    const hoverEffects = hover ? {
      y: -4,
      scale: scale ? 1.02 : 1,
      boxShadow: glow 
        ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), 0 0 0 1px rgba(59, 130, 246, 0.3)"
        : "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
    } : {};

    return (
      <motion.div
        ref={ref}
        initial={getInitialPosition()}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ 
          duration: 0.5, 
          delay,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        whileHover={hoverEffects}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "cursor-pointer transition-all duration-200",
          onClick && "cursor-pointer",
          className
        )}
        onClick={onClick}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

AnimatedCard.displayName = "AnimatedCard";

// Specialized animated card variants
export const AnimatedTemplateCard = ({ 
  title, 
  description, 
  preview, 
  isSelected, 
  onClick, 
  delay = 0 
}: {
  title: string;
  description: string;
  preview: ReactNode;
  isSelected?: boolean;
  onClick?: () => void;
  delay?: number;
}) => (
  <AnimatedCard
    delay={delay}
    glow={isSelected}
    onClick={onClick}
    className={cn(
      "transition-all duration-300",
      isSelected && "ring-2 ring-blue-500 ring-offset-2"
    )}
  >
    <Card className="h-full">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <CardDescription className="text-xs">{description}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        {preview}
      </CardContent>
    </Card>
  </AnimatedCard>
);

export const AnimatedFeatureCard = ({ 
  icon, 
  title, 
  description, 
  delay = 0 
}: {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}) => (
  <AnimatedCard delay={delay} direction="up" scale={false}>
    <Card className="h-full text-center">
      <CardHeader>
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
          {icon}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  </AnimatedCard>
);

// Staggered animation container
export const AnimatedGrid = ({ 
  children, 
  className,
  stagger = 0.1 
}: { 
  children: ReactNode; 
  className?: string;
  stagger?: number;
}) => (
  <motion.div
    className={className}
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: stagger,
        },
      },
    }}
  >
    {children}
  </motion.div>
);

export { AnimatedCard };
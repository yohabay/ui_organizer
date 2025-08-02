"use client";

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Loader2, Sparkles, Zap } from 'lucide-react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'dots' | 'pulse' | 'bounce' | 'sparkle' | 'modern';
  className?: string;
  text?: string;
}

const sizeClasses = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-12 w-12',
};

const LoadingSpinner = ({ 
  size = 'md', 
  variant = 'default', 
  className,
  text 
}: LoadingSpinnerProps) => {
  const baseClasses = cn(sizeClasses[size], className);

  const renderSpinner = () => {
    switch (variant) {
      case 'dots':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-2 w-2 rounded-full bg-current"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        );

      case 'pulse':
        return (
          <motion.div
            className={cn("rounded-full bg-current", baseClasses)}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );

      case 'bounce':
        return (
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="h-3 w-3 rounded-full bg-current"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              />
            ))}
          </div>
        );

      case 'sparkle':
        return (
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Sparkles className={baseClasses} />
          </motion.div>
        );

      case 'modern':
        return (
          <div className="relative">
            <motion.div
              className={cn("rounded-full border-2 border-current border-t-transparent", baseClasses)}
              animate={{ rotate: 360 }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <motion.div
              className={cn("absolute inset-0 rounded-full border border-current border-r-transparent", baseClasses)}
              animate={{ rotate: -360 }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>
        );

      default:
        return (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Loader2 className={baseClasses} />
          </motion.div>
        );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <div className="text-muted-foreground">
        {renderSpinner()}
      </div>
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm text-muted-foreground"
        >
          {text}
        </motion.p>
      )}
    </div>
  );
};

// Specialized loading components
export const ProcessingSpinner = ({ step, total }: { step: number; total: number }) => (
  <div className="flex flex-col items-center space-y-4">
    <LoadingSpinner variant="modern" size="lg" />
    <div className="text-center">
      <p className="text-sm font-medium">Processing...</p>
      <p className="text-xs text-muted-foreground">
        Step {step} of {total}
      </p>
    </div>
    <div className="w-32 bg-muted rounded-full h-2">
      <motion.div
        className="bg-primary h-2 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: `${(step / total) * 100}%` }}
        transition={{ duration: 0.5 }}
      />
    </div>
  </div>
);

export const FullScreenLoader = ({ text = "Loading..." }: { text?: string }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm"
  >
    <div className="flex flex-col items-center space-y-4">
      <LoadingSpinner variant="modern" size="xl" />
      <p className="text-lg font-medium">{text}</p>
    </div>
  </motion.div>
);

export default LoadingSpinner;
import React from 'react';
import { cn } from '../lib/utils';

const Card = React.forwardRef(({ 
  className, 
  children, 
  variant = "default",
  hover = false,
  ...props 
}, ref) => {
  const variants = {
    default: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
    glass: "glass-card",
    gradient: "bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-800/90 dark:to-gray-900/70 backdrop-blur-sm border border-white/20 dark:border-gray-700/50"
  };

  return (
    <div
      ref={ref}
      className={cn(
        "rounded-xl shadow-soft transition-all duration-300",
        variants[variant],
        hover && "hover:shadow-medium hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6 pb-4", className)}
    {...props}
  />
));

CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-bold leading-none tracking-tight text-gray-900 dark:text-white",
      className
    )}
    {...props}
  >
    {children}
  </h3>
));

CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-600 dark:text-gray-300", className)}
    {...props}
  />
));

CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div 
    ref={ref} 
    className={cn("p-6 pt-0", className)} 
    {...props} 
  />
));

CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
));

CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

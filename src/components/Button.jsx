import React from 'react';
import { cn } from '../lib/utils';

const buttonVariants = {
  default: "bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg",
  destructive: "bg-danger-600 hover:bg-danger-700 text-white shadow-md hover:shadow-lg",
  outline: "border border-gray-300 dark:border-gray-600 bg-transparent hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100",
  secondary: "bg-secondary-600 hover:bg-secondary-700 text-white shadow-md hover:shadow-lg",
  success: "bg-success-600 hover:bg-success-700 text-white shadow-md hover:shadow-lg",
  ghost: "hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-gray-100",
  link: "text-primary-600 dark:text-primary-400 underline-offset-4 hover:underline p-0 h-auto font-normal",
  gradient: "bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white shadow-colored hover:shadow-colored-lg"
};

const buttonSizes = {
  sm: "h-8 px-3 text-xs rounded-md",
  default: "h-10 px-4 py-2 text-sm rounded-lg", 
  lg: "h-12 px-8 py-3 text-base rounded-xl",
  xl: "h-14 px-10 py-4 text-lg rounded-2xl",
  icon: "h-9 w-9 p-0 rounded-lg"
};

const Button = React.forwardRef(({ 
  className, 
  variant = "default", 
  size = "default", 
  loading = false,
  disabled = false,
  children,
  ...props 
}, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500",
        "active:scale-95 disabled:pointer-events-none disabled:opacity-50",
        buttonVariants[variant],
        buttonSizes[size],
        loading && "pointer-events-none opacity-70",
        className
      )}
      disabled={disabled || loading}
      ref={ref}
      {...props}
    >
      {loading ? (
        <>
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          Loading...
        </>
      ) : (
        children
      )}
    </button>
  );
});

Button.displayName = "Button";

export { Button, buttonVariants };

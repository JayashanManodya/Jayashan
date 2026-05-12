import { forwardRef, ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  className = '',
  variant = 'primary',
  size = 'md',
  children,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  const variants = {
    primary: 'bg-brand-primary hover:bg-brand-primary-hover text-white shadow-[0_0_15px_var(--brand-primary-glow)] hover:shadow-[0_0_25px_var(--brand-primary-glow-hover)] border border-transparent',
    secondary: 'bg-brand-secondary hover:bg-brand-secondary-hover text-white shadow-[0_0_15px_rgba(79,70,229,0.5)] hover:shadow-[0_0_25px_rgba(79,70,229,0.7)] border border-transparent',
    outline: 'border-brand-primary text-brand-primary hover:bg-brand-primary/10 shadow-[0_0_10px_var(--brand-primary-glow)] hover:shadow-[0_0_20px_var(--brand-primary-glow-hover)]'
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  return <motion.button ref={ref} whileHover={{
    scale: 1.05
  }} whileTap={{
    scale: 0.95
  }} className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
    {children}
  </motion.button>;
});

Button.displayName = 'Button';
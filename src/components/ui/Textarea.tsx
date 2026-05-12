import { forwardRef, TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({
  className = '',
  label,
  error,
  ...props
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-black dark:text-white tracking-widest mb-2 ml-1 uppercase">
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        className={`
          w-full px-6 py-4 bg-black/[0.04] dark:bg-white/[0.06] border border-black/15 dark:border-white/15 rounded-[24px]
          text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/40 font-medium min-h-[150px]
          focus:outline-none focus:border-brand-primary focus:ring-4 focus:ring-brand-primary/15
          transition-all duration-300
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && <p className="mt-2 text-sm font-semibold text-red-500 ml-2">{error}</p>}
    </div>
  );
});

Textarea.displayName = 'Textarea';
import { forwardRef, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  className = '',
  label,
  error,
  ...props
}, ref) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-bold text-slate-700 italic uppercase tracking-wider mb-2 ml-1">
          {label}
        </label>
      )}
      <input
        ref={ref}
        className={`
          w-full px-6 py-4 bg-slate-50 border border-slate-100 rounded-[20px]
          text-slate-900 placeholder-slate-400 font-medium
          focus:outline-none focus:border-[#6366f1] focus:ring-4 focus:ring-[#6366f1]/5
          transition-all duration-300
          disabled:opacity-50 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && <p className="mt-2 text-sm font-bold text-red-500 ml-2">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';
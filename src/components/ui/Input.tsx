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
  return <div className="w-full">
    {label && <label className="block text-sm font-medium text-gray-300 mb-2">
      {label}
    </label>}
    <input ref={ref} className={`
            w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-lg 
            text-white placeholder-slate-500
            focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500
            transition-all duration-300
            disabled:opacity-50 disabled:cursor-not-allowed
            glass
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}
            ${className}
          `} {...props} />
    {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
  </div>;
});

Input.displayName = 'Input';
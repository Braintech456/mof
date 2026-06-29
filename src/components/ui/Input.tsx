import { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, className = '', ...props }, ref) => {
    return (
      <div className={className}>
        {label && (
          <label className="block font-sans text-sm font-medium text-ink dark:text-ink-200 mb-1.5">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-3 bg-white border rounded font-sans text-ink placeholder:text-ink-300 focus:outline-none transition-colors duration-200 dark:bg-navy-800 dark:text-white dark:placeholder:text-ink-400 ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-1 focus:ring-red-500'
              : 'border-ink-200 focus:border-navy focus:ring-1 focus:ring-navy dark:border-navy-600 dark:focus:border-gold dark:focus:ring-gold'
          }`}
          {...props}
        />
        {error && <p className="mt-1.5 text-sm text-red-500">{error}</p>}
        {helperText && !error && (
          <p className="mt-1.5 text-sm text-ink-400">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;

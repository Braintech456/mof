import { forwardRef, cloneElement, isValidElement } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', children, asChild, ...props }, ref) => {
    const baseClasses =
      'inline-flex items-center justify-center font-sans font-medium rounded transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';

    const variantClasses = {
      primary:
        'bg-navy text-white hover:bg-navy-600 focus-visible:ring-navy',
      secondary:
        'bg-transparent border-2 border-gold text-gold hover:bg-gold hover:text-navy focus-visible:ring-gold',
      outline:
        'bg-transparent border border-navy text-navy hover:bg-navy hover:text-white dark:border-gold dark:text-gold dark:hover:bg-gold dark:hover:text-navy',
      ghost:
        'bg-transparent text-navy hover:bg-navy/10 dark:text-white dark:hover:bg-white/10',
    };

    const sizeClasses = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-6 py-2.5 text-sm',
      lg: 'px-8 py-3 text-base',
    };

    const combinedClassName = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

    if (asChild && isValidElement(children)) {
      return cloneElement(children as React.ReactElement<{ className?: string }>, {
        className: combinedClassName,
        ...props,
      });
    }

    return (
      <button
        ref={ref}
        className={combinedClassName}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

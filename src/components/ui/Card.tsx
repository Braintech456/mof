interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export default function Card({
  children,
  className = '',
  hover = true,
  padding = 'md',
}: CardProps) {
  const paddingClasses = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={`bg-white rounded shadow-card ${
        hover ? 'transition-shadow duration-200 hover:shadow-card-hover' : ''
      } dark:bg-navy-800 dark:shadow-none dark:border dark:border-navy-700 ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
}

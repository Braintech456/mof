interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'gray' | 'navy';
}

export default function Section({
  children,
  className = '',
  id,
  background = 'white',
}: SectionProps) {
  const bgClasses = {
    white: 'bg-white dark:bg-navy-900',
    gray: 'bg-ink-50 dark:bg-navy-800',
    navy: 'bg-navy text-white',
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}>
      {children}
    </section>
  );
}

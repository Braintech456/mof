import {
  Users,
  School,
  BookOpen,
  MapPin,
  Award,
  Trophy,
  ClipboardCheck,
  BarChart2,
  QrCode,
  Medal,
  Zap,
} from 'lucide-react';
import { stats, features } from '../../data/siteData';
import { useAnimatedCounter } from '../../hooks';
import { Container } from '../ui';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  users: Users,
  school: School,
  'book-open': BookOpen,
  'map-pin': MapPin,
  award: Award,
  trophy: Trophy,
  'clipboard-check': ClipboardCheck,
  'bar-chart-2': BarChart2,
  'qr-code': QrCode,
  medal: Medal,
  zap: Zap,
};

interface StatItemProps {
  value: number;
  label: string;
  icon: string;
}

function StatItem({ value, label, icon }: StatItemProps) {
  const { count, ref } = useAnimatedCounter(value);
  const Icon = iconMap[icon] || Award;

  return (
    <div ref={ref} className="text-center">
      <div className="w-10 h-10 mx-auto mb-3 rounded-lg bg-white/10 flex items-center justify-center">
        <Icon className="w-5 h-5 text-gold" />
      </div>
      <div className="font-sans text-4xl md:text-5xl font-bold text-gold tabular-nums mb-1">
        {count.toLocaleString('en-IN')}
      </div>
      <div className="font-sans text-sm text-white/70 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}

export function StatBar() {
  return (
    <div className="bg-navy py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, idx) => (
            <StatItem
              key={idx}
              value={stat.value}
              label={stat.label}
              icon={stat.icon}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export function FeaturesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature, idx) => {
        const Icon = iconMap[feature.icon] || Award;
        return (
          <div
            key={idx}
            className="p-5 bg-white dark:bg-navy-800 rounded shadow-card hover:shadow-card-hover transition-shadow"
          >
            <div className="w-10 h-10 mb-3 rounded-lg bg-navy dark:bg-gold flex items-center justify-center">
              <Icon className="w-5 h-5 text-gold dark:text-navy" />
            </div>
            <h3 className="font-serif font-semibold text-navy dark:text-white text-sm mb-2">
              {feature.title}
            </h3>
            <p className="text-ink dark:text-ink-200 text-sm">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

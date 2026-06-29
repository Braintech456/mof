import { Calculator, FlaskConical, BookOpen, Globe, Monitor, Palette } from 'lucide-react';
import { Link } from 'react-router-dom';
import { olympiads } from '../../data/siteData';
import { Card } from '../ui';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calculator: Calculator,
  flask: FlaskConical,
  'book-open': BookOpen,
  globe: Globe,
  monitor: Monitor,
  palette: Palette,
};

export default function OlympiadCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {olympiads.map((olympiad) => {
        const Icon = iconMap[olympiad.icon] || Calculator;
        return (
          <Card key={olympiad.id} className="group">
            <div className="flex items-start gap-4">
              <div
                className={`w-12 h-12 ${olympiad.color} rounded-lg flex items-center justify-center flex-shrink-0`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif font-bold text-navy dark:text-white text-lg mb-1 group-hover:text-gold transition-colors">
                  {olympiad.name}
                </h3>
                <p className="text-ink dark:text-ink-200 text-sm mb-2">
                  {olympiad.description}
                </p>
                <p className="text-xs text-ink-400 mb-3">
                  Eligibility: {olympiad.eligibility}
                </p>
                <Link
                  to={`/olympiads/${olympiad.id}`}
                  className="text-sm font-medium text-navy dark:text-gold hover:text-gold dark:hover:text-gold-400 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}

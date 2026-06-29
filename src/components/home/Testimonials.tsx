import { useState } from 'react';
import { testimonials } from '../../data/siteData';
import { Container } from '../ui';

const types = ['Principal', 'Teacher', 'Parent', 'Student'] as const;

export default function Testimonials() {
  const [activeType, setActiveType] = useState<typeof types[number]>('Principal');

  const activeTestimonial = testimonials.find((t) => t.type === activeType);

  return (
    <Container size="md">
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setActiveType(type)}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              activeType === type
                ? 'bg-navy text-white'
                : 'bg-ink-100 dark:bg-navy-700 text-ink dark:text-white hover:bg-ink-200 dark:hover:bg-navy-600'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {activeTestimonial && (
        <div className="bg-white dark:bg-navy-800 p-8 rounded shadow-card text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-navy dark:bg-gold flex items-center justify-center">
            <span className="text-gold dark:text-navy font-serif font-bold text-lg">
              {activeTestimonial.avatar}
            </span>
          </div>
          <blockquote className="text-ink dark:text-ink-100 italic mb-4 text-center">
            "{activeTestimonial.text}"
          </blockquote>
          <div className="font-serif font-semibold text-navy dark:text-white">
            {activeTestimonial.name}
          </div>
          <div className="text-sm text-ink-400 dark:text-ink-300">
            {activeTestimonial.school}
          </div>
        </div>
      )}
    </Container>
  );
}

import { examProcess, importantDates } from '../../data/siteData';
import { Container } from '../ui';

export function ExamProcess() {
  return (
    <Container size="lg">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {examProcess.map((step) => (
          <div key={step.step} className="flex items-start gap-4 p-4 rounded bg-white dark:bg-navy-800 shadow-card">
            <div className="w-8 h-8 flex-shrink-0 bg-gold text-navy font-sans font-bold text-sm rounded-full flex items-center justify-center">
              {step.step}
            </div>
            <div>
              <h3 className="font-serif font-semibold text-navy dark:text-white mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-ink dark:text-ink-200">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
}

export function ImportantDatesSection() {
  return (
    <Container size="lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {importantDates.map((item, idx) => (
          <div
            key={idx}
            className="p-5 bg-white dark:bg-navy-800 rounded border-l-4 border-gold shadow-card"
          >
            <div className="text-xs text-ink-400 dark:text-ink-300 mb-1">
              {item.date}
            </div>
            <h3 className="font-serif font-semibold text-navy dark:text-white text-sm mb-2">
              {item.event}
            </h3>
            <p className="text-xs text-ink dark:text-ink-200">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  );
}

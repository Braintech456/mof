import { Calendar } from 'lucide-react';
import { Container, Section, Card } from '../components/ui';
import { importantDates, olympiads } from '../data/siteData';

// Group dates by month
function groupDatesByMonth(dates: typeof importantDates) {
  const grouped: Record<string, typeof importantDates> = {};
  dates.forEach((d) => {
    const month = new Date(d.date).toLocaleString('en-IN', { month: 'long', year: 'numeric' });
    if (!grouped[month]) grouped[month] = [];
    grouped[month].push(d);
  });
  return grouped;
}

const olympiadDates = olympiads.map((o, idx) => ({
  olympiad: o.name,
  color: o.color,
  dates: importantDates.map((d) => ({
    ...d,
    event: d.event,
    date: d.date,
  })),
}));

export default function ImportantDatesPage() {
  const groupedDates = groupDatesByMonth(importantDates);

  return (
    <Section className="pt-12">
      <Container size="lg">
        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-navy dark:bg-gold flex items-center justify-center">
            <Calendar className="w-10 h-10 text-gold dark:text-navy" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy dark:text-white mb-3">
            Important Dates
          </h1>
          <div className="gold-divider mb-4" />
          <p className="text-ink dark:text-ink-200 max-w-lg mx-auto">
            Key dates for the academic year 2026-27. Mark your calendar and
            ensure timely registration and preparation.
          </p>
        </div>

        {/* Overall Timeline */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-navy dark:text-white mb-6">
            Olympiad Calendar 2026-27
          </h2>

          {Object.entries(groupedDates).map(([month, dates]) => (
            <div key={month} className="mb-8">
              <h3 className="font-serif text-xl font-semibold text-navy dark:text-white mb-4">
                {month}
              </h3>
              <div className="space-y-3">
                {dates.map((item, idx) => (
                  <Card key={idx} className="flex items-start gap-4">
                    <div className="w-16 text-center">
                      <div className="font-sans font-bold text-2xl text-gold">
                        {new Date(item.date).getDate()}
                      </div>
                      <div className="text-xs text-ink-400 dark:text-ink-300">
                        {new Date(item.date).toLocaleString('en-IN', { month: 'short' })}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif font-semibold text-navy dark:text-white">
                        {item.event}
                      </h4>
                      <p className="text-sm text-ink dark:text-ink-200">
                        {item.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Olympiad-wise breakdown */}
        <div className="mb-12">
          <h2 className="font-serif text-2xl font-bold text-navy dark:text-white mb-6">
            Olympiad-wise Schedule
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-ink-200 dark:border-navy-600">
                  <th className="py-3 px-4 text-left font-sans text-sm font-medium text-ink-400 dark:text-ink-300">
                    Olympiad
                  </th>
                  <th className="py-3 px-4 text-left font-sans text-sm font-medium text-ink-400 dark:text-ink-300">
                    Registration
                  </th>
                  <th className="py-3 px-4 text-left font-sans text-sm font-medium text-ink-400 dark:text-ink-300">
                    Exam Date
                  </th>
                  <th className="py-3 px-4 text-left font-sans text-sm font-medium text-ink-400 dark:text-ink-300">
                    Results
                  </th>
                </tr>
              </thead>
              <tbody>
                {olympiadDates.map((o, idx) => (
                  <tr key={idx} className="border-b border-ink-100 dark:border-navy-700">
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${o.color}`} />
                        <span className="font-medium text-navy dark:text-white">
                          {o.olympiad}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-ink dark:text-ink-200">
                      Jul 1 - Sep 30
                    </td>
                    <td className="py-4 px-4 text-sm text-ink dark:text-ink-200">
                      Nov 10-30
                    </td>
                    <td className="py-4 px-4 text-sm text-ink dark:text-ink-200">
                      Dec 20
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <Card>
          <h3 className="font-serif font-semibold text-navy dark:text-white mb-4">
            Note
          </h3>
          <ul className="space-y-2 text-sm text-ink dark:text-ink-200">
            <li>• All dates are subject to change. Schools will be notified in advance of any changes.</li>
            <li>• Exam dates may vary by subject and class level.</li>
            <li>• Hall tickets will be available 2 weeks before the exam date.</li>
            <li>• For detailed schedule, contact your school coordinator.</li>
          </ul>
        </Card>
      </Container>
    </Section>
  );
}

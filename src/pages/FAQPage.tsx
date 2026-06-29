import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Container, Section, Card } from '../components/ui';

const categories = [
  {
    name: 'Eligibility',
    faqs: [
      {
        q: 'Who can participate in MOF Olympiads?',
        a: 'Any student from Class 1 to 12 enrolled in a participating school can take part in MOF Olympiads. Schools must register with MOF before their students can participate.',
      },
      {
        q: 'Can individual students register directly?',
        a: 'No, individual registrations are not accepted. Students must be registered through their school. Schools can sign up for MOF Olympiads through our School Registration page.',
      },
      {
        q: 'Is there any minimum percentage requirement to participate?',
        a: 'No, there is no minimum percentage requirement. MOF Olympiads are designed to encourage participation from all students, regardless of their current academic standing.',
      },
    ],
  },
  {
    name: 'Exam Pattern',
    faqs: [
      {
        q: 'What is the format of the Olympiad exam?',
        a: 'All Olympiads (except Art) consist of 50 multiple-choice questions to be completed in 60 minutes. The Art Olympiad has a mixed format with practical and written components lasting 90 minutes.',
      },
      {
        q: 'Is there negative marking?',
        a: 'No, there is no negative marking in any MOF Olympiad. Each correct answer carries 1 mark, and unattempted questions receive 0 marks.',
      },
      {
        q: 'In what language is the exam conducted?',
        a: 'Exams are conducted in English and Marathi. Students can choose their preferred language at the time of school registration.',
      },
      {
        q: 'Can we use calculators during the exam?',
        a: 'No, calculators, mobile phones, or any electronic devices are not allowed during the examination. Rough work can be done on the question paper or provided sheets.',
      },
    ],
  },
  {
    name: 'Registration',
    faqs: [
      {
        q: 'How does a school register for MOF Olympiads?',
        a: 'Schools can register online through the School Registration page. Fill in the required details, select the Olympiads you wish to participate in, and submit the form. You will receive login credentials within 3-5 business days.',
      },
      {
        q: 'What is the registration fee?',
        a: 'Registration fees vary by Olympiad and class. Detailed fee structure is provided to schools upon approval of their registration application. Schools collect fees from students and submit to MOF.',
      },
      {
        q: 'What is the last date for registration?',
        a: 'Registration typically opens on July 1st and closes on September 30th each year. Students must be registered through their school before the deadline.',
      },
      {
        q: 'Can a school participate in only some Olympiads?',
        a: 'Yes, schools can choose to participate in any number of Olympiads - from just one to all six. There is no requirement to register for all Olympiads.',
      },
    ],
  },
  {
    name: 'Results',
    faqs: [
      {
        q: 'When are results declared?',
        a: 'Results are typically declared within 4-6 weeks after the examination. Exact dates are announced on our website and communicated to schools via email.',
      },
      {
        q: 'How can I check my result?',
        a: 'Results can be checked on our Results page using your Roll Number. You can also search by Certificate ID if you already have your certificate.',
      },
      {
        q: 'What information is included in the result?',
        a: 'The result shows your score, state rank, district rank, school rank, and percentile. It also includes subject-wise performance breakdown where applicable.',
      },
      {
        q: 'Can I request a re-evaluation?',
        a: 'Yes, re-evaluation requests can be submitted within 15 days of result declaration. A nominal fee applies. Contact your school coordinator for the re-evaluation process.',
      },
    ],
  },
  {
    name: 'Certificates',
    faqs: [
      {
        q: 'When will I receive my certificate?',
        a: 'Digital certificates are issued within 4 weeks of result declaration. Physical certificates are dispatched to schools and typically arrive within 2 weeks of digital issuance.',
      },
      {
        q: 'How do I verify my certificate?',
        a: 'Each certificate has a unique Certificate ID. Visit our Certificate Verification page, enter the ID, and the system will display the certificate details confirming its authenticity.',
      },
      {
        q: 'What if I lost my certificate?',
        a: 'Digital certificates can be re-downloaded from the student portal using your Roll Number. For duplicate physical certificates, contact your school to request one from MOF.',
      },
      {
        q: 'Are there certificates for all participants?',
        a: 'Yes, every participant receives a certificate. Merit certificates are awarded to top rankers, while all others receive participation certificates.',
      },
    ],
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-ink-100 dark:border-navy-700 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-medium text-navy dark:text-white pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      {open && (
        <div className="pb-4 text-ink dark:text-ink-200 text-sm leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(categories[0].name);

  const activeFaqs = categories.find((c) => c.name === activeCategory);

  return (
    <Section className="pt-12">
      <Container size="lg">
        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-navy dark:bg-gold flex items-center justify-center">
            <HelpCircle className="w-10 h-10 text-gold dark:text-navy" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy dark:text-white mb-3">
            Frequently Asked Questions
          </h1>
          <div className="gold-divider mb-4" />
          <p className="text-ink dark:text-ink-200 max-w-lg mx-auto">
            Find answers to common questions about MOF Olympiads, registration,
            results, and certificates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`w-full text-left px-4 py-3 rounded transition-colors ${
                    activeCategory === cat.name
                      ? 'bg-navy text-white'
                      : 'bg-ink-50 dark:bg-navy-800 text-ink dark:text-white hover:bg-ink-100 dark:hover:bg-navy-700'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          <div className="lg:col-span-3">
            {activeFaqs && (
              <Card>
                <h2 className="font-serif text-xl font-bold text-navy dark:text-white mb-4">
                  {activeFaqs.name}
                </h2>
                {activeFaqs.faqs.map((faq, idx) => (
                  <FAQItem key={idx} question={faq.q} answer={faq.a} />
                ))}
              </Card>
            )}
          </div>
        </div>
      </Container>
    </Section>
  );
}

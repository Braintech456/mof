import { Link } from 'react-router-dom';
import { Target, Eye, CheckCircle, ArrowRight } from 'lucide-react';
import { Container, Section, Button, Card } from '../components/ui';

const objectives = [
  'To identify and nurture academic talent across Maharashtra',
  'To provide a standardized platform for competitive assessment',
  'To encourage conceptual understanding over rote learning',
  'To generate detailed performance insights for students and schools',
  'To prepare students for national and international Olympiads',
  'To recognize and reward academic excellence through certificates and awards',
];

const history = [
  { year: 2018, event: 'Foundation established with 50 schools across 5 districts' },
  { year: 2019, event: 'Expanded to 200 schools, added English and GK Olympiads' },
  { year: 2020, event: 'Pivoted to hybrid model, introduced digital certificates' },
  { year: 2021, event: 'Reached 1000 schools, added Computer and Art Olympiads' },
  { year: 2022, event: 'Introduced QR-verified certificates, 2500 schools participated' },
  { year: 2023, event: '3500 schools across all 36 districts of Maharashtra' },
  { year: 2024, event: 'Over 4500 schools registered, 1.2 million students' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-12">
        <Container size="md">
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy dark:text-white mb-3">
              About Maharashtra Olympiad Foundation
            </h1>
            <div className="gold-divider mb-4" />
          </div>

          <div className="prose prose-lg max-w-none">
            <p className="text-ink dark:text-ink-200 text-lg leading-relaxed">
              Maharashtra Olympiad Foundation (MOF) is a state-level academic body
              dedicated to promoting excellence in education through well-designed
              Olympiad examinations. Established in 2018, MOF has grown to become
              the most trusted Olympiad conducting body in Maharashtra, serving
              over 4,500 schools and 1.2 million students annually.
            </p>
            <p className="text-ink dark:text-ink-200 text-lg leading-relaxed">
              Our Olympiads are designed by experienced academicians and subject
              matter experts, ensuring that each question tests conceptual
              understanding rather than memory. We believe in nurturing talent
              from the grassroots level and providing every student an opportunity
              to benchmark themselves against peers across the state.
            </p>
          </div>
        </Container>
      </Section>

      {/* Vision & Mission */}
      <Section background="gray">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-navy dark:bg-gold rounded-lg flex items-center justify-center">
                  <Eye className="w-6 h-6 text-gold dark:text-navy" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-navy dark:text-white">
                  Our Vision
                </h2>
              </div>
              <p className="text-ink dark:text-ink-200">
                To become the premier academic assessment body in Maharashtra,
                identifying and nurturing talent at the school level while
                preparing students for national and international competitive
                examinations.
              </p>
            </Card>

            <Card>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-navy dark:bg-gold rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-gold dark:text-navy" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-navy dark:text-white">
                  Our Mission
                </h2>
              </div>
              <p className="text-ink dark:text-ink-200">
                To conduct fair, transparent, and academically rigorous Olympiads
                that encourage conceptual learning, provide meaningful feedback
                to students and schools, and recognize excellence through
                verified certifications and awards.
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Objectives */}
      <Section>
        <Container size="md">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-navy dark:text-white mb-3">
              Objectives
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="space-y-4">
            {objectives.map((objective, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 bg-ink-50 dark:bg-navy-800 rounded"
              >
                <CheckCircle className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <p className="text-ink dark:text-ink-200">{objective}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* History Timeline */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-navy dark:text-white mb-3">
              Our Journey
            </h2>
            <div className="gold-divider" />
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-navy/20 dark:bg-gold/20 transform md:-translate-x-1/2" />

              {history.map((item, idx) => (
                <div key={idx} className="relative flex items-center gap-4 md:gap-8 mb-6">
                  {/* Number */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-gold text-navy font-sans font-bold text-sm rounded-full flex items-center justify-center transform -translate-x-1/2 z-10">
                    {idx + 1}
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto'}`}>
                    <Card>
                      <span className="text-gold font-sans font-bold">{item.year}</span>
                      <p className="text-sm text-ink dark:text-ink-200">{item.event}</p>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container size="sm">
          <Card className="text-center p-8">
            <h3 className="font-serif text-xl font-bold text-navy dark:text-white mb-3">
              Join the MOF Network
            </h3>
            <p className="text-ink dark:text-ink-200 mb-6">
              Register your school to participate in our Olympiads and give your
              students the opportunity to excel.
            </p>
            <Button asChild>
              <Link to="/register">
                Register Your School <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </Card>
        </Container>
      </Section>
    </>
  );
}

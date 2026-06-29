import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Container, Section, Button } from '../components/ui';
import {
  StatBar,
  FeaturesGrid,
  OlympiadCards,
  ExamProcess,
  ImportantDatesSection,
  Testimonials,
  CertificateVerificationCard,
} from '../components/home';
import { siteConfig } from '../data/siteData';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
        <div className="maharashtra-watermark" />
        <Container className="relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-navy dark:text-white mb-4 fade-up">
              {siteConfig.name}
            </h1>
            <p className="text-xl md:text-2xl text-gold font-medium mb-4 fade-up" style={{ animationDelay: '0.1s' }}>
              {siteConfig.tagline}
            </p>
            <p className="text-ink dark:text-ink-200 text-lg mb-8 max-w-2xl fade-up" style={{ animationDelay: '0.2s' }}>
              A state-level academic body conducting Olympiad examinations
              across Maharashtra. Recognizing and nurturing academic excellence
              among students.
            </p>
            <div className="flex flex-wrap gap-4 fade-up" style={{ animationDelay: '0.3s' }}>
              <Button asChild>
                <Link to="/register">Register Your School</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link to="/verify">Verify Certificate</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/about">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Live Statistics */}
      <StatBar />

      {/* About Teaser */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy dark:text-white mb-3">
              Who We Are
            </h2>
            <div className="gold-divider mb-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            <div className="text-center p-6 bg-white dark:bg-navy-800 rounded shadow-card">
              <h3 className="font-serif font-bold text-navy dark:text-white text-xl mb-3">
                About MOF
              </h3>
              <p className="text-ink dark:text-ink-200 text-sm mb-4">
                Maharashtra Olympiad Foundation is dedicated to promoting
                academic excellence through well-designed competitive
                examinations across all districts of Maharashtra.
              </p>
              <Link
                to="/about"
                className="text-sm font-medium text-navy dark:text-gold hover:text-gold transition-colors"
              >
                Read More →
              </Link>
            </div>
            <div className="text-center p-6 bg-white dark:bg-navy-800 rounded shadow-card">
              <h3 className="font-serif font-bold text-navy dark:text-white text-xl mb-3">
                Our Vision
              </h3>
              <p className="text-ink dark:text-ink-200 text-sm">
                To identify and nurture talent, providing a platform for
                students to benchmark themselves against peers across the
                state and develop a competitive spirit.
              </p>
            </div>
            <div className="text-center p-6 bg-white dark:bg-navy-800 rounded shadow-card">
              <h3 className="font-serif font-bold text-navy dark:text-white text-xl mb-3">
                Our Mission
              </h3>
              <p className="text-ink dark:text-ink-200 text-sm">
                Conducting fair, transparent Olympiads that encourage
                conceptual understanding and provide detailed performance
                insights to students and schools.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Olympiads */}
      <Section>
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy dark:text-white mb-3">
              Our Olympiads
            </h2>
            <div className="gold-divider mb-4" />
            <p className="text-ink dark:text-ink-200 max-w-2xl mx-auto">
              Six subject Olympiads designed to assess and recognize academic
              excellence across various disciplines.
            </p>
          </div>
          <OlympiadCards />
        </Container>
      </Section>

      {/* Why Choose MOF */}
      <Section background="gray">
        <Container>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy dark:text-white mb-3">
              Why Choose MOF
            </h2>
            <div className="gold-divider mb-4" />
          </div>
          <FeaturesGrid />
        </Container>
      </Section>

      {/* Exam Process */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy dark:text-white mb-3">
            Exam Process
          </h2>
          <div className="gold-divider mb-4" />
          <p className="text-ink dark:text-ink-200 max-w-2xl mx-auto">
            A streamlined process from registration to certificate verification.
          </p>
        </div>
        <ExamProcess />
      </Section>

      {/* Certificate Verification Teaser */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy dark:text-white mb-3">
            Verify Certificates
          </h2>
          <div className="gold-divider mb-4" />
        </div>
        <CertificateVerificationCard />
      </Section>

      {/* Important Dates */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy dark:text-white mb-3">
            Important Dates
          </h2>
          <div className="gold-divider mb-4" />
          <p className="text-ink dark:text-ink-200 max-w-2xl mx-auto">
            Key dates for the upcoming academic year.
          </p>
        </div>
        <ImportantDatesSection />
        <div className="text-center mt-8">
          <Button variant="outline" asChild>
            <Link to="/dates">View Full Schedule</Link>
          </Button>
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="gray">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy dark:text-white mb-3">
            What People Say
          </h2>
          <div className="gold-divider mb-4" />
        </div>
        <Testimonials />
      </Section>
    </>
  );
}

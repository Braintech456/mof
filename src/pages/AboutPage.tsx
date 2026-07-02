import { Link } from 'react-router-dom';
import { Target, Eye, CheckCircle, ArrowRight } from 'lucide-react';
import { Container, Section, Button, Card } from '../components/ui';
import {
  ...
  Medal,
  ClipboardCheck,
  BarChart3,
  ShieldCheck,
  Award,
  Users
} from 'lucide-react';

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
      {/* Hero */}
<Section className="pt-12 pb-8">
  <Container size="lg">
    <div className="text-center max-w-4xl mx-auto">
      <span className="inline-block px-4 py-1 rounded-full bg-gold/10 text-gold font-semibold text-sm mb-5">
        Empowering Academic Excellence
      </span>

      <h1 className="font-serif text-4xl md:text-5xl font-bold text-navy dark:text-white mb-6">
        About Maharashtra Olympiad Foundation
      </h1>

      <div className="gold-divider mb-6" />

      <p className="text-lg md:text-xl text-ink dark:text-ink-200 leading-relaxed">
        Maharashtra Olympiad Foundation (MOF) is dedicated to inspiring academic
        excellence through high-quality Olympiad examinations that encourage
        conceptual learning, critical thinking, and healthy competition among
        students across Maharashtra.
      </p>
    </div>
  </Container>
</Section>

      {/* Statistics */}
<Section background="gray">
  <Container>
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">

      <Card className="text-center">
        <h3 className="text-4xl font-bold text-gold mb-2">4500+</h3>
        <p className="text-ink dark:text-ink-200 font-medium">
          Schools Participating
        </p>
      </Card>

      <Card className="text-center">
        <h3 className="text-4xl font-bold text-gold mb-2">12 Lakh+</h3>
        <p className="text-ink dark:text-ink-200 font-medium">
          Students Assessed
        </p>
      </Card>

      <Card className="text-center">
        <h3 className="text-4xl font-bold text-gold mb-2">15+</h3>
        <p className="text-ink dark:text-ink-200 font-medium">
          Olympiad Subjects
        </p>
      </Card>

      <Card className="text-center">
        <h3 className="text-4xl font-bold text-gold mb-2">100%</h3>
        <p className="text-ink dark:text-ink-200 font-medium">
          Verified Certificates
        </p>
      </Card>

    </div>
  </Container>
</Section>

      {/* Our Story */}
<Section>
  <Container size="lg">
    <div className="grid lg:grid-cols-2 gap-12 items-center">

      {/* Left */}
      <div>
        <span className="text-gold font-semibold uppercase tracking-wider">
          Our Story
        </span>

        <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy dark:text-white mt-3 mb-6">
          Building a Culture of Academic Excellence
        </h2>

        <p className="text-lg text-ink dark:text-ink-200 leading-relaxed mb-5">
          Maharashtra Olympiad Foundation (MOF) was established with a clear
          vision—to provide every student with an opportunity to discover,
          develop, and showcase their academic potential through meaningful and
          concept-driven Olympiad examinations.
        </p>

        <p className="text-lg text-ink dark:text-ink-200 leading-relaxed mb-5">
          We believe that true learning extends beyond classroom assessments.
          Our Olympiads encourage students to think critically, solve problems
          creatively, and strengthen their understanding of fundamental
          concepts across various subjects.
        </p>

        <p className="text-lg text-ink dark:text-ink-200 leading-relaxed">
          By partnering with schools throughout Maharashtra, we strive to create
          an ecosystem where talent is recognized, excellence is celebrated,
          and every learner is inspired to achieve greater heights.
        </p>
      </div>

      {/* Right */}
      <Card className="p-8 bg-gradient-to-br from-navy to-navy-800 text-white">

        <h3 className="font-serif text-2xl font-bold mb-6">
          What We Stand For
        </h3>

        <div className="space-y-5">

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-navy font-bold">
              ✓
            </div>
            <div>
              <h4 className="font-semibold mb-1">Concept-Based Learning</h4>
              <p className="text-gray-300 text-sm">
                Assessing understanding rather than memorization.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-navy font-bold">
              ✓
            </div>
            <div>
              <h4 className="font-semibold mb-1">Fair & Transparent Evaluation</h4>
              <p className="text-gray-300 text-sm">
                Standardized assessment with reliable evaluation practices.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-navy font-bold">
              ✓
            </div>
            <div>
              <h4 className="font-semibold mb-1">Recognition of Excellence</h4>
              <p className="text-gray-300 text-sm">
                Celebrating student achievement through verified certificates,
                awards, and recognition.
              </p>
            </div>
          </div>

        </div>

      </Card>

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

      {/* Why Choose MOF */}
<Section background="gray">
  <Container>

    <div className="text-center mb-12">
      <span className="text-gold font-semibold uppercase tracking-wider">
        Why Choose MOF
      </span>

      <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy dark:text-white mt-3 mb-4">
        A Trusted Partner in Academic Excellence
      </h2>

      <div className="gold-divider mb-5" />

      <p className="max-w-3xl mx-auto text-lg text-ink dark:text-ink-200">
        Maharashtra Olympiad Foundation provides a transparent, student-centric,
        and academically rigorous Olympiad experience that helps students grow
        beyond traditional classroom learning.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      <Card className="p-6">
        <Medal className="w-10 h-10 text-gold mb-4" />
        <h3 className="font-semibold text-xl text-navy dark:text-white mb-3">
          Expert-Designed Olympiads
        </h3>
        <p className="text-ink dark:text-ink-200">
          Question papers are designed to evaluate conceptual understanding,
          logical reasoning, and analytical thinking.
        </p>
      </Card>

      <Card className="p-6">
        <ClipboardCheck className="w-10 h-10 text-gold mb-4" />
        <h3 className="font-semibold text-xl text-navy dark:text-white mb-3">
          Transparent Evaluation
        </h3>
        <p className="text-ink dark:text-ink-200">
          Standardized assessment ensures fairness, accuracy, and credibility
          throughout the evaluation process.
        </p>
      </Card>

      <Card className="p-6">
        <BarChart3 className="w-10 h-10 text-gold mb-4" />
        <h3 className="font-semibold text-xl text-navy dark:text-white mb-3">
          Performance Insights
        </h3>
        <p className="text-ink dark:text-ink-200">
          Students and schools receive meaningful performance analysis to
          identify strengths and improvement areas.
        </p>
      </Card>

      <Card className="p-6">
        <ShieldCheck className="w-10 h-10 text-gold mb-4" />
        <h3 className="font-semibold text-xl text-navy dark:text-white mb-3">
          Secure Certification
        </h3>
        <p className="text-ink dark:text-ink-200">
          Certificates are issued with QR verification, ensuring authenticity
          and preventing misuse.
        </p>
      </Card>

      <Card className="p-6">
        <Award className="w-10 h-10 text-gold mb-4" />
        <h3 className="font-semibold text-xl text-navy dark:text-white mb-3">
          Recognition of Excellence
        </h3>
        <p className="text-ink dark:text-ink-200">
          Outstanding students are recognized through certificates, awards,
          and statewide acknowledgment.
        </p>
      </Card>

      <Card className="p-6">
        <Users className="w-10 h-10 text-gold mb-4" />
        <h3 className="font-semibold text-xl text-navy dark:text-white mb-3">
          School Partnership
        </h3>
        <p className="text-ink dark:text-ink-200">
          We work closely with schools and educators to promote academic
          excellence through collaborative initiatives.
        </p>
      </Card>

    </div>

  </Container>
</Section>

      

      
      {/* Call to Action */}
<Section>
  <Container size="md">

    <Card className="text-center p-10 md:p-14 bg-gradient-to-r from-navy to-navy-800 text-white">

      <span className="inline-block px-4 py-1 rounded-full bg-gold text-navy font-semibold text-sm mb-5">
        Join the MOF Community
      </span>

      <h2 className="font-serif text-3xl md:text-4xl font-bold mb-5">
        Inspire the Next Generation of Achievers
      </h2>

      <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8 leading-relaxed">
        Partner with Maharashtra Olympiad Foundation and provide your students
        with an opportunity to compete, learn, and excel through
        concept-based Olympiad examinations recognized across Maharashtra.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">

        <Button asChild size="lg">
          <Link to="/register">
            Register Your School
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </Button>

        <Button
          asChild
          size="lg"
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-navy"
        >
          <Link to="/contact">
            Contact Us
          </Link>
        </Button>

      </div>

    </Card>

  </Container>
</Section>

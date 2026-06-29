import { useParams, Link } from 'react-router-dom';
import { Calculator, FlaskConical, BookOpen, Globe, Monitor, Palette, Download, ArrowRight } from 'lucide-react';
import { Container, Section, Button, Card } from '../components/ui';
import { olympiads } from '../data/siteData';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  calculator: Calculator,
  flask: FlaskConical,
  'book-open': BookOpen,
  globe: Globe,
  monitor: Monitor,
  palette: Palette,
};

const syllabi: Record<string, Record<string, string[]>> = {
  math: {
    'Classes 1-2': ['Numbers (1-100)', 'Addition', 'Subtraction', 'Shapes', 'Patterns', 'Time'],
    'Classes 3-4': ['Numbers up to 10000', 'Multiplication', 'Division', 'Fractions', 'Measurement', 'Data Handling'],
    'Classes 5-6': ['Number System', 'Algebra Basics', 'Geometry', 'Ratio & Proportion', 'Percentages', 'Integers'],
    'Classes 7-8': ['Linear Equations', 'Quadrilaterals', 'Mensuration', 'Statistics', 'Exponents', 'Polynomials'],
    'Classes 9-10': ['Real Numbers', 'Linear Equations in Two Variables', 'Triangles', 'Coordinate Geometry', 'Trigonometry Basics', 'Probability'],
    'Classes 11-12': ['Sets', 'Functions', 'Trigonometric Functions', 'Calculus', 'Vectors', 'Probability'],
  },
  science: {
    'Classes 1-2': ['Living & Non-living', 'Plants', 'Animals', 'Body Parts', 'Seasons', 'Safety'],
    'Classes 3-4': ['Living World', 'Matter', 'Force & Motion', 'Light & Shadow', 'Environment', 'Healthy Habits'],
    'Classes 5-6': ['Living Organisms', 'Environment', 'Matter', 'Force', 'Motion', 'Magnetism'],
    'Classes 7-8': ['Nutrition', 'Respiration', 'Transportation', 'Reproduction', 'Motion', 'Light'],
    'Classes 9-10': ['Matter', 'Atoms & Molecules', 'Motion', 'Force & Laws', 'Gravitation', 'Work & Energy'],
    'Classes 11-12': ['Physical World', 'Units & Measurements', 'Motion', 'Laws of Motion', 'Work, Energy, Power', 'Thermodynamics'],
  },
  english: {
    'Classes 1-2': ['Alphabets', 'Words', 'Sentences', 'Rhyming Words', 'Picture Reading', 'Vocabulary'],
    'Classes 3-4': ['Grammar Basics', 'Vocabulary', 'Comprehension', 'Sentence Formation', 'Parts of Speech', 'Writing'],
    'Classes 5-6': ['Grammar', 'Comprehension', 'Vocabulary', 'Writing Skills', 'Literature', 'Figures of Speech'],
    'Classes 7-8': ['Tenses', 'Direct & Indirect Speech', 'Active & Passive Voice', 'Comprehension', 'Writing Skills', 'Literature'],
    'Classes 9-10': ['Grammar Advanced', 'Literature', 'Writing Skills', 'Reading Comprehension', 'Vocabulary Advanced', 'Analysis'],
    'Classes 11-12': ['Reading Skills', 'Writing Skills', 'Literature', 'Grammar & Usage', 'Vocabulary', 'Analysis & Interpretation'],
  },
  gk: {
    'Classes 1-2': ['Myself', 'My Family', 'My School', 'Animals', 'Plants', 'Festivals'],
    'Classes 3-4': ['India', 'States', 'Leaders', 'Sports', 'Awards', 'Current Affairs'],
    'Classes 5-6': ['Indian History', 'Geography', 'Civics', 'Science', 'Sports', 'Current Affairs'],
    'Classes 7-8': ['History', 'Geography', 'Polity', 'Economics', 'Science', 'Current Affairs'],
    'Classes 9-10': ['Indian History', 'World History', 'Geography', 'Polity', 'Economics', 'Current Affairs'],
    'Classes 11-12': ['Indian Polity', 'Geography', 'History', 'Economics', 'Science & Technology', 'Current Affairs'],
  },
  computer: {
    'Classes 3-4': ['Computer Basics', 'Parts of Computer', 'Keyboard', 'Mouse', 'MS Paint', 'Internet Basics'],
    'Classes 5-6': ['Operating System', 'MS Word', 'MS PowerPoint', 'Internet', 'Security', 'Programming Basics'],
    'Classes 7-8': ['Computer Fundamentals', 'MS Office', 'Internet & Email', 'Programming', 'Database Basics', 'Networking'],
    'Classes 9-10': ['Computer Organization', 'Operating Systems', 'MS Office Advanced', 'Programming', 'Internet', 'Hardware & Software'],
    'Classes 11-12': ['Computer Fundamentals', 'Programming in C++', 'Data Structures', 'Database Management', 'Networking', 'Cyber Ethics'],
  },
  art: {
    'Classes 1-2': ['Drawing Basics', 'Coloring', 'Shapes', 'Patterns', 'Nature', 'Imagination'],
    'Classes 3-4': ['Drawing', 'Painting', 'Craft', 'Art Appreciation', 'Design', 'Themes'],
    'Classes 5-6': ['Perspective', 'Composition', 'Color Theory', 'Indian Art', 'World Art', 'Design Principles'],
    'Classes 7-8': ['Art History', 'Techniques', 'Mediums', 'Indian Heritage', 'World Art Movements', 'Design'],
    'Classes 9-10': ['Art History', 'Aesthetics', 'Principles of Design', 'Indian Art', 'Contemporary Art', 'Portfolio Development'],
    'Classes 11-12': ['Art History', 'Aesthetics', 'Studio Practice', 'Indian Art Traditions', 'Modern Art', 'Design Portfolio'],
  },
};

export default function OlympiadsPage() {
  const { olympiadId } = useParams();

  if (olympiadId) {
    const olympiad = olympiads.find((o) => o.id === olympiadId);
    if (!olympiad) {
      return (
        <Section className="pt-12">
          <Container size="md">
            <Card className="text-center p-8">
              <h2 className="font-serif text-2xl font-bold text-navy dark:text-white mb-4">
                Olympiad Not Found
              </h2>
              <p className="text-ink dark:text-ink-200 mb-6">
                The requested Olympiad could not be found.
              </p>
              <Button asChild>
                <Link to="/olympiads">View All Olympiads</Link>
              </Button>
            </Card>
          </Container>
        </Section>
      );
    }

    const Icon = iconMap[olympiad.icon] || Calculator;
    const olympiadSyllabus = syllabi[olympiad.id] || {};

    return (
      <Section className="pt-12">
        <Container size="lg">
          {/* Header */}
          <div className="flex items-start gap-6 mb-12">
            <div className={`w-20 h-20 ${olympiad.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
              <Icon className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy dark:text-white mb-2">
                {olympiad.name}
              </h1>
              <p className="text-ink dark:text-ink-200 text-lg">
                {olympiad.description}
              </p>
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <Card>
              <h3 className="font-sans text-sm text-ink-400 dark:text-ink-300 mb-1">Eligibility</h3>
              <p className="font-serif font-semibold text-navy dark:text-white">{olympiad.eligibility}</p>
            </Card>
            <Card>
              <h3 className="font-sans text-sm text-ink-400 dark:text-ink-300 mb-1">Duration</h3>
              <p className="font-serif font-semibold text-navy dark:text-white">{olympiad.duration}</p>
            </Card>
            <Card>
              <h3 className="font-sans text-sm text-ink-400 dark:text-ink-300 mb-1">Questions</h3>
              <p className="font-serif font-semibold text-navy dark:text-white">{olympiad.pattern.questions} MCQs</p>
            </Card>
          </div>

          {/* Exam Pattern */}
          <Card className="mb-12">
            <h2 className="font-serif text-xl font-bold text-navy dark:text-white mb-6">
              Exam Pattern
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-ink dark:text-ink-200 mb-2">Question Type</h3>
                <p className="text-ink dark:text-ink-200">{olympiad.pattern.type}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-ink dark:text-ink-200 mb-2">Marking Scheme</h3>
                <p className="text-ink dark:text-ink-200">{olympiad.pattern.marking}</p>
              </div>
            </div>
          </Card>

          {/* Syllabus */}
          <h2 className="font-serif text-2xl font-bold text-navy dark:text-white mb-6">
            Syllabus Overview
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {Object.entries(olympiadSyllabus).map(([cls, topics]) => (
              <Card key={cls}>
                <h3 className="font-serif font-semibold text-navy dark:text-white mb-3">
                  {cls}
                </h3>
                <ul className="space-y-1.5">
                  {topics.map((topic, idx) => (
                    <li key={idx} className="text-sm text-ink dark:text-ink-200 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold mt-1.5 flex-shrink-0" />
                      {topic}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Downloads */}
          <Card className="mb-12">
            <h2 className="font-serif text-xl font-bold text-navy dark:text-white mb-6">
              Download Resources
            </h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Syllabus PDF
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Sample Paper
              </Button>
              <Button variant="outline">
                <Download className="w-4 h-4 mr-2" />
                Previous Year Paper
              </Button>
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button asChild>
              <Link to="/register">
                Register Your School <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  // Listing page
  return (
    <Section className="pt-12">
      <Container>
        <div className="text-center mb-12">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy dark:text-white mb-3">
            Our Olympiads
          </h1>
          <div className="gold-divider mb-4" />
          <p className="text-ink dark:text-ink-200 max-w-2xl mx-auto">
            Choose from six subject Olympiads designed to assess conceptual
            understanding and recognize academic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {olympiads.map((olympiad) => {
            const Icon = iconMap[olympiad.icon] || Calculator;
            return (
              <Card key={olympiad.id} className="flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-14 h-14 ${olympiad.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-navy dark:text-white mb-1">
                      {olympiad.name}
                    </h3>
                    <p className="text-sm text-ink dark:text-ink-200">
                      {olympiad.description}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-ink-400 mb-4">
                  <span>Eligibility: {olympiad.eligibility}</span>
                  <span>Duration: {olympiad.duration}</span>
                </div>

                <div className="mt-auto pt-4 border-t border-ink-100 dark:border-navy-700">
                  <Button variant="outline" className="w-full" asChild>
                    <Link to={`/olympiads/${olympiad.id}`}>
                      View Details <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

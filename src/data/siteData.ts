export const siteConfig = {
  name: 'Maharashtra Olympiad Foundation',
  shortName: 'MOF',
  tagline: 'Empowering Young Minds • Celebrating Excellence',
  marathiName: 'महाराष्ट्र ऑलिम्पियाड फाउंडेशन',
  email: 'mofindia.info@gmail.com',
  phone: '+91 93243 52753',
  whatsapp: '+91 93243 52753',
  address: {
    line1: '13, Alok, Opp. Murkute Hall',
    line2: 'New Pandit Colony, Gangapur Road',
    city: 'Nashik',
    state: 'Maharashtra',
    pincode: '422 002',
  },
  social: {
    facebook: 'https://facebook.com/maharashtraolympiad',
    twitter: 'https://twitter.com/maharashtraolympiad',
    instagram: 'https://instagram.com/maharashtraolympiad',
    linkedin: 'https://linkedin.com/company/maharashtraolympiad',
    youtube: 'https://youtube.com/@maharashtraolympiad',
  },
};

export const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Olympiads', path: '/olympiads' },
  { name: 'Resources', path: '/resources' },
  { name: 'Important Dates', path: '/dates' },
  { name: 'School Registration', path: '/register' },
  { name: 'Results', path: '/results' },
  { name: 'Certificate Verification', path: '/verify' },
  { name: 'Contact', path: '/contact' },
];

export const utilityLinks = [
  { name: 'News & Announcements', path: '/news' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'FAQs', path: '/faq' },
];

export const olympiads = [
  {
  id: 'math',
  name: 'Maharashtra Mathematics Olympiad',
  shortName: 'MMO',
  description: 'Develop mathematical reasoning, analytical thinking and problem-solving skills.',
  subjects: ['Arithmetic', 'Algebra', 'Geometry', 'Logical Reasoning'],
  eligibility: 'Classes V - IX',
  duration: '60 Minutes',
  location: 'Your Own School',
  pattern: {
    questions: 50,
    type: 'Multiple Choice Questions (MCQs)',
    marking: '2 Marks per Question • No Negative Marking',
  },
  color: 'bg-blue-500',
  icon: 'calculator',
},
  {
  id: 'science',
  name: 'Maharashtra Science Olympiad',
  shortName: 'MSO',
  description: 'Enhance scientific thinking, observation and analytical abilities.',
  subjects: ['Physics', 'Chemistry', 'Biology', 'Environmental Science'],
  eligibility: 'Classes V - IX',
  duration: '60 Minutes',
  location: 'Your Own School',
  pattern: {
    questions: 50,
    type: 'Multiple Choice Questions (MCQs)',
    marking: '2 Marks per Question • No Negative Marking',
  },
  color: 'bg-green-500',
  icon: 'flask',
},
  {
  id: 'english',
  name: 'English Olympiad',
  shortName: 'EO',
  description: '🚀 Coming Soon',
  status: 'coming-soon',
  color: 'bg-purple-500',
  icon: 'book-open',
},
  {
  id: 'gk',
  name: 'General Knowledge Olympiad',
  shortName: 'GKO',
  description: '🚀 Coming Soon',
  status: 'coming-soon',
  color: 'bg-orange-500',
  icon: 'globe',
},
  {
  id: 'computer',
  name: 'Computer Olympiad',
  shortName: 'CO',
  description: '🚀 Coming Soon',
  status: 'coming-soon',
  color: 'bg-cyan-500',
  icon: 'monitor',
},
];

export const features = [
  {
    title: 'Experienced Academic Panel',
    description: 'Question papers designed by subject matter experts with decades of experience.',
    icon: 'users',
  },
  {
    title: 'Transparent Evaluation',
    description: 'Standardized assessment process with clear marking schemes.',
    icon: 'clipboard-check',
  },
  {
    title: 'State Rankings',
    description: 'Comprehensive state-level rankings across all districts.',
    icon: 'trophy',
  },
  {
    title: 'Digital Certificates',
    description: 'Secure, QR-verified digital certificates for all participants.',
    icon: 'award',
  },
  {
    title: 'QR-Verified Certificates',
    description: 'Instant online verification system for authenticity.',
    icon: 'qr-code',
  },
  {
    title: 'School Performance Reports',
    description: 'Detailed analysis reports for schools to track improvement.',
    icon: 'bar-chart-2',
  },
  {
    title: 'Merit Awards',
    description: 'Recognition and awards for top performers at state level.',
    icon: 'medal',
  },
  {
    title: 'Fast Result Processing',
    description: 'Results declared within 4 weeks of examination.',
    icon: 'zap',
  },
];

export const examProcess = [
  {
    step: 1,
    title: 'School Registration',
    description: 'Schools register students through the official portal.',
  },
  {
    step: 2,
    title: 'Student Registration',
    description: 'Student details are submitted by the School Coordinator.',
  },
  {
    step: 3,
    title: 'Olympiad Examination',
    description: 'Offline examination conducted in the student’s own school.',
  },
  {
    step: 4,
    title: 'Central Evaluation',
    description: 'Answer sheets evaluated by the Olympiad Evaluation Team.',
  },
  {
    step: 5,
    title: 'Result Declaration',
    description: 'Results published on the official website.',
  },
  {
    step: 6,
    title: 'Certificates & Awards',
    description: 'Certificates and awards distributed to deserving students.',
  },
  {
    step: 7,
    title: 'Certificate Verification',
    description: 'Verify certificates instantly using the online verification portal.',
  },
];

export const importantDates = [
  {
    event: 'Registration Opens',
    date: 'Open Now',
    description: 'School registrations are currently open.',
  },
  {
    event: 'Registration Closes',
    date: '31 August 2026',
    description: 'Last date for registration of students.',
  },
  {
    event: 'Maharashtra Science Olympiad',
    date: '13 December 2026',
    description: 'Sunday • 10:00 AM',
  },
  {
    event: 'Maharashtra Mathematics Olympiad',
    date: '20 December 2026',
    description: 'Sunday • 10:00 AM',
  },
  {
    event: 'Result Declaration',
    date: 'To Be Announced',
    description: 'Results will be published on the official website.',
  },
];

export const stats = [
  { value: 2, label: 'Olympiads', icon: 'book-open' },
  { value: 5, label: 'Eligible Classes', icon: 'school' },
  { value: 50, label: 'Questions', icon: 'help-circle' },
  { value: 100, label: 'Total Marks', icon: 'award' },
  { value: 60, label: 'Minutes', icon: 'clock' },
];

export const testimonials = [];

export const announcements = [
  {
    title: 'Registrations Open for Maharashtra Science & Mathematics Olympiad 2026',
    date: '01 July 2026',
  },
  {
    title: 'Last Date for Registration: 31 August 2026',
    date: '31 August 2026',
  },
  {
    title: 'Maharashtra Science Olympiad scheduled on 13 December 2026 at 10:00 AM',
    date: '13 December 2026',
  },
  {
    title: 'Maharashtra Mathematics Olympiad scheduled on 20 December 2026 at 10:00 AM',
    date: '20 December 2026',
  },
  {
    title: 'Results will be announced on the official website after evaluation.',
    date: 'Coming Soon',
  },
];

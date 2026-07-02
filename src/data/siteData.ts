export const siteConfig = {
  name: 'Maharashtra Olympiad Foundation',
  shortName: 'MOF',
  tagline: 'Promoting Academic Excellence & Creative Talent',
  marathiName: 'महाराष्ट्र ऑलिम्पियाड फाउंडेशन',

  email: 'mofindia.info@gmail.com',
  phone: '+91 93243 52753',
  whatsapp: '+91 93243 52753',

  website: 'https://mofindia.online',

  address: {
    line1: '13, Alok, Opp. Murkute Hall',
    line2: 'New Pandit Colony, Gangapur Road',
    city: 'Nashik',
    state: 'Maharashtra',
    pincode: '422 002',
  },

  social: {
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: '',
    youtube: '',
  },
};

export const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Olympiads', path: '/olympiads' },
  { name: 'Talent Contests', path: '/talent-contests' },
  { name: 'Resources', path: '/resources' },
  { name: 'Important Dates', path: '/dates' },
  { name: 'School Registration', path: '/register' },
  { name: 'Results', path: '/results' },
  { name: 'Certificate Verification', path: '/verify' },
  { name: 'Contact', path: '/contact' },
];

export const utilityLinks = [
  { name: 'Announcements', path: '/news' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'FAQs', path: '/faq' },
];

export const olympiads = [
  {
    id: 'science',
    name: 'Maharashtra Science Olympiad',
    shortName: 'MSO',
    description:
      'Enhance scientific thinking, analytical ability and problem-solving skills through a state-level Science Olympiad.',

    subjects: [
      'Physics',
      'Chemistry',
      'Biology',
      'Environmental Science',
      'Logical Reasoning',
    ],

    eligibility: 'Classes V - IX',

    duration: '60 Minutes',

    mode: 'Offline (Pen & Paper)',

    medium: ['English', 'Marathi'],

    location: 'Student\'s Own School',

    registrationFee: '₹125',

    examDate: '13 December 2026',

    examTime: '10:00 AM',

    status: 'active',

    pattern: {
      questions: 50,
      type: 'Multiple Choice Questions (MCQs)',
      marking: '2 Marks per Question • No Negative Marking',
      totalMarks: 100,
    },

    color: 'bg-green-500',

    icon: 'flask',
  },

  {
    id: 'math',
    name: 'Maharashtra Mathematics Olympiad',
    shortName: 'MMO',

    description:
      'Develop mathematical reasoning, logical thinking and analytical skills through a competitive examination.',

    subjects: [
      'Arithmetic',
      'Algebra',
      'Geometry',
      'Logical Reasoning',
    ],

    eligibility: 'Classes V - IX',

    duration: '60 Minutes',

    mode: 'Offline (Pen & Paper)',

    medium: ['English', 'Marathi'],

    location: 'Student\'s Own School',

    registrationFee: '₹125',

    examDate: '20 December 2026',

    examTime: '10:00 AM',

    status: 'active',

    pattern: {
      questions: 50,
      type: 'Multiple Choice Questions (MCQs)',
      marking: '2 Marks per Question • No Negative Marking',
      totalMarks: 100,
    },

    color: 'bg-blue-500',

    icon: 'calculator',
  },

  {
    id: 'english',
    name: 'English Olympiad',

    shortName: 'EO',

    description:
      'English Olympiad will be launched soon. Stay tuned for official announcements.',

    status: 'coming-soon',

    color: 'bg-purple-500',

    icon: 'book-open',
  },

  {
    id: 'computer',
    name: 'Computer Olympiad',

    shortName: 'CO',

    description:
      'Computer Olympiad will be launched soon. Registrations will open shortly.',

    status: 'coming-soon',

    color: 'bg-cyan-500',

    icon: 'monitor',
  },

  {
    id: 'gk',
    name: 'General Knowledge Olympiad',

    shortName: 'GKO',

    description:
      'General Knowledge Olympiad will be introduced in the upcoming academic session.',

    status: 'coming-soon',

    color: 'bg-orange-500',

    icon: 'globe',
  },
];


export const features = [
  {
    title: 'Offline Examination',
    description:
      'All Olympiads are conducted offline (Pen & Paper) in the student’s own participating school.',
    icon: 'school',
  },
  {
    title: 'Experienced Academic Panel',
    description:
      'Question papers are designed and reviewed by experienced academicians and subject experts.',
    icon: 'users',
  },
  {
    title: 'Transparent Evaluation',
    description:
      'Answer sheets are evaluated centrally following a standardized assessment process.',
    icon: 'clipboard-check',
  },
  {
    title: 'QR Verified Certificates',
    description:
      'Every certificate carries a unique Certificate ID and can be verified online instantly.',
    icon: 'qr-code',
  },
  {
    title: 'Awards & Recognition',
    description:
      'Merit Certificates, Participation Certificates, School Trophies and Champion Awards for deserving students.',
    icon: 'award',
  },
  {
    title: 'Creative Talent Contests',
    description:
      'Apart from Olympiads, students can also participate in various creative talent competitions conducted by MOF.',
    icon: 'palette',
  },
  {
    title: 'School Excellence',
    description:
      'Special recognition is given to the Best Performing Schools and School Coordinators.',
    icon: 'trophy',
  },
  {
    title: 'Certificate Verification',
    description:
      'Employers, schools and institutions can verify certificates through the official verification portal.',
    icon: 'shield-check',
  },
];



export const examProcess = [
  {
    step: 1,
    title: 'School Registration',
    description:
      'Schools register as participating institutions through the official portal.',
  },
  {
    step: 2,
    title: 'Student Registration',
    description:
      'Student details are submitted by the School Olympiad Coordinator.',
  },
  {
    step: 3,
    title: 'Olympiad Examination',
    description:
      'Offline examination is conducted in the student’s own school.',
  },
  {
    step: 4,
    title: 'Central Evaluation',
    description:
      'Answer sheets are evaluated centrally by the Olympiad Evaluation Team.',
  },
  {
    step: 5,
    title: 'Result Declaration',
    description:
      'Results are published on the official MOF website.',
  },
  {
    step: 6,
    title: 'Certificates & Awards',
    description:
      'Certificates, trophies and awards are distributed to deserving students and schools.',
  },
  {
    step: 7,
    title: 'Certificate Verification',
    description:
      'Certificates can be verified online using the Certificate ID.',
  },
];



export const importantDates = [
  {
    event: 'Registration Opens',
    date: 'Open Now',
    description:
      'School registrations are currently open for Maharashtra Science & Mathematics Olympiad 2026.',
  },
  {
    event: 'Registration Closes',
    date: '31 August 2026',
    description:
      'Last date for submission of registration forms and fees.',
  },
  {
    event: 'Maharashtra Science Olympiad',
    date: '13 December 2026',
    description:
      'Sunday • 10:00 AM • Offline (Pen & Paper)',
  },
  {
    event: 'Maharashtra Mathematics Olympiad',
    date: '20 December 2026',
    description:
      'Sunday • 10:00 AM • Offline (Pen & Paper)',
  },
  {
    event: 'Result Declaration',
    date: 'To Be Announced',
    description:
      'Results will be published on the official website.',
  },
];


export const stats = [
  { value: 2, label: 'Olympiads', icon: 'book-open' },
  { value: 50, label: 'Questions', icon: 'help-circle' },
  { value: 100, label: 'Marks', icon: 'award' },
  { value: 60, label: 'Minutes', icon: 'clock' },
  { value: 5, label: 'Eligible Classes', icon: 'school' },
];

export const testimonials = [];

export const announcements = [
  {
    title: 'Registrations Open for Maharashtra Science & Mathematics Olympiad 2026',
    date: '01 July 2026',
  },
  {
    title: 'Registration closes on 31 August 2026.',
    date: '31 August 2026',
  },
  {
    title: 'Maharashtra Science Olympiad - 13 December 2026',
    date: '13 December 2026',
  },
  {
    title: 'Maharashtra Mathematics Olympiad - 20 December 2026',
    date: '20 December 2026',
  },
  {
    title: 'English, Computer and General Knowledge Olympiads will be launched soon.',
    date: 'Coming Soon',
  },
];



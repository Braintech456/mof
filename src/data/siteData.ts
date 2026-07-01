export const siteConfig = {
  name: 'Maharashtra Olympiad Foundation',
  shortName: 'MOF',
  tagline: 'Empowering Young Minds • Celebrating Excellence',
  marathiName: 'महाराष्ट्र ऑलिम्पियाड फाउंडेशन',
  email: 'info@maharashtraolympiad.org',
  phone: '+91 22 1234 5678',
  whatsapp: '+91 98765 43210',
  address: {
    line1: 'Olympiad Bhavan, 4th Floor',
    line2: 'Dr. Ambedkar Road, Dadar',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400014',
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
    name: 'Mathematics Olympiad',
    shortName: 'MO',
    description: 'Test your mathematical reasoning and problem-solving abilities.',
    subjects: ['Arithmetic', 'Algebra', 'Geometry', 'Number Theory'],
    eligibility: 'Classes 1-12',
    duration: '60 minutes',
    pattern: {
      questions: 50,
      type: 'Multiple Choice Questions',
      marking: '1 mark per question, no negative marking',
    },
    color: 'bg-blue-500',
    icon: 'calculator',
  },
  {
    id: 'science',
    name: 'Science Olympiad',
    shortName: 'SO',
    description: 'Explore the wonders of physics, chemistry, and biology.',
    subjects: ['Physics', 'Chemistry', 'Biology', 'Environmental Science'],
    eligibility: 'Classes 1-12',
    duration: '60 minutes',
    pattern: {
      questions: 50,
      type: 'Multiple Choice Questions',
      marking: '1 mark per question, no negative marking',
    },
    color: 'bg-green-500',
    icon: 'flask',
  },
  {
    id: 'english',
    name: 'English Olympiad',
    shortName: 'EO',
    description: 'Demonstrate your command of language and literature.',
    subjects: ['Grammar', 'Vocabulary', 'Comprehension', 'Literature'],
    eligibility: 'Classes 1-12',
    duration: '60 minutes',
    pattern: {
      questions: 50,
      type: 'Multiple Choice Questions',
      marking: '1 mark per question, no negative marking',
    },
    color: 'bg-purple-500',
    icon: 'book-open',
  },
  {
    id: 'gk',
    name: 'General Knowledge Olympiad',
    shortName: 'GKO',
    description: 'Test your awareness of the world around you.',
    subjects: ['Current Affairs', 'History', 'Geography', 'General Science'],
    eligibility: 'Classes 1-12',
    duration: '60 minutes',
    pattern: {
      questions: 50,
      type: 'Multiple Choice Questions',
      marking: '1 mark per question, no negative marking',
    },
    color: 'bg-orange-500',
    icon: 'globe',
  },
  {
    id: 'computer',
    name: 'Computer Olympiad',
    shortName: 'CO',
    description: 'Showcase your digital literacy and computing skills.',
    subjects: ['Computer Fundamentals', 'Internet', 'Programming Basics', 'Digital Literacy'],
    eligibility: 'Classes 3-12',
    duration: '60 minutes',
    pattern: {
      questions: 50,
      type: 'Multiple Choice Questions',
      marking: '1 mark per question, no negative marking',
    },
    color: 'bg-cyan-500',
    icon: 'monitor',
  },
  {
    id: 'art',
    name: 'Art Olympiad',
    shortName: 'AO',
    description: 'Express creativity through visual and performing arts.',
    subjects: ['Drawing', 'Painting', 'Art History', 'Creative Expression'],
    eligibility: 'Classes 1-12',
    duration: '90 minutes',
    pattern: {
      questions: 'Practical + Written',
      type: 'Mixed Format',
      marking: 'Based on creativity and technique',
    },
    color: 'bg-pink-500',
    icon: 'palette',
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
  { step: 1, title: 'School Registration', description: 'Schools register online and receive login credentials.' },
  { step: 2, title: 'Student Data Submission', description: 'Schools submit student details through the portal.' },
  { step: 3, title: 'Hall Ticket Generation', description: 'Hall tickets generated and distributed to students.' },
  { step: 4, title: 'Olympiad Examination', description: 'Examinations conducted at respective schools.' },
  { step: 5, title: 'Evaluation', description: 'Answer sheets evaluated centrally by expert panel.' },
  { step: 6, title: 'Results', description: 'Results declared online, accessible via roll number.' },
  { step: 7, title: 'Certificate Distribution', description: 'Digital certificates issued to all participants.' },
  { step: 8, title: 'Online Verification', description: 'Certificates verified online using unique ID.' },
];

export const importantDates = [
  {
    event: 'Registration Opens',
    date: 'July 1, 2026',
    description: 'Schools can begin online registration for all Olympiads.',
  },
  {
    event: 'Registration Closes',
    date: 'September 30, 2026',
    description: 'Last date for school registration and student data submission.',
  },
  {
    event: 'Hall Ticket Release',
    date: 'October 15, 2026',
    description: 'Hall tickets available for download from student portal.',
  },
  {
    event: 'Olympiad Examination',
    date: 'November 10-30, 2026',
    description: 'Examinations conducted across all participating schools.',
  },
  {
    event: 'Result Declaration',
    date: 'December 20, 2026',
    description: 'Results available online. Schools receive detailed reports.',
  },
  {
    event: 'Certificate Distribution',
    date: 'January 15, 2027',
    description: 'Digital certificates issued. Physical certificates dispatched.',
  },
];

export const stats = [
  { value: 1250000, label: 'Students Participated', icon: 'users' },
  { value: 4500, label: 'Schools Registered', icon: 'school' },
  { value: 6, label: 'Olympiads Conducted', icon: 'book-open' },
  { value: 36, label: 'Districts Covered', icon: 'map-pin' },
  { value: 890000, label: 'Certificates Issued', icon: 'award' },
];

export const testimonials = [
  {
    type: 'Principal',
    name: 'Dr. Suresh Patil',
    school: 'Shivaji Public School, Pune',
    text: 'MOF has provided our students an excellent platform to showcase their academic abilities. The quality of questions and the conduct of examinations has been exemplary.',
    avatar: 'SP',
  },
  {
    type: 'Teacher',
    name: 'Mrs. Meera Joshi',
    school: 'St. Xavier\'s High School, Mumbai',
    text: 'The detailed reports help us identify areas where our students need improvement. It has become an integral part of our academic calendar.',
    avatar: 'MJ',
  },
  {
    type: 'Parent',
    name: 'Mr. Rajesh Kulkarni',
    school: 'Parent of Class 8 Student',
    text: 'The Olympiad experience prepared my daughter well for competitive exams. The certificate verification system adds credibility.',
    avatar: 'RK',
  },
  {
    type: 'Student',
    name: 'Ananya Deshmukh',
    school: 'Class 10, Nagpur',
    text: 'Participating in MOF Olympiads boosted my confidence. I improved my ranking from state rank 45 to rank 12 over two years.',
    avatar: 'AD',
  },
];

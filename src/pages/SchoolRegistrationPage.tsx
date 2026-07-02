import { useState } from 'react';
import { Link } from 'react-router-dom';
import { School, CheckCircle, ArrowRight } from 'lucide-react';
import { Container, Section, Button, Input, Select, Textarea, Card, Spinner } from '../components/ui';
import { supabase } from '../lib/supabase';

interface FormData {
  schoolName: string;
  principalName: string;
  board: string;
  udiseCode: string;
  address: string;
  district: string;
  email: string;
  phone: string;
  coordinatorName: string;
  coordinatorPhone: string;
  expectedStudents: string;
  olympiads: string[];
  comments: string;
}

const boards = [
  { value: 'ssc', label: 'SSC (Maharashtra State Board)' },
  { value: 'cbse', label: 'CBSE' },
  { value: 'icse', label: 'ICSE/ISC' },
  { value: 'ib', label: 'IB' },
  { value: 'other', label: 'Other' },
];

const districts = [
  'Mumbai City', 'Mumbai Suburban', 'Pune', 'Nagpur', 'Thane', 'Nashik', 'Aurangabad',
  'Solapur', 'Kolhapur', 'Sangli', 'Satara', 'Ratnagiri', 'Sindhudurg', 'Raigad',
  'Palghar', 'Ahmednagar', 'Dhule', 'Nandurbar', 'Jalgaon', 'Buldhana', 'Akola',
  'Washim', 'Amravati', 'Wardha', 'Yavatmal', 'Chandrapur', 'Gadchiroli', 'Bhandara',
  'Gondia', 'Bhandara', 'Nanded', 'Hingoli', 'Parbhani', 'Jalna', 'Beed', 'Latur',
  'Osmanabad', 'Usmanabad',
];

const olympiadOptions = [
  { value: 'math', label: 'Mathematics Olympiad' },
  { value: 'science', label: 'Science Olympiad' },
  { value: 'english', label: 'English Olympiad' },
  { value: 'gk', label: 'General Knowledge Olympiad' },
  { value: 'computer', label: 'Computer Olympiad' },
  { value: 'art', label: 'Art Olympiad' },
];

export default function SchoolRegistrationPage() {
  const [formData, setFormData] = useState<FormData>({
    schoolName: '',
    principalName: '',
    board: '',
    udiseCode: '',
    address: '',
    district: '',
    email: '',
    phone: '',
    coordinatorName: '',
    coordinatorPhone: '',
    expectedStudents: '',
    olympiads: [],
    comments: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [applicationId, setApplicationId] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.schoolName.trim()) {
      newErrors.schoolName = 'School name is required';
    }
    if (!formData.principalName.trim()) {
      newErrors.principalName = 'Principal name is required';
    }
    if (!formData.board) {
      newErrors.board = 'Please select a board';
    }
    if (formData.udiseCode && !/^\d{11}$/.test(formData.udiseCode)) {
      newErrors.udiseCode = 'UDISE code must be 11 digits';
    }
    if (!formData.district) {
      newErrors.district = 'Please select a district';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.expectedStudents.trim()) {
      newErrors.expectedStudents = 'Expected number of students is required';
    }
    if (formData.olympiads.length === 0) {
      newErrors.olympiads = 'Please select at least one Olympiad';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('school_registrations')
        .insert([
          {
            school_name: formData.schoolName,
            principal_name: formData.principalName,
            board: formData.board,
            udise_code: formData.udiseCode || null,
            address: formData.address,
            district: formData.district,
            email: formData.email,
            phone: formData.phone,
            coordinator_name: formData.coordinatorName || null,
            coordinator_phone: formData.coordinatorPhone || null,
            expected_students: parseInt(formData.expectedStudents),
            olympiads: formData.olympiads,
            comments: formData.comments || null,
            status: 'pending',
          },
        ])
        .select('id')
        .single();

      if (error) throw error;
      if (data) {
        setApplicationId(`MOF-REG-${new Date().getFullYear()}-${String(data.id).padStart(6, '0')}`);
        setSuccess(true);
      }
    } catch (err) {
      console.error('Registration error:', err);
      setErrors({ submit: 'An error occurred. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  const handleOlympiadChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      olympiads: prev.olympiads.includes(value)
        ? prev.olympiads.filter((o) => o !== value)
        : [...prev.olympiads, value],
    }));
  };

  if (success) {
    return (
      <Section className="pt-12">
        <Container size="md">
          <Card className="text-center p-8 md:p-12">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-navy dark:text-white mb-3">
              Registration Submitted
            </h2>
            <p className="text-ink dark:text-ink-200 mb-6 max-w-md mx-auto">
              Your school registration has been submitted successfully. Our team
              will review your application and contact you within 3-5 business days.
            </p>

            <div className="bg-ink-50 dark:bg-navy-700 p-6 rounded mb-6 inline-block">
              <p className="text-sm text-ink-400 dark:text-ink-300 mb-1">
                Your Application ID
              </p>
              <p className="font-mono text-xl font-bold text-navy dark:text-white">
                {applicationId}
              </p>
            </div>

            <div className="text-left max-w-md mx-auto bg-white dark:bg-navy-800 border border-ink-200 dark:border-navy-600 rounded p-4 mb-6">
              <h3 className="font-serif font-semibold text-navy dark:text-white mb-3">
                What Happens Next?
              </h3>
              <ul className="space-y-2 text-sm text-ink dark:text-ink-200">
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                  <span>Our team will verify your school details</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                  <span>You will receive login credentials via email</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                  <span>Submit student data through the portal</span>
                </li>
                <li className="flex items-start gap-2">
                  <ArrowRight className="w-4 h-4 mt-0.5 text-gold flex-shrink-0" />
                  <span>Receive hall tickets and conduct the Olympiad</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild>
                <Link to="/">Back to Home</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link to="/verify">Verify Certificate</Link>
              </Button>
            </div>
          </Card>
        </Container>
      </Section>
    );
  }

  return (
    <Section className="pt-12">
      <Container size="lg">
        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-navy dark:bg-gold flex items-center justify-center">
            <School className="w-10 h-10 text-gold dark:text-navy" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy dark:text-white mb-3">
            School Registration
          </h1>
          <div className="gold-divider mb-4" />
          <p className="text-ink dark:text-ink-200 max-w-lg mx-auto">
            Register your school to participate in MOF Olympiads. Complete the
            form below with accurate details.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <Card className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="School Name *"
                value={formData.schoolName}
                onChange={(e) =>
                  setFormData({ ...formData, schoolName: e.target.value })
                }
                error={errors.schoolName}
                placeholder="Enter school name"
              />

              <Input
                label="Principal Name *"
                value={formData.principalName}
                onChange={(e) =>
                  setFormData({ ...formData, principalName: e.target.value })
                }
                error={errors.principalName}
                placeholder="Enter principal's name"
              />

              <Select
                label="Board *"
                options={boards}
                value={formData.board}
                onChange={(e) =>
                  setFormData({ ...formData, board: e.target.value })
                }
                error={errors.board}
                placeholder="Select board"
              />

              <Input
                label="UDISE Code"
                value={formData.udiseCode}
                onChange={(e) =>
                  setFormData({ ...formData, udiseCode: e.target.value })
                }
                error={errors.udiseCode}
                placeholder="11-digit UDISE code"
                helperText="Optional but recommended"
              />

              <div className="md:col-span-2">
                <Textarea
                  label="School Address *"
                  value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  }
                  placeholder="Enter complete address"
                  rows={2}
                />
              </div>

              <Select
                label="District *"
                options={districts.map((d) => ({ value: d, label: d }))}
                value={formData.district}
                onChange={(e) =>
                  setFormData({ ...formData, district: e.target.value })
                }
                error={errors.district}
                placeholder="Select district"
              />

              <Input
                label="School Email *"
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                error={errors.email}
                placeholder="school@example.com"
              />

              <Input
                label="School Phone *"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                error={errors.phone}
                placeholder="10-digit phone number"
              />

              <Input
                label="Coordinator Name"
                value={formData.coordinatorName}
                onChange={(e) =>
                  setFormData({ ...formData, coordinatorName: e.target.value })
                }
                placeholder="Olympiad coordinator name"
                helperText="Optional"
              />

              <Input
                label="Coordinator Phone"
                type="tel"
                value={formData.coordinatorPhone}
                onChange={(e) =>
                  setFormData({ ...formData, coordinatorPhone: e.target.value })
                }
                placeholder="Coordinator's phone"
                helperText="Optional"
              />

              <Input
                label="Expected Number of Students *"
                type="number"
                value={formData.expectedStudents}
                onChange={(e) =>
                  setFormData({ ...formData, expectedStudents: e.target.value })
                }
                error={errors.expectedStudents}
                placeholder="Total students across all Olympiads"
              />

              <div className="md:col-span-2">
                <label className="block font-sans text-sm font-medium text-ink dark:text-ink-200 mb-3">
                  Olympiads to Participate *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {olympiadOptions.map((option) => (
                    <label
                      key={option.value}
                      className="flex items-center gap-2 p-3 bg-ink-50 dark:bg-navy-700 rounded cursor-pointer hover:bg-ink-100 dark:hover:bg-navy-600 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.olympiads.includes(option.value)}
                        onChange={() => handleOlympiadChange(option.value)}
                        className="w-4 h-4 text-navy bg-white border-ink-300 rounded focus:ring-navy"
                      />
                      <span className="text-sm text-ink dark:text-white">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.olympiads && (
                  <p className="mt-2 text-sm text-red-500">{errors.olympiads}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <Textarea
                  label="Additional Comments"
                  value={formData.comments}
                  onChange={(e) =>
                    setFormData({ ...formData, comments: e.target.value })
                  }
                  placeholder="Any additional information or queries"
                  rows={3}
                  helperText="Optional"
                />
              </div>
            </div>

            {errors.submit && (
              <p className="mt-4 text-sm text-red-500 text-center">
                {errors.submit}
              </p>
            )}

            <div className="mt-8 flex justify-end">
              <Button type="submit" disabled={loading} className="min-w-40">
                {loading ? (
                  <Spinner size="sm" className="text-white" />
                ) : (
                  'Submit Registration'
                )}
              </Button>
            </div>
          </Card>
        </form>
      </Container>
    </Section>
  );
}

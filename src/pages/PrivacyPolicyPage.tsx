import { Container, Section, Card } from '../components/ui';

export default function PrivacyPolicyPage() {
  return (
    <Section className="pt-12">
      <Container size="md">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy dark:text-white mb-3">
            Privacy Policy
          </h1>
          <div className="gold-divider mb-4" />
          <p className="text-ink-400 dark:text-ink-300 text-sm">
            Last updated: January 2026
          </p>
        </div>

        <Card className="prose prose-navy dark:prose-invert max-w-none">
          <h2 className="font-serif text-xl font-bold text-navy dark:text-white">
            Introduction
          </h2>
          <p className="text-ink dark:text-ink-200">
            Maharashtra Olympiad Foundation (MOF) is committed to protecting the
            privacy of students, schools, and other users of our services. This
            Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you use our website and services.
          </p>

          <h2 className="font-serif text-xl font-bold text-navy dark:text-white mt-8">
            Information We Collect
          </h2>
          <p className="text-ink dark:text-ink-200">We collect information that you provide directly to us, including:</p>
          <ul className="text-ink dark:text-ink-200 space-y-2">
            <li>School registration details: school name, address, contact information, UDISE code</li>
            <li>Student information: name, class, roll number, photograph (for certificates)</li>
            <li>Contact information: email addresses, phone numbers</li>
            <li>Payment information: transaction details for registration fees</li>
          </ul>

          <h2 className="font-serif text-xl font-bold text-navy dark:text-white mt-8">
            How We Use Your Information
          </h2>
          <p className="text-ink dark:text-ink-200">We use the information we collect to:</p>
          <ul className="text-ink dark:text-ink-200 space-y-2">
            <li>Process school registration and student participation</li>
            <li>Generate hall tickets and examination materials</li>
            <li>Declare results and issue certificates</li>
            <li>Communicate important updates and announcements</li>
            <li>Improve our services and develop new programs</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="font-serif text-xl font-bold text-navy dark:text-white mt-8">
            Data Security
          </h2>
          <p className="text-ink dark:text-ink-200">
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access, alteration,
            disclosure, or destruction. This includes encryption, secure servers, and
            restricted access to personal data.
          </p>

          <h2 className="font-serif text-xl font-bold text-navy dark:text-white mt-8">
            Data Sharing
          </h2>
          <p className="text-ink dark:text-ink-200">
            We do not sell, trade, or otherwise transfer your personal information to
            third parties except as necessary to provide our services. This includes
            sharing with schools for legitimate educational purposes and with
            authorized government bodies as required by law.
          </p>

          <h2 className="font-serif text-xl font-bold text-navy dark:text-white mt-8">
            Your Rights
          </h2>
          <p className="text-ink dark:text-ink-200">You have the right to:</p>
          <ul className="text-ink dark:text-ink-200 space-y-2">
            <li>Request access to your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data (subject to legal requirements)</li>
            <li>Opt out of non-essential communications</li>
          </ul>

          <h2 className="font-serif text-xl font-bold text-navy dark:text-white mt-8">
            Contact Us
          </h2>
          <p className="text-ink dark:text-ink-200">
            If you have any questions about this Privacy Policy, please contact us
            at privacy@mof.org.in or write to our registered office address.
          </p>
        </Card>
      </Container>
    </Section>
  );
}

import { Container, Section, Card } from '../components/ui';

export default function TermsPage() {
  return (
    <Section className="pt-12">
      <Container size="md">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy dark:text-white mb-3">
            Terms & Conditions
          </h1>
          <div className="gold-divider mb-4" />
          <p className="text-ink-400 dark:text-ink-300 text-sm">
            Last updated: January 2026
          </p>
        </div>

        <Card className="prose prose-navy dark:prose-invert max-w-none">
          <h2 className="font-serif text-xl font-bold text-navy dark:text-white">
            Acceptance of Terms
          </h2>
          <p className="text-ink dark:text-ink-200">
            By registering for Maharashtra Olympiad Foundation (MOF) Olympiads or
            using our website and services, you agree to be bound by these Terms
            and Conditions. If you do not agree with any part of these terms,
            please do not use our services.
          </p>

          <h2 className="font-serif text-xl font-bold text-navy dark:text-white mt-8">
            Eligibility
          </h2>
          <p className="text-ink dark:text-ink-200">
            Participation in MOF Olympiads is open to students from Class 1 to 12
            enrolled in recognized schools in Maharashtra. Schools must register
            with MOF and meet the prescribed criteria before their students can
            participate.
          </p>

          <h2 className="font-serif text-xl font-bold text-navy dark:text-white mt-8">
            Registration and Fees
          </h2>
          <ul className="text-ink dark:text-ink-200 space-y-2">
            <li>Registration must be completed through schools; individual registrations are not accepted.</li>
            <li>Registration fees once paid are non-refundable except in cases where MOF cancels an Olympiad.</li>
            <li>Schools are responsible for collecting and remitting fees as per MOF guidelines.</li>
            <li>Late registrations may be accepted at MOF's discretion with additional fees.</li>
          </ul>

          <h2 className="font-serif text-xl font-bold text-navy dark:text-white mt-8">
            Conduct of Examination
          </h2>
          <ul className="text-ink dark:text-ink-200 space-y-2">
            <li>Examinations will be conducted at participating schools under MOF supervision.</li>
            <li>Schools must provide adequate facilities and staff support for smooth conduct of examinations.</li>
            <li>Any malpractice or unfair means will result in disqualification and may lead to school debarment.</li>
            <li>MOF reserves the right to reschedule examinations due to unavoidable circumstances.</li>
          </ul>

          <h2 className="font-serif text-xl font-bold text-navy dark:text-white mt-8">
            Results and Certificates
          </h2>
          <ul className="text-ink dark:text-ink-200 space-y-2">
            <li>Results declared by MOF are final and binding.</li>
            <li>Re-evaluation requests must be submitted within the prescribed timeline with applicable fees.</li>
            <li>Digital certificates are official documents and can be verified online.</li>
            <li>Physical certificates, if issued, remain property of MOF and must not be altered or tampered with.</li>
          </ul>

          <h2 className="font-serif text-xl font-bold text-navy dark:text-white mt-8">
            Intellectual Property
          </h2>
          <p className="text-ink dark:text-ink-200">
            All content including question papers, study materials, logos, and
            website content is the intellectual property of MOF. Unauthorized
            reproduction, distribution, or use is strictly prohibited and may
            result in legal action.
          </p>

          <h2 className="font-serif text-xl font-bold text-navy dark:text-white mt-8">
            Limitation of Liability
          </h2>
          <p className="text-ink dark:text-ink-200">
            MOF shall not be liable for any indirect, incidental, or consequential
            damages arising from participation in Olympiads or use of our services.
            Our liability is limited to the registration fees paid.
          </p>

          <h2 className="font-serif text-xl font-bold text-navy dark:text-white mt-8">
            Modifications to Terms
          </h2>
          <p className="text-ink dark:text-ink-200">
            MOF reserves the right to modify these Terms and Conditions at any time.
            Changes will be communicated through our website. Continued use of our
            services after changes constitutes acceptance of the modified terms.
          </p>

          <h2 className="font-serif text-xl font-bold text-navy dark:text-white mt-8">
            Governing Law
          </h2>
          <p className="text-ink dark:text-ink-200">
            These Terms and Conditions are governed by the laws of India. Any
            disputes shall be subject to the exclusive jurisdiction of courts in
            Mumbai, Maharashtra.
          </p>

          <h2 className="font-serif text-xl font-bold text-navy dark:text-white mt-8">
            Contact
          </h2>
          <p className="text-ink dark:text-ink-200">
            For any queries regarding these Terms and Conditions, please contact
            us at legal@mof.org.in.
          </p>
        </Card>
      </Container>
    </Section>
  );
}

import { useState } from 'react';
import { Mail, Phone, MapPin, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { Container, Section, Button, Input, Textarea, Card, Spinner } from '../components/ui';
import { siteConfig } from '../data/siteData';

const subjects = [
  'School Registration',
  'Certificate Verification',
  'Results Query',
  'Technical Support',
  'Partnership Inquiry',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      } else {
        setError('Failed to send message. Please try again.');
      }
    } catch {
      setSuccess(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Section className="pt-12">
      <Container size="lg">
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy dark:text-white mb-3">
            Contact Us
          </h1>
          <div className="gold-divider mb-4" />
          <p className="text-ink dark:text-ink-200 max-w-lg mx-auto">
            Have questions? We're here to help. Reach out to us through any of the
            channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card>
            <h2 className="font-serif text-xl font-bold text-navy dark:text-white mb-6">
              Send us a Message
            </h2>

            {success ? (
              <div className="text-center py-8">
                <CheckCircle className="w-12 h-12 mx-auto text-green-500 mb-4" />
                <h3 className="font-serif text-lg font-semibold text-navy dark:text-white mb-2">
                  Message Sent
                </h3>
                <p className="text-ink dark:text-ink-200 mb-4">
                  Thank you for contacting us. We will respond within 2-3 business days.
                </p>
                <Button variant="outline" onClick={() => setSuccess(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  required
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Email *"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    required
                  />
                  <Input
                    label="Phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                  />
                </div>
                <div>
                  <label className="block font-sans text-sm font-medium text-ink dark:text-ink-200 mb-1.5">
                    Subject *
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {subjects.map((subject) => (
                      <button
                        key={subject}
                        type="button"
                        onClick={() => setFormData({ ...formData, subject })}
                        className={`px-3 py-1.5 text-sm rounded transition-colors ${
                          formData.subject === subject
                            ? 'bg-navy text-white'
                            : 'bg-ink-100 dark:bg-navy-700 text-ink dark:text-white hover:bg-ink-200 dark:hover:bg-navy-600'
                        }`}
                      >
                        {subject}
                      </button>
                    ))}
                  </div>
                </div>
                <Textarea
                  label="Message *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your query in detail..."
                  rows={5}
                  required
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? <Spinner size="sm" className="text-white" /> : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            )}
          </Card>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <h2 className="font-serif text-xl font-bold text-navy dark:text-white mb-6">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy/10 dark:bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-navy dark:text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy dark:text-white">Address</h3>
                    <p className="text-ink dark:text-ink-200 text-sm">
                      {siteConfig.address.line1}, {siteConfig.address.line2}<br />
                      {siteConfig.address.city}, {siteConfig.address.state} - {siteConfig.address.pincode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy/10 dark:bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-navy dark:text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy dark:text-white">Email</h3>
                    <a href={`mailto:${siteConfig.email}`} className="text-ink dark:text-ink-200 text-sm hover:text-gold">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy/10 dark:bg-gold/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-navy dark:text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy dark:text-white">Phone</h3>
                    <a href={`tel:${siteConfig.phone}`} className="text-ink dark:text-ink-200 text-sm hover:text-gold">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-medium text-navy dark:text-white">WhatsApp</h3>
                    <a href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-ink dark:text-ink-200 text-sm hover:text-gold">
                      {siteConfig.whatsapp}
                    </a>
                  </div>
                </div>
              </div>
            </Card>

            {/* Map */}
            <Card padding="none">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8!2d72.85!3d19.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzAwLjAiTiA3MsKwNTEnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MOF Office Location"
              />
            </Card>

            {/* Office Hours */}
            <Card>
              <h3 className="font-serif font-semibold text-navy dark:text-white mb-3">
                Office Hours
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-ink dark:text-ink-200">Monday - Friday</span>
                  <span className="text-navy dark:text-white font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink dark:text-ink-200">Saturday</span>
                  <span className="text-navy dark:text-white font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-ink dark:text-ink-200">Sunday</span>
                  <span className="text-ink-400">Closed</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  );
}

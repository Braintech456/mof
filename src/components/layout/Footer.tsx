import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  Send,
} from 'lucide-react';
import { siteConfig, navigation, olympiads } from '../../data/siteData';
import { Container } from '../ui';
import { useState } from 'react';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'School Registration', path: '/register' },
  { name: 'Results', path: '/results' },
  { name: 'Certificate Verification', path: '/verify' },
  { name: 'Contact Us', path: '/contact' },
];

const resourceLinks = [
  { name: 'Sample Papers', path: '/resources' },
  { name: 'Syllabus', path: '/resources' },
  { name: 'FAQs', path: '/faq' },
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms & Conditions', path: '/terms' },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-navy text-white">
      {/* Main Footer */}
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center">
                <span className="text-navy font-serif font-bold text-xl">MOF</span>
              </div>
            </div>
            <h3 className="font-serif font-bold text-lg mb-2">
              {siteConfig.name}
            </h3>
            <p className="text-white/70 text-sm mb-4">{siteConfig.tagline}</p>
            <p className="text-white/60 text-xs">{siteConfig.marathiName}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/70 text-sm hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Olympiads */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-4">
              Olympiads
            </h4>
            <ul className="space-y-2">
              {olympiads.map((olympiad) => (
                <li key={olympiad.id}>
                  <Link
                    to={`/olympiads/${olympiad.id}`}
                    className="text-white/70 text-sm hover:text-gold transition-colors"
                  >
                    {olympiad.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-4">
              Contact
            </h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  {siteConfig.address.line1}, {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state} -{' '}
                  {siteConfig.address.pincode}
                </span>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-sm text-white/70 hover:text-gold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <h4 className="font-serif font-semibold text-sm mb-2">
              Subscribe to Updates
            </h4>
            {subscribed ? (
              <p className="text-sm text-gold">
                Thank you for subscribing!
              </p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-navy-700 border border-navy-600 rounded text-sm text-white placeholder:text-white/50 focus:outline-none focus:border-gold"
                  required
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-gold text-navy rounded hover:bg-gold-400 transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <Container className="py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} {siteConfig.name}. All rights
              reserved.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Facebook, href: siteConfig.social.facebook },
                { icon: Twitter, href: siteConfig.social.twitter },
                { icon: Instagram, href: siteConfig.social.instagram },
                { icon: Linkedin, href: siteConfig.social.linkedin },
                { icon: Youtube, href: siteConfig.social.youtube },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-gold transition-colors"
                  aria-label={social.icon.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}

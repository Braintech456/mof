import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Mail, Phone } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { siteConfig, navigation, utilityLinks } from '../../data/siteData';
import { Button, Container } from '../ui';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Utility Bar */}
      <div className="hidden md:block bg-navy text-white py-2 text-sm">
        <Container>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4" />
                {siteConfig.email}
              </a>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4" />
                {siteConfig.phone}
              </a>
            </div>
            <div className="flex items-center gap-6">
              {utilityLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="hover:text-gold transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-1.5 hover:text-gold transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 z-50 bg-white dark:bg-navy-800 transition-all duration-200 ${
          isScrolled ? 'shadow-md' : ''
        }`}
      >
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo & Name */}
            <Link to="/" className="flex items-center gap-3">
              <img
  src="https://i.ibb.co/R4372zFx/Chat-GPT-Image-Jun-27-2026-07-47-04-PM-1.png"
  alt="Maharashtra Olympiad Foundation"
  className="h-14 md:h-16 w-auto object-contain"
/>
              <div className="hidden sm:block">
                <h1 className="font-serif font-bold text-navy dark:text-white text-sm md:text-base leading-tight">
                  {siteConfig.name}
                </h1>
                <p className="text-xs text-ink-500 dark:text-ink-300">
                  {siteConfig.tagline}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {navigation.slice(0, 7).map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-sans text-sm font-medium transition-colors duration-200 relative py-2 ${
                    location.pathname === item.path
                      ? 'text-navy dark:text-white'
                      : 'text-ink dark:text-ink-200 hover:text-navy dark:hover:text-white'
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="primary" size="sm" asChild>
                <Link to="/register">Register Your School</Link>
              </Button>
              <Button variant="secondary" size="sm" asChild>
                <Link to="/verify">Verify Certificate</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleTheme}
                className="p-2 text-ink dark:text-white hover:text-navy dark:hover:text-gold"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-ink dark:text-white"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-navy-800 border-t border-ink-100 dark:border-navy-700">
            <Container>
              <nav className="py-4 space-y-1">
                {[...navigation, ...utilityLinks].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block px-4 py-3 font-sans text-sm font-medium rounded transition-colors ${
                      location.pathname === item.path
                        ? 'bg-navy/5 dark:bg-white/5 text-navy dark:text-white'
                        : 'text-ink dark:text-ink-200 hover:bg-ink-50 dark:hover:bg-navy-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 space-y-2 px-4">
                  <Button variant="primary" className="w-full" asChild>
                    <Link to="/register">Register Your School</Link>
                  </Button>
                  <Button variant="secondary" className="w-full" asChild>
                    <Link to="/verify">Verify Certificate</Link>
                  </Button>
                </div>
              </nav>
            </Container>
          </div>
        )}
      </header>
    </>
  );
}

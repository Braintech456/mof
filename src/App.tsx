import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/layout';
import {
  HomePage,
  AboutPage,
  OlympiadsPage,
  TalentContestsPage,
  ResourcesPage,
  ImportantDatesPage,
  SchoolRegistrationPage,
  ResultsPage,
  CertificateVerificationPage,
  ContactPage,
  FAQPage,
  PrivacyPolicyPage,
  TermsPage,
} from './pages';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/olympiads" element={<OlympiadsPage />} />
            <Route path="/olympiads/:olympiadId" element={<OlympiadsPage />} />
            <Route path="/talent-contests" element={<TalentContestsPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/dates" element={<ImportantDatesPage />} />
            <Route path="/register" element={<SchoolRegistrationPage />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="/verify" element={<CertificateVerificationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/terms" element={<TermsPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Shield, CheckCircle, XCircle, QrCode, AlertCircle } from 'lucide-react';
import { Container, Section, Button, Input, Card, Spinner } from '../components/ui';

const SHEET_URL =
  "https://docs.google.com/spreadsheets/d/15oTunoBKQZnTGTI8i-z8X5FXne3KGVQomM0zkJt8uAk/gviz/tq?tqx=out:json";

let certificateCache: CertificateData[] = [];

interface CertificateData {
  id: string;
  student_name: string;
  school_name: string;
  olympiad_name: string;
  class: string;
  district: string;
  score: number;
  rank: string;
  issue_date: string;
  qr_verified: boolean;
}

function normalizeId(id: string) {
  return id
    .replace(/\s+/g, "")
    .replace(/-/g, "")
    .toUpperCase();
}

async function loadCertificates(): Promise<CertificateData[]> {
  if (certificateCache.length > 0) {
    return certificateCache;
  }

  const response = await fetch(SHEET_URL);
  const text = await response.text();

  const json = JSON.parse(text.substring(47).slice(0, -2));

  const rows = json.table.rows;

  certificateCache = rows.map((row: any) => ({
    id: row.c[0]?.v ?? "",
    student_name: row.c[1]?.v ?? "",
    school_name: row.c[2]?.v ?? "",
    olympiad_name: row.c[3]?.v ?? "",
    class: row.c[4]?.v ?? "",
    district: row.c[5]?.v ?? "",
    score: Number(row.c[6]?.v ?? 0),
    rank: String(row.c[7]?.v ?? ""),
    issue_date: row.c[8]?.v ?? "",
    qr_verified: true,
  }));

  return certificateCache;
}

async function findCertificate(id: string) {
  const certificates = await loadCertificates();

  return certificates.find(
    (certificate) =>
      normalizeId(certificate.id) === normalizeId(id)
  );
}

export default function CertificateVerificationPage() {
  const [searchParams] = useSearchParams();
  const [certificateId, setCertificateId] = useState(
    searchParams.get('id') || ''
  );
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<'valid' | 'invalid' | null>(null);
  const [certificate, setCertificate] = useState<CertificateData | null>(null);

  const handleVerify = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!certificateId.trim()) return;

  setLoading(true);
  setResult(null);
  setCertificate(null);

  try {
    const certificate = await findCertificate(certificateId);

    if (certificate) {
      setCertificate(certificate);
      setResult('valid');
    } else {
      setResult('invalid');
    }
  } catch (error) {
    console.error(error);
    setResult('invalid');
  } finally {
    setLoading(false);
  }
};

  // Auto-verify if ID is in URL
  useEffect(() => {
    const id = searchParams.get('id');
    if (id && id.trim()) {
      const verifyAuto = async () => {
        setCertificateId(id);
        setLoading(true);
        try {
          const { data, error } = await supabase
            .from('certificates')
            .select('*')
            .eq('id', id.trim().toUpperCase())
            .single();

          if (data && !error) {
            setResult('valid');
            setCertificate({
              id: data.id,
              student_name: data.student_name,
              school_name: data.school_name,
              olympiad_name: data.olympiad_name,
              class: data.class,
              district: data.district,
              score: data.score,
              rank: data.rank,
              issue_date: data.issue_date,
              qr_verified: true,
            });
          } else {
            setResult('invalid');
          }
        } catch {
          setResult('invalid');
        } finally {
          setLoading(false);
        }
      };
      verifyAuto();
    }
  }, [searchParams]);

  return (
    <Section className="pt-12">
      <Container size="md">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-navy dark:bg-gold flex items-center justify-center">
            <Shield className="w-10 h-10 text-gold dark:text-navy" />
          </div>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-navy dark:text-white mb-3">
            Certificate Verification
          </h1>
          <div className="gold-divider mb-4" />
          <p className="text-ink dark:text-ink-200 max-w-lg mx-auto">
            Enter the Certificate ID to verify the authenticity of any MOF
            certificate. All certificates issued by MOF are uniquely numbered
            and can be verified online.
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleVerify} className="max-w-lg mx-auto mb-10">
          <div className="flex gap-3">
            <Input
              value={certificateId}
              onChange={(e) => setCertificateId(e.target.value.toUpperCase())}
              placeholder="Enter Certificate ID (e.g., MOF-2026-001234)"
              className="flex-1"
            />
            <Button type="submit" disabled={loading || !certificateId.trim()}>
              {loading ? <Spinner size="sm" className="text-white" /> : 'Verify'}
            </Button>
          </div>
        </form>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <Spinner size="lg" className="mx-auto text-navy dark:text-white" />
            <p className="mt-4 text-ink dark:text-ink-200">Verifying certificate...</p>
          </div>
        )}

        {/* Valid Certificate */}
        {result === 'valid' && certificate && !loading && (
          <div className="max-w-2xl mx-auto">
            {/* Status Badge */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span className="font-medium">Certificate Verified</span>
              </div>
            </div>

            {/* Certificate Card - Official Style */}
            <div className="relative bg-white dark:bg-navy-800 border-2 border-navy dark:border-gold rounded-lg p-8 overflow-hidden">
              {/* Decorative border */}
              <div className="absolute inset-4 border border-gold/30 rounded pointer-events-none" />

              {/* Watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-5">
                <Shield className="w-64 h-64 text-navy dark:text-gold" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-6 pb-6 border-b border-navy/10 dark:border-white/10">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-navy dark:bg-gold flex items-center justify-center">
                    <span className="text-gold dark:text-navy font-serif font-bold text-xl">
                      MOF
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl font-bold text-navy dark:text-white">
                    Maharashtra Olympiad Foundation
                  </h2>
                  <p className="text-ink-400 dark:text-ink-300 text-sm mt-1">
                    Official Certificate of Participation
                  </p>
                </div>

                {/* Certificate Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-xs text-ink-400 dark:text-ink-400 uppercase tracking-wide">
                      Student Name
                    </p>
                    <p className="font-serif font-semibold text-navy dark:text-white">
                      {certificate.student_name}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-ink-400 dark:text-ink-400 uppercase tracking-wide">
                      School
                    </p>
                    <p className="font-serif font-semibold text-navy dark:text-white">
                      {certificate.school_name}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-ink-400 dark:text-ink-400 uppercase tracking-wide">
                      Olympiad
                    </p>
                    <p className="font-serif font-semibold text-navy dark:text-white">
                      {certificate.olympiad_name}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-ink-400 dark:text-ink-400 uppercase tracking-wide">
                      Class
                    </p>
                    <p className="font-serif font-semibold text-navy dark:text-white">
                      {certificate.class}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-ink-400 dark:text-ink-400 uppercase tracking-wide">
                      District
                    </p>
                    <p className="font-serif font-semibold text-navy dark:text-white">
                      {certificate.district}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-ink-400 dark:text-ink-400 uppercase tracking-wide">
                      Score
                    </p>
                    <p className="font-serif font-semibold text-navy dark:text-white">
                      {certificate.score} / 50
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-ink-400 dark:text-ink-400 uppercase tracking-wide">
                      State Rank
                    </p>
                    <p className="font-serif font-semibold text-gold text-lg">
                      {certificate.rank}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-ink-400 dark:text-ink-400 uppercase tracking-wide">
                      Issue Date
                    </p>
                    <p className="font-serif font-semibold text-navy dark:text-white">
                      {new Date(certificate.issue_date).toLocaleDateString('en-IN', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                </div>

                {/* Certificate ID */}
                <div className="text-center pt-6 border-t border-navy/10 dark:border-white/10">
                  <p className="text-xs text-ink-400 dark:text-ink-400 uppercase tracking-wide mb-1">
                    Certificate ID
                  </p>
                  <p className="font-mono text-sm text-navy dark:text-white font-medium">
                    {certificate.id}
                  </p>
                </div>

                {/* QR Verification */}
                <div className="flex items-center justify-center gap-3 mt-6 pt-6 border-t border-navy/10 dark:border-white/10">
                  <QrCode className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-sm text-green-700 dark:text-green-400 font-medium">
                    QR Verified • Certificate is Authentic
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Invalid Certificate */}
        {result === 'invalid' && !loading && (
          <div className="max-w-lg mx-auto text-center">
            <Card className="p-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="font-serif font-bold text-xl text-navy dark:text-white mb-2">
                Certificate Not Found
              </h3>
              <p className="text-ink dark:text-ink-200 text-sm mb-4">
                No certificate was found with the ID "{certificateId}". Please
                verify the ID format and try again.
              </p>
              <div className="bg-ink-50 dark:bg-navy-700 p-4 rounded text-left text-sm">
                <p className="font-medium text-navy dark:text-white mb-2">
                  Please check:
                </p>
                <ul className="space-y-1 text-ink dark:text-ink-200">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 text-ink-400" />
                    <span>The certificate ID should follow the format MOF-YYYY-XXXXXX</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 text-ink-400" />
                    <span>Ensure there are no extra spaces or characters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 mt-0.5 text-ink-400" />
                    <span>If the problem persists, contact support</span>
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        )}

        {/* Help section */}
        <div className="mt-12 text-center">
          <p className="text-ink dark:text-ink-200 text-sm">
            Certificate ID can be found at the bottom of your certificate or in the
            QR code.
          </p>
        </div>
      </Container>
    </Section>
  );
}

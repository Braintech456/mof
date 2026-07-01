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
    searchParams.get("id") || ""
  );

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState<"valid" | "invalid" | null>(null);

  const [certificate, setCertificate] =
    useState<CertificateData | null>(null);

  const handleVerify = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (!certificateId.trim()) return;

    setLoading(true);
    setResult(null);
    setCertificate(null);

    try {
      const foundCertificate = await findCertificate(certificateId);

      if (foundCertificate) {
        setCertificate(foundCertificate);
        setResult("valid");
      } else {
        setResult("invalid");
      }
    } catch (err) {
      console.error(err);
      setResult("invalid");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (certificateId.trim()) {
      handleVerify();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            Enter your Certificate ID to verify the authenticity of your
            Maharashtra Olympiad Foundation certificate.
          </p>
        </div>

        {/* Search Form */}

        <form
          onSubmit={handleVerify}
          className="max-w-lg mx-auto mb-10"
        >
          <div className="flex gap-3">

            <Input
              value={certificateId}
              onChange={(e) =>
                setCertificateId(e.target.value.toUpperCase())
              }
              placeholder="MOF-2026-000001"
              className="flex-1"
            />

            <Button
              type="submit"
              disabled={loading || !certificateId.trim()}
            >
              {loading ? (
                <Spinner
                  size="sm"
                  className="text-white"
                />
              ) : (
                "Verify"
              )}
            </Button>

          </div>
        </form>

        {/* Loading */}

        {loading && (
          <div className="text-center py-12">

            <Spinner
              size="lg"
              className="mx-auto text-navy dark:text-white"
            />

            <p className="mt-4 text-ink dark:text-ink-200">
              Verifying certificate...
            </p>

          </div>
        )}

                {/* Valid Certificate */}

        {result === "valid" && certificate && !loading && (

          <div className="max-w-2xl mx-auto">

            <div className="text-center mb-6">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">

                <CheckCircle className="w-5 h-5" />

                <span className="font-medium">
                  Certificate Verified
                </span>

              </div>

            </div>

            <Card className="p-8 border-2 border-green-500">

              <div className="text-center mb-8">

                <Shield className="w-16 h-16 mx-auto text-green-600 mb-3" />

                <h2 className="font-serif text-3xl font-bold text-navy dark:text-white">
                  Maharashtra Olympiad Foundation
                </h2>

                <p className="text-green-600 font-semibold mt-2">
                  Authentic Certificate
                </p>

              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                <div>
                  <p className="text-sm text-gray-500">
                    Certificate ID
                  </p>

                  <p className="font-semibold text-lg">
                    {certificate.id}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Student Name
                  </p>

                  <p className="font-semibold text-lg">
                    {certificate.student_name}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    School
                  </p>

                  <p className="font-semibold">
                    {certificate.school_name}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Olympiad
                  </p>

                  <p className="font-semibold">
                    {certificate.olympiad_name}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Class
                  </p>

                  <p className="font-semibold">
                    {certificate.class}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    District
                  </p>

                  <p className="font-semibold">
                    {certificate.district}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Score
                  </p>

                  <p className="font-semibold">
                    {certificate.score}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Rank
                  </p>

                  <p className="font-semibold text-gold">
                    {certificate.rank}
                  </p>
                </div>

                <div className="md:col-span-2">

                  <p className="text-sm text-gray-500">
                    Issue Date
                  </p>

                  <p className="font-semibold">
                    {new Date(certificate.issue_date).toLocaleDateString(
                      "en-IN"
                    )}
                  </p>

                </div>

              </div>

              <div className="mt-8 flex items-center justify-center gap-3 text-green-600">

                <QrCode className="w-6 h-6" />

                <span className="font-semibold">
                  QR Verified • Authentic Certificate
                </span>

              </div>

            </Card>

          </div>

        )}

                {/* Invalid Certificate */}

        {result === "invalid" && !loading && (

          <div className="max-w-lg mx-auto">

            <Card className="p-8 text-center">

              <div className="w-16 h-16 mx-auto rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center mb-4">

                <XCircle className="w-8 h-8 text-red-600 dark:text-red-400" />

              </div>

              <h2 className="font-serif text-2xl font-bold text-navy dark:text-white mb-3">
                Certificate Not Found
              </h2>

              <p className="text-ink dark:text-ink-200 mb-6">
                No certificate was found for
              </p>

              <div className="font-mono text-lg bg-ink-100 dark:bg-navy-700 rounded-lg p-3 mb-6">
                {certificateId}
              </div>

              <div className="text-left bg-ink-50 dark:bg-navy-700 rounded-lg p-5">

                <h3 className="font-semibold mb-3 flex items-center gap-2">

                  <AlertCircle className="w-5 h-5" />

                  Please check

                </h3>

                <ul className="space-y-2 text-sm">

                  <li>• Certificate ID is correct</li>

                  <li>• No extra spaces</li>

                  <li>• Certificate has been issued by MOF</li>

                  <li>• Contact support if the problem continues</li>

                </ul>

              </div>

            </Card>

          </div>

        )}

                {/* Help */}

        <div className="mt-12 text-center">

          <p className="text-sm text-ink dark:text-ink-200">
            Certificate ID is available at the bottom of every official
            Maharashtra Olympiad Foundation certificate.
          </p>

        </div>

      </Container>
    </Section>
  );
}

  
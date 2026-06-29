import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Shield, ExternalLink } from 'lucide-react';
import { Container, Button, Input } from '../ui';

export default function CertificateVerificationCard() {
  const [certificateId, setCertificateId] = useState('');

  return (
    <Container size="md">
      <div className="bg-navy p-8 md:p-12 rounded-lg text-center relative overflow-hidden">
        {/* Decorative seal */}
        <div className="absolute top-4 right-4 w-20 h-20 opacity-10">
          <Shield className="w-full h-full text-gold" />
        </div>

        <div className="relative z-10">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-gold flex items-center justify-center">
            <Shield className="w-8 h-8 text-gold" />
          </div>

          <h3 className="font-serif text-2xl font-bold text-white mb-3">
            Certificate Verification
          </h3>
          <p className="text-white/70 mb-6 max-w-md mx-auto">
            Verify the authenticity of any MOF certificate. Enter the unique
            Certificate ID below.
          </p>

          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input
                type="text"
                value={certificateId}
                onChange={(e) => setCertificateId(e.target.value)}
                placeholder="Enter Certificate ID"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder:text-white/40 focus:outline-none focus:border-gold"
              />
              <Button
                variant="secondary"
                asChild
                className="bg-gold text-navy border-gold hover:bg-gold-400"
              >
                <Link to={`/verify?id=${certificateId}`}>
                  Verify
                </Link>
              </Button>
            </div>
          </div>

          <Link
            to="/verify"
            className="inline-flex items-center gap-1.5 text-gold text-sm mt-4 hover:underline"
          >
            Go to full verification page <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </Container>
  );
}

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
/*
# MOF Initial Database Schema

This migration creates the core tables for the Maharashtra Olympiad Foundation website.

1. New Tables
- `certificates`: Stores certificate data for verification
  - `id` (text, primary key): Unique certificate ID (e.g., MOF-2026-001234)
  - `student_name` (text): Full name of the student
  - `school_name` (text): Name of the participating school
  - `olympiad_name` (text): Name of the Olympiad (e.g., Mathematics Olympiad)
  - `class` (text): Class/grade of the student
  - `district` (text): District in Maharashtra
  - `score` (integer): Score obtained out of 50
  - `rank` (text): State rank (e.g., "12", "45")
  - `issue_date` (date): Certificate issue date
  - `created_at` (timestamp): Record creation time

- `results`: Stores Olympiad results for student lookup
  - `id` (text, primary key): Roll number/registration ID
  - `student_name` (text): Full name of the student
  - `school_name` (text): Name of the participating school
  - `olympiad_id` (text): Olympiad identifier (e.g., 'math', 'science')
  - `olympiad_name` (text): Full name of the Olympiad
  - `class` (text): Class/grade of the student
  - `district` (text): District in Maharashtra
  - `score` (integer): Score obtained
  - `rank` (text): State rank
  - `certificate_id` (text): Reference to certificate
  - `issue_date` (date): Result declaration date
  - `created_at` (timestamp): Record creation time

- `school_registrations`: Stores school registration applications
  - `id` (serial, primary key): Auto-incrementing ID
  - `school_name` (text): Name of the school
  - `principal_name` (text): Name of the principal
  - `board` (text): School board (ssc, cbse, icse, etc.)
  - `udise_code` (text, nullable): 11-digit UDISE code
  - `address` (text): School address
  - `district` (text): District in Maharashtra
  - `email` (text): Contact email
  - `phone` (text): Contact phone number
  - `coordinator_name` (text, nullable): Olympiad coordinator name
  - `coordinator_phone` (text, nullable): Coordinator phone
  - `expected_students` (integer): Expected number of participants
  - `olympiads` (text array): Array of selected Olympiad IDs
  - `comments` (text, nullable): Additional comments
  - `status` (text): Application status (pending/approved/rejected)
  - `created_at` (timestamp): Registration submission time

2. Security
- Enable RLS on all tables.
- Allow public read access for certificates and results (verification is a public feature).
- Allow public insert for school_registrations (registration form is public).
- Restrict update/delete to service role only (admin operations).

3. Indexes
- Index on certificates.id for fast lookup
- Index on results.id and results.certificate_id for search
- Index on school_registrations.email and school_registrations.created_at
*/

-- Certificates table
CREATE TABLE IF NOT EXISTS certificates (
  id text PRIMARY KEY,
  student_name text NOT NULL,
  school_name text NOT NULL,
  olympiad_name text NOT NULL,
  class text NOT NULL,
  district text NOT NULL,
  score integer NOT NULL,
  rank text NOT NULL,
  issue_date date NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Results table
CREATE TABLE IF NOT EXISTS results (
  id text PRIMARY KEY,
  student_name text NOT NULL,
  school_name text NOT NULL,
  olympiad_id text NOT NULL,
  olympiad_name text NOT NULL,
  class text NOT NULL,
  district text NOT NULL,
  score integer NOT NULL,
  rank text NOT NULL,
  certificate_id text NOT NULL,
  issue_date date NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- School registrations table
CREATE TABLE IF NOT EXISTS school_registrations (
  id serial PRIMARY KEY,
  school_name text NOT NULL,
  principal_name text NOT NULL,
  board text NOT NULL,
  udise_code text,
  address text NOT NULL DEFAULT '',
  district text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  coordinator_name text,
  coordinator_phone text,
  expected_students integer NOT NULL,
  olympiads text[] NOT NULL,
  comments text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;
ALTER TABLE results ENABLE ROW LEVEL SECURITY;
ALTER TABLE school_registrations ENABLE ROW LEVEL SECURITY;

-- Certificates policies (public read for verification)
DROP POLICY IF EXISTS "public_read_certificates" ON certificates;
CREATE POLICY "public_read_certificates" ON certificates FOR SELECT
  TO anon, authenticated USING (true);

-- Results policies (public read for result lookup)
DROP POLICY IF EXISTS "public_read_results" ON results;
CREATE POLICY "public_read_results" ON results FOR SELECT
  TO anon, authenticated USING (true);

-- School registrations policies (public insert, no public read/update/delete)
DROP POLICY IF EXISTS "public_insert_registrations" ON school_registrations;
CREATE POLICY "public_insert_registrations" ON school_registrations FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_certificates_id ON certificates(id);
CREATE INDEX IF NOT EXISTS idx_results_id ON results(id);
CREATE INDEX IF NOT EXISTS idx_results_certificate_id ON results(certificate_id);
CREATE INDEX IF NOT EXISTS idx_results_olympiad_id ON results(olympiad_id);
CREATE INDEX IF NOT EXISTS idx_registrations_email ON school_registrations(email);
CREATE INDEX IF NOT EXISTS idx_registrations_created_at ON school_registrations(created_at DESC);

-- Insert sample data for demonstration
INSERT INTO certificates (id, student_name, school_name, olympiad_name, class, district, score, rank, issue_date)
VALUES
  ('MOF-2026-000001', 'Aarav Sharma', 'Delhi Public School, Pune', 'Mathematics Olympiad', '8', 'Pune', 48, '1', '2026-01-15'),
  ('MOF-2026-000002', 'Priya Patil', 'St. Xavier High School, Mumbai', 'Science Olympiad', '10', 'Mumbai Suburban', 46, '3', '2026-01-15'),
  ('MOF-2026-000003', 'Rahul Deshmukh', 'Kendriya Vidyalaya, Nagpur', 'English Olympiad', '6', 'Nagpur', 44, '8', '2026-01-15'),
  ('MOF-2026-000004', 'Ananya Joshi', 'Don Bosco School, Aurangabad', 'General Knowledge Olympiad', '7', 'Aurangabad', 42, '15', '2026-01-15'),
  ('MOF-2026-000005', 'Vikram Singh', 'Army Public School, Nashik', 'Computer Olympiad', '9', 'Nashik', 45, '5', '2026-01-15')
ON CONFLICT (id) DO NOTHING;

INSERT INTO results (id, student_name, school_name, olympiad_id, olympiad_name, class, district, score, rank, certificate_id, issue_date)
VALUES
  ('MOF-ROL-2026-001001', 'Aarav Sharma', 'Delhi Public School, Pune', 'math', 'Mathematics Olympiad', '8', 'Pune', 48, '1', 'MOF-2026-000001', '2026-01-15'),
  ('MOF-ROL-2026-001002', 'Priya Patil', 'St. Xavier High School, Mumbai', 'science', 'Science Olympiad', '10', 'Mumbai Suburban', 46, '3', 'MOF-2026-000002', '2026-01-15'),
  ('MOF-ROL-2026-001003', 'Rahul Deshmukh', 'Kendriya Vidyalaya, Nagpur', 'english', 'English Olympiad', '6', 'Nagpur', 44, '8', 'MOF-2026-000003', '2026-01-15'),
  ('MOF-ROL-2026-001004', 'Ananya Joshi', 'Don Bosco School, Aurangabad', 'gk', 'General Knowledge Olympiad', '7', 'Aurangabad', 42, '15', 'MOF-2026-000004', '2026-01-15'),
  ('MOF-ROL-2026-001005', 'Vikram Singh', 'Army Public School, Nashik', 'computer', 'Computer Olympiad', '9', 'Nashik', 45, '5', 'MOF-2026-000005', '2026-01-15')
ON CONFLICT (id) DO NOTHING;
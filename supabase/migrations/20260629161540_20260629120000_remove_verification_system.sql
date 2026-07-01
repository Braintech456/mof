/*
# Remove Verification System Tables

This migration drops all tables related to the certificate verification,
results lookup, and school registration systems.

Tables removed:
- certificates
- results
- school_registrations
*/

-- Drop policies first
DROP POLICY IF EXISTS "public_read_certificates" ON certificates;
DROP POLICY IF EXISTS "public_read_results" ON results;
DROP POLICY IF EXISTS "public_insert_registrations" ON school_registrations;

-- Drop indexes
DROP INDEX IF EXISTS idx_certificates_id;
DROP INDEX IF EXISTS idx_results_id;
DROP INDEX IF EXISTS idx_results_certificate_id;
DROP INDEX IF EXISTS idx_results_olympiad_id;
DROP INDEX IF EXISTS idx_registrations_email;
DROP INDEX IF EXISTS idx_registrations_created_at;

-- Drop tables
DROP TABLE IF EXISTS certificates CASCADE;
DROP TABLE IF EXISTS results CASCADE;
DROP TABLE IF EXISTS school_registrations CASCADE;
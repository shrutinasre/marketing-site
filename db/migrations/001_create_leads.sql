-- Run this against your Postgres database before leads can be persisted.
-- Example: psql "$DATABASE_URL" -f db/migrations/001_create_leads.sql

CREATE TABLE IF NOT EXISTS leads (
  id                  UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name                TEXT NOT NULL,
  company             TEXT NOT NULL,
  email               TEXT NOT NULL,
  phone               TEXT NOT NULL,
  country             TEXT NOT NULL,
  industry            TEXT,
  employee_count      TEXT,
  business_stage      TEXT,
  services_required   TEXT[] DEFAULT '{}',
  current_challenges  TEXT,
  timeline            TEXT,
  message             TEXT,
  source              TEXT,
  created_at          TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads (email);

-- gen_random_uuid() requires the pgcrypto extension on older Postgres versions
-- (Postgres 13+ usually ships it enabled; uncomment below if the table creation fails).
-- CREATE EXTENSION IF NOT EXISTS pgcrypto;

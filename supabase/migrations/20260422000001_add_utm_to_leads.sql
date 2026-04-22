ALTER TABLE public.leads
  ADD COLUMN gclid          TEXT,
  ADD COLUMN gbraid         TEXT,
  ADD COLUMN wbraid         TEXT,
  ADD COLUMN utm_source     TEXT,
  ADD COLUMN utm_medium     TEXT,
  ADD COLUMN utm_campaign   TEXT,
  ADD COLUMN utm_term       TEXT,
  ADD COLUMN utm_content    TEXT,
  ADD COLUMN gad_campaignid TEXT,
  ADD COLUMN gad_source     TEXT,
  ADD COLUMN conversao      TEXT;

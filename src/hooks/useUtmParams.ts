const UTM_KEYS = [
  "gclid", "gbraid", "wbraid",
  "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content",
  "gad_campaignid", "gad_source", "conversao",
] as const;

export type UtmParams = Partial<Record<typeof UTM_KEYS[number], string>>;

const SESSION_KEY = "ideal_utm_params";

export function useUtmParams(): UtmParams {
  const params = new URLSearchParams(window.location.search);
  const found: UtmParams = {};

  for (const key of UTM_KEYS) {
    const val = params.get(key) ?? params.get(key === "conversao" ? "Conversão" : key);
    if (val) found[key] = val;
  }

  if (Object.keys(found).length > 0) {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(found));
    return found;
  }

  const stored = sessionStorage.getItem(SESSION_KEY);
  if (stored) {
    try { return JSON.parse(stored); } catch { /* ignore */ }
  }

  return {};
}

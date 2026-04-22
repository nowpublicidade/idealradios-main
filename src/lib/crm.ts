import { UtmParams } from "@/hooks/useUtmParams";

const CRM_URL = "https://banconexo.nowpublicidade.com.br/functions/v1/create-lead";
const CRM_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJzdXBhYmFzZSIsImlhdCI6MTc3Mzk1NTMyMCwiZXhwIjo0OTI5NjI4OTIwLCJyb2xlIjoiYW5vbiJ9.pGdJ8iRnrrlMHVxNgmdExLnmE8p7sWbNfvPOAEosLKg";

interface LeadData {
  nome: string;
  empresa: string;
  telefone: string;
  necessidade: string;
}

export async function sendToCrm(lead: LeadData, utm: UtmParams): Promise<void> {
  const body: Record<string, string> = {
    clientId: "45ab5fcd-20b7-4ee4-85fd-816b8d932a2d",
    pipelineId: "ab0e65c4-ab2f-44ef-a821-4b3b09f50640",
    pipeline_stages: "new",
    name: `${lead.nome} - ${lead.empresa}`,
    phone: lead.telefone,
    value: "1000",
    source: "google",
    campaign: utm.gad_campaignid ?? "",
    ad: utm.utm_content ?? "",
    audience: utm.utm_term ?? "",
    notes: lead.necessidade,
    meta_lead_id: utm.gclid ?? "",
  };

  await fetch(CRM_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${CRM_TOKEN}`,
      "apikey": CRM_TOKEN,
    },
    body: JSON.stringify(body),
  });
}

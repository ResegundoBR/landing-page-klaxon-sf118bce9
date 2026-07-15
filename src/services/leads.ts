import pb from '@/lib/pocketbase/client'

export interface LeadData {
  name: string
  email: string
  whatsapp: string
  project_type: string
  modalidade?: string
  investimento?: string
  source?: string
  reference_links?: string
  user_profile?: string
  project_phase?: string
  attachment?: File | null
}

export const createLead = async (data: LeadData) => {
  const formData = new FormData()

  const fields: Record<string, string> = {
    name: data.name,
    email: data.email,
    whatsapp: data.whatsapp,
    project_type: data.project_type,
    modalidade: data.modalidade ?? '',
    investimento: data.investimento ?? '',
    source: data.source ?? '',
    reference_links: data.reference_links ?? '',
    user_profile: data.user_profile ?? '',
    project_phase: data.project_phase ?? '',
    status: 'new',
  }

  for (const [key, value] of Object.entries(fields)) {
    formData.append(key, value)
  }

  if (data.attachment) {
    formData.append('attachment', data.attachment)
  }

  return await pb.collection('leads').create(formData)
}

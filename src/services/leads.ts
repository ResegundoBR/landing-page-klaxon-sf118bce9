import pb from '@/lib/pocketbase/client'

export interface LeadData {
  name: string
  email: string
  whatsapp: string
  project_type: string
  source?: string
  reference_links?: string
}

export const createLead = async (data: LeadData) => {
  return await pb.collection('leads').create({ ...data, status: 'new' })
}

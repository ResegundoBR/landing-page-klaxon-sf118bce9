import pb from '@/lib/pocketbase/client'

export interface Testimonial {
  id: string
  name: string
  avatar: string
  rating: number
  date_relative: string
  content: string
  photos: string[]
  created: string
  updated: string
}

export const getTestimonials = async (): Promise<Testimonial[]> => {
  return await pb.collection('testimonials').getFullList<Testimonial>({
    sort: '@random',
  })
}

export const getTestimonialImageUrl = (testimonial: Testimonial, filename: string): string => {
  return pb.files.getURL(
    { id: testimonial.id, collectionId: 'testimonials', collectionName: 'testimonials' } as any,
    filename,
  )
}

export const getAvatarUrl = (testimonial: Testimonial): string | null => {
  if (!testimonial.avatar) return null
  return getTestimonialImageUrl(testimonial, testimonial.avatar)
}

export const getPhotoUrls = (testimonial: Testimonial): string[] => {
  if (!testimonial.photos || testimonial.photos.length === 0) return []
  return testimonial.photos.map((filename) => getTestimonialImageUrl(testimonial, filename))
}

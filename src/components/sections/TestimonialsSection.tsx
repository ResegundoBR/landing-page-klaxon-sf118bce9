import { useState, useEffect, useCallback } from 'react'
import { Star, Quote } from 'lucide-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Dialog, DialogContent, DialogClose } from '@/components/ui/dialog'
import {
  getTestimonials,
  getAvatarUrl,
  getPhotoUrls,
  type Testimonial,
} from '@/services/testimonials'

const AVATAR_COLORS = [
  'bg-amber-700',
  'bg-emerald-700',
  'bg-sky-700',
  'bg-rose-700',
  'bg-violet-700',
  'bg-orange-700',
  'bg-teal-700',
]

function getInitial(name: string): string {
  return name.trim().charAt(0).toUpperCase()
}

function getAvatarColor(name: string): string {
  const hash = name.split('').reduce((acc, c) => acc + c.charCodeAt(0), 0)
  return AVATAR_COLORS[hash % AVATAR_COLORS.length]
}

function GoogleBadge() {
  return (
    <div className="flex items-center gap-2">
      <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#4285F4"
          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        />
        <path
          fill="#34A853"
          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        />
        <path
          fill="#FBBC05"
          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        />
        <path
          fill="#EA4335"
          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        />
      </svg>
      <span className="text-xs font-medium text-muted-foreground">Google Review</span>
    </div>
  )
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? 'fill-amber-400 text-amber-400' : 'fill-muted text-muted-foreground'
          }`}
        />
      ))}
    </div>
  )
}

function Avatar({ testimonial }: { testimonial: Testimonial }) {
  const avatarUrl = getAvatarUrl(testimonial)
  if (avatarUrl) {
    return (
      <img
        src={avatarUrl}
        alt={testimonial.name}
        className="w-11 h-11 rounded-full object-cover shrink-0"
        loading="lazy"
      />
    )
  }
  return (
    <div
      className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 text-white font-semibold text-lg ${getAvatarColor(testimonial.name)}`}
    >
      {getInitial(testimonial.name)}
    </div>
  )
}

function PhotoGrid({
  photos,
  onPhotoClick,
}: {
  photos: string[]
  onPhotoClick: (index: number) => void
}) {
  if (photos.length === 0) return null

  const display = photos.slice(0, 3)
  const remaining = photos.length - display.length

  return (
    <div
      className={`grid gap-2 mt-3 ${
        display.length === 1 ? 'grid-cols-1' : display.length === 2 ? 'grid-cols-2' : 'grid-cols-3'
      }`}
    >
      {display.map((url, i) => (
        <button
          key={i}
          type="button"
          onClick={() => onPhotoClick(i)}
          className="relative overflow-hidden rounded-lg aspect-square bg-muted group"
        >
          <img
            src={url}
            alt={`Foto ${i + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          {i === display.length - 1 && remaining > 0 && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center text-white font-semibold text-lg">
              +{remaining}
            </div>
          )}
        </button>
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const photos = getPhotoUrls(testimonial)

  return (
    <>
      <div className="bg-card text-card-foreground border border-border rounded-2xl p-6 md:p-7 flex flex-col h-full shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <GoogleBadge />
          <Quote className="w-7 h-7 text-primary/20 shrink-0" />
        </div>

        <div className="flex items-center gap-3 mb-3">
          <Avatar testimonial={testimonial} />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground truncate">{testimonial.name}</p>
            {testimonial.date_relative && (
              <p className="text-xs text-muted-foreground">{testimonial.date_relative}</p>
            )}
          </div>
        </div>

        <StarRating rating={testimonial.rating} />

        <p className="text-muted-foreground text-sm leading-relaxed mt-3 flex-1">
          {testimonial.content}
        </p>

        {photos.length > 0 && (
          <PhotoGrid photos={photos} onPhotoClick={(index) => setLightboxIndex(index)} />
        )}
      </div>

      {photos.length > 0 && lightboxIndex !== null && (
        <Dialog open onOpenChange={() => setLightboxIndex(null)}>
          <DialogContent className="max-w-3xl p-2 bg-background/95">
            <img
              src={photos[lightboxIndex]}
              alt={`Foto ${lightboxIndex + 1}`}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <DialogClose />
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])

  const loadTestimonials = useCallback(async () => {
    try {
      const data = await getTestimonials()
      setTestimonials(data)
    } catch (err) {
      console.error('Failed to load testimonials', err)
    }
  }, [])

  useEffect(() => {
    loadTestimonials()
  }, [loadTestimonials])

  if (testimonials.length === 0) return null

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4 text-foreground">
            <div>A experiência de quem escolheu a Klaxon</div>
            <div>
              <br />
            </div>
          </h2>
          <p className="text-muted-foreground text-lg font-light max-w-2xl mx-auto">
            Conheça os relatos de clientes e arquitetos que encontraram a peça ideal em nossas
            coleções ou participaram do desenvolvimento de uma luminária exclusiva.
          </p>
        </div>

        <div className="px-2 md:px-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((t) => (
                <CarouselItem key={t.id} className="sm:basis-full md:basis-1/2 lg:basis-1/3 pl-4">
                  <TestimonialCard testimonial={t} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  )
}

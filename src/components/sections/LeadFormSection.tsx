import { useState, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Upload, X, ImageIcon } from 'lucide-react'
import { createLead } from '@/services/leads'
import { useToast } from '@/hooks/use-toast'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { extractFieldErrors } from '@/lib/pocketbase/errors'

const formSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório'),
  whatsapp: z.string().min(10, 'WhatsApp é obrigatório'),
  project_type: z.string().min(1, 'Selecione o tipo de projeto'),
  modalidade: z.string().min(1, 'Selecione a modalidade'),
  investimento: z.string().min(1, 'Selecione a faixa de investimento'),
  user_profile: z.string().min(1, 'Selecione uma opção'),
  project_phase: z.string().min(1, 'Selecione uma opção'),
  reference_links: z.string().optional(),
})

function formatWhatsApp(value: string): string {
  const digits = value.replace(/\D/g, '').slice(0, 11)
  if (digits.length === 0) return ''
  if (digits.length <= 2) return `(${digits}`
  if (digits.length <= 6) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
  if (digits.length <= 10) return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
}

interface LeadFormSectionProps {
  isPinterest: boolean
  source: string
  selectedModalidade: string
}

export function LeadFormSection({ isPinterest, source, selectedModalidade }: LeadFormSectionProps) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [attachment, setAttachment] = useState<File | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      whatsapp: '',
      project_type: '',
      modalidade: '',
      investimento: '',
      user_profile: '',
      project_phase: '',
      reference_links: '',
    },
  })

  useEffect(() => {
    if (selectedModalidade) {
      form.setValue('modalidade', selectedModalidade, { shouldValidate: true })
    }
  }, [selectedModalidade, form])

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size > 5242880) {
        toast({
          variant: 'destructive',
          title: 'Arquivo muito grande',
          description: 'O tamanho máximo permitido é 5MB.',
        })
        return
      }
      setAttachment(file)
    }
  }

  function removeAttachment() {
    setAttachment(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      await createLead({ ...values, source, attachment })
      toast({
        title: 'Sucesso!',
        description:
          'Sua solicitação foi enviada. Um consultor Klaxon entrará em contato em breve.',
      })
      form.reset()
      removeAttachment()
    } catch (err) {
      const fieldErrors = extractFieldErrors(err)
      if (Object.keys(fieldErrors).length > 0) {
        Object.entries(fieldErrors).forEach(([field, msg]) =>
          form.setError(field as any, { message: msg }),
        )
      } else {
        toast({
          variant: 'destructive',
          title: 'Erro',
          description: 'Não foi possível enviar sua solicitação. Tente novamente.',
        })
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contato" className="py-24 md:py-32 bg-foreground text-background">
      <div className="container px-4 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <span className="text-primary font-medium tracking-widest uppercase text-sm mb-4 block">
              Consultoria
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight">
              Vamos conversar sobre o seu projeto?
            </h2>
            <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
              Compartilhe conosco sua pasta de PINS, uma imagem, uma referência ou apenas descreva o
              que você imaginou. Nossa equipe avalia a melhor solução para desenvolver uma luminária
              exclusiva para o seu ambiente.
            </p>
          </div>

          <div
            className="bg-background text-foreground p-8 md:p-12 shadow-2xl animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Nome Completo</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Como gostaria de ser chamado"
                            className="h-12 rounded-none border-border"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">WhatsApp</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="(11) 99999-9999"
                            className="h-12 rounded-none border-border"
                            value={formatWhatsApp(field.value)}
                            onChange={(e) => field.onChange(e.target.value)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="project_type"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Tipo de Projeto</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-none border-border">
                              <SelectValue placeholder="Selecione a categoria" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="residencial">Residencial</SelectItem>
                            <SelectItem value="comercial">Comercial</SelectItem>
                            <SelectItem value="corporativo">Corporativo</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="modalidade"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Modalidade</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                          value={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-none border-border">
                              <SelectValue placeholder="Selecione a modalidade" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="linha">Linha</SelectItem>
                            <SelectItem value="especial">Especial</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="investimento"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Desejo investir</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-none border-border">
                              <SelectValue placeholder="Selecione a faixa de investimento" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="ate-500">Até R$ 500,00</SelectItem>
                            <SelectItem value="ate-2000">Até R$ 2.000,00</SelectItem>
                            <SelectItem value="acima-2000">Acima de R$ 2.000,00</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="user_profile"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">Sou</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-none border-border">
                              <SelectValue placeholder="Selecione uma opção" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="cliente-final">Cliente final</SelectItem>
                            <SelectItem value="arquiteto">Arquiteto</SelectItem>
                            <SelectItem value="lojista">Lojista</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="project_phase"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">
                        Em que fase está o seu projeto?
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-12 rounded-none border-border">
                            <SelectValue placeholder="Selecione uma opção" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="inicial">Inicial</SelectItem>
                          <SelectItem value="orcamento">Orçamento</SelectItem>
                          <SelectItem value="compra">Compra</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="reference_links"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-foreground">
                        Links de referência (Pinterest, sites, etc.)
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="https://br.pinterest.com/..."
                          className="rounded-none border-border min-h-[80px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormItem>
                  <FormLabel className="text-foreground">Imagem de referência (opcional)</FormLabel>
                  <div className="space-y-3">
                    {attachment ? (
                      <div className="flex items-center gap-3 border border-border rounded-none p-3">
                        <ImageIcon className="w-8 h-8 text-muted-foreground shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">{attachment.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {(attachment.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={removeAttachment}
                          className="shrink-0"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      </div>
                    ) : (
                      <div
                        className="border border-dashed border-border rounded-none p-6 flex flex-col items-center gap-2 cursor-pointer hover:bg-accent transition-colors duration-200"
                        onClick={() => fileInputRef.current?.click()}
                      >
                        <Upload className="w-8 h-8 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground text-center">
                          Clique para anexar uma imagem de referência
                        </p>
                        <p className="text-xs text-muted-foreground">
                          JPG, PNG, WEBP ou GIF (máx. 5MB)
                        </p>
                      </div>
                    )}
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/jpeg,image/png,image/webp,image/gif"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </div>
                </FormItem>
                <Button
                  type="submit"
                  className="w-full h-14 text-base font-semibold uppercase tracking-wider rounded-none mt-4"
                  disabled={isLoading}
                >
                  {isLoading ? 'Processando...' : 'Solicitar Contato'}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}

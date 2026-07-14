import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { createLead } from '@/services/leads'
import { useToast } from '@/hooks/use-toast'
import { Input } from '@/components/ui/input'
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
  email: z.string().email('E-mail inválido'),
  whatsapp: z.string().min(10, 'WhatsApp é obrigatório'),
  project_type: z.string().min(1, 'Selecione o tipo de projeto'),
  modalidade: z.string().min(1, 'Selecione a modalidade'),
  investimento: z.string().min(1, 'Selecione a faixa de investimento'),
  reference_links: z.string().optional(),
})

export function LeadFormSection({ isPinterest, source }: { isPinterest: boolean; source: string }) {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      whatsapp: '',
      project_type: '',
      modalidade: '',
      investimento: '',
      reference_links: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
    try {
      await createLead({ ...values, source })
      toast({
        title: 'Sucesso!',
        description:
          'Sua solicitação foi enviada. Um consultor Klaxon entrará em contato em breve.',
      })
      form.reset()
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
              {isPinterest
                ? 'Envie sua pasta de referências'
                : 'Inicie o seu projeto exclusivo conosco'}
            </h2>
            <p className="text-gray-400 text-lg mb-8 font-light leading-relaxed">
              {isPinterest
                ? 'Compartilhe suas inspirações do Pinterest conosco. Nossos consultores irão analisar minuciosamente suas ideias e propor soluções sob medida com o inconfundível padrão Klaxon.'
                : 'Preencha o formulário para falar com um de nossos especialistas em design. Garantimos um atendimento ágil e altamente personalizado para compreender profundamente suas necessidades.'}
            </p>
          </div>

          <div
            className="bg-background text-foreground p-8 md:p-12 shadow-2xl animate-fade-in-up"
            style={{ animationDelay: '200ms' }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">E-mail</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="seu@email.com"
                            type="email"
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
                            placeholder="+55 (11) 99999-9999"
                            className="h-12 rounded-none border-border"
                            {...field}
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
                            <SelectItem value="residencial">Residencial de Alto Padrão</SelectItem>
                            <SelectItem value="comercial">Comercial / Varejo</SelectItem>
                            <SelectItem value="corporativo">Corporativo / Escritórios</SelectItem>
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
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-12 rounded-none border-border">
                              <SelectValue placeholder="Selecione a modalidade" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="pecas-de-linha">Peças de Linha</SelectItem>
                            <SelectItem value="projeto-especial">Projeto Especial</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
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
                {isPinterest && (
                  <FormField
                    control={form.control}
                    name="reference_links"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground">
                          Link da sua Pasta do Pinterest
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://br.pinterest.com/..."
                            className="h-12 rounded-none border-border"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}
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

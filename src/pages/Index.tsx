import { useState } from 'react'
import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { Differentials } from '@/components/sections/Differentials'
import { SelectionSection } from '@/components/sections/SelectionSection'
import { ExpertiseSection } from '@/components/sections/ExpertiseSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { LeadFormSection } from '@/components/sections/LeadFormSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { useSource } from '@/hooks/use-source'

export default function Index() {
  const { isPinterest, source } = useSource()
  const [selectedModalidade, setSelectedModalidade] = useState<string>('')

  return (
    <div className="w-full flex flex-col">
      <HeroSection onSelectModalidade={setSelectedModalidade} />
      <ProjectsGrid />
      <Differentials />
      <SelectionSection onSelectModalidade={setSelectedModalidade} />
      <ExpertiseSection />
      <TestimonialsSection />
      <LeadFormSection
        isPinterest={isPinterest}
        source={source}
        selectedModalidade={selectedModalidade}
      />
      <FAQSection />
    </div>
  )
}

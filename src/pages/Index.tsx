import { HeroSection } from '@/components/sections/HeroSection'
import { ProjectsGrid } from '@/components/sections/ProjectsGrid'
import { Differentials } from '@/components/sections/Differentials'
import { SelectionSection } from '@/components/sections/SelectionSection'
import { LeadFormSection } from '@/components/sections/LeadFormSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { useSource } from '@/hooks/use-source'

export default function Index() {
  const { isPinterest, source } = useSource()

  return (
    <div className="w-full flex flex-col">
      <HeroSection />
      <ProjectsGrid />
      <Differentials />
      <SelectionSection />
      <LeadFormSection isPinterest={isPinterest} source={source} />
      <FAQSection />
    </div>
  )
}

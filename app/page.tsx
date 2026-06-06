import HeroSection       from '@/components/home/HeroSection'
import ManifestoSection  from '@/components/home/ManifestoSection'
import ScenariosSection  from '@/components/home/ScenariosSection'
import WorkshopSection   from '@/components/home/WorkshopSection'
import CommunitySection  from '@/components/home/CommunitySection'
import ImpactSection     from '@/components/home/ImpactSection'
import RecycleSection    from '@/components/home/RecycleSection'
import CTASection        from '@/components/home/CTASection'
import Ticker            from '@/components/shared/Ticker'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <Ticker />
      <ManifestoSection />
      <ScenariosSection />
      <WorkshopSection />
      <CommunitySection />
      <ImpactSection />
      <RecycleSection />
      <CTASection />
    </main>
  )
}

import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Modernized goal manager"
        content="Accomplish goals with the efficiency of a Google  engineer"
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}

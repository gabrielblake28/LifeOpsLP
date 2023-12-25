import { Hero, HeroIllustration } from '@/components/hero'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Modernized goal manager"
        content="Make success a habit with advanced goal management"
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}

import Page, { PageProps } from '@/components/page'
import Hero, { HeroProps } from './hero'
import Intro, { IntroProps } from './intro'
import Camaras, { CamarasProps } from './camaras'

interface IndexProps extends PageProps, HeroProps, IntroProps, CamarasProps {
}

const Index = (data: IndexProps) => (
  <Page {...data}>
    <Hero {...data}/>
    <Intro {...data}/>
    <Camaras {...data}/>
  </Page>
)

export default Index

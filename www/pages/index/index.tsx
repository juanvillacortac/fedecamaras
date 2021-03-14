import Page from '@/components/page'
import Hero, { HeroProps } from './hero'
import Intro, { IntroProps } from './intro'

interface IndexProps extends HeroProps, IntroProps {
}

const Index = (data: IndexProps) => (
  <Page>
    <Hero {...data}/>
    <Intro {...data}/>
  </Page>
)

export default Index

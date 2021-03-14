import Page from '@/components/page'
import Hero, { HeroProps } from './hero'

interface IndexProps extends HeroProps {
  globalData?: any
}

const Index = (data: IndexProps) => (
  <Page globalData={data.globalData}>
    <Hero {...data}/>
  </Page>
)

export default Index

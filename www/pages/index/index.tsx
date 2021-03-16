import Page, { PageProps } from '@/components/page'
import Hero, { HeroProps } from './hero'
import Intro, { IntroProps } from './intro'
import Equipo, { EquipoProps } from './equipo'
import Camaras, { CamarasProps } from './camaras'
import Lineas, { LineasProps } from './lineas'
import Galeria, { GaleriaProps } from './galeria'

interface IndexProps extends PageProps, HeroProps, IntroProps, EquipoProps, CamarasProps, LineasProps, GaleriaProps {
}

const Index = (data: IndexProps) => (
  <Page {...data}>
    <Hero {...data}/>
    <Intro {...data}/>
    <Equipo {...data}/>
    <Lineas {...data}/>
    <Camaras {...data}/>
    <Galeria {...data}/>
  </Page>
)

export default Index

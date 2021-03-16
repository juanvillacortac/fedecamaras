import Page, { PageProps } from '@/components/page'
import Hero from './hero'
import HeroSlug from './hero-slug'
import Galeria, { GaleriaProps } from './galeria'
import {Album} from '@/lib/models/album'
import {Image} from 'react-datocms'
import Viewport from '@/components/viewport'

interface IndexProps extends PageProps, GaleriaProps {
}

interface SlugProps extends PageProps {
 album?: Album
}

export const Slug = (data: SlugProps) => (
  <Page {...data} title={data.album.titulo}>
    <HeroSlug titulo={data.album.titulo}/>
    <div className="px-4 pb-16 lg:mx-auto lg:w-5/10">
      <div className="flex flex-col space-y-16">
        {data.album.imagenes.map((v, i) => (
          <Viewport className="animate" oneWay key={i}>
            <Image
              data={{
                ...v.responsiveImage
              }}
            />
            <h3 className="mt-6 text-black t-h3 font-title">{v.responsiveImage.title}</h3>
          </Viewport>
        ))}
      </div>
    </div>
  </Page>
)

const Index = (data: IndexProps) => (
  <Page {...data} title="Galería">
    <Hero/>
    <Galeria {...data}/>
  </Page>
)

export default Index

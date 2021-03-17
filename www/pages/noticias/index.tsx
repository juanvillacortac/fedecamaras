import Page, { PageProps } from '@/components/page'
import Hero from './hero'
import HeroSlug from './hero-slug'
import Noticias, { NoticiasProps } from './noticias'
import {Noticia} from '@/lib/models/noticia'
import {Image, StructuredText} from 'react-datocms'
import Viewport, {setAnim} from '@/components/viewport'
import {ResponsiveImage} from '@/lib/models/cms'

interface IndexProps extends PageProps, NoticiasProps {
}

interface SlugProps extends PageProps {
 noticia?: Noticia
}

export const Slug = (data: SlugProps) => {
  const fecha = (() => {
    const fecha = new Date(data.noticia.updatedAt)
    return `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`
  })()
  return (
    <Page {...data} title={data.noticia.titulo}>
      <HeroSlug titulo={data.noticia.titulo}/>
      <div className="pb-16 content-lg">
        <Viewport>
          <p className="pl-4 mb-16 text-lg border-l-4 border-kmb-blue-800 font-title animate" style={setAnim({x: '-1rem'})}>{data.noticia.descripcion}</p>
        </Viewport>
        <Viewport className="animate" oneWay>
          <Image
            data={{
              ...data.noticia.thumbnail.responsiveImage
            }}
          />
          <h3 className="mt-6 text-kmb-blue-900 t-h3 font-title">Actualizado el {fecha}</h3>
        </Viewport>
      </div>
      <Viewport className="w-full px-4 pb-16 mx-auto lg:w-5/10 animate prose font-title" oneWay style={setAnim({y: '0.5rem'})}>
        <StructuredText
          data={data.noticia.cuerpo}
          renderBlock={({ record }) => {
            if (record.__typename === 'ImageRecord') {
              const imagen = (record.imagen as ResponsiveImage)
              return (
                <Viewport className="my-6 lg:-mx-16 animate" oneWay>
                  <Image data={imagen.responsiveImage} pictureStyle={{margin: '0'}} />
                </Viewport>
              )
            }

            return (
              <>
                <p className="font-bold t-h3">Oops, dejémosle esto al programador</p>
                <pre>{JSON.stringify(record, null, 2)}</pre>
              </>
            )
          }}
        />
      </Viewport>
    </Page>
            )
}

const Index = (data: IndexProps) => (
  <Page {...data} title="Últimas noticias">
    <Hero/>
    <Noticias {...data}/>
  </Page>
)

export default Index

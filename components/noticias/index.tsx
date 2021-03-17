import { Noticia } from '@/lib/models/noticia'
import { Image } from 'react-datocms'
import V, { setAnim } from '@/components/viewport'
import s from './style.module.css'
import Link from 'next/link'

export const NoticiaCard = ({ titulo, slug, thumbnail, descripcion, updatedAt }: Noticia) => {
  const fecha = (() => {
    const fecha = new Date(updatedAt)
    return `${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`
  })()
  return (
    <Link href={{ pathname: '/noticias/[slug]', query: { slug } }}>
      <a
        className={`${s['noticiaCard']}`}
      >
        <V className={`flex-grow w-full lg:w-1/2 animate`} oneWay>
          <Image
            data={{
              ...thumbnail?.responsiveImage,
              alt: titulo,
              title: titulo,
            }}
            className="object-cover h-full"
            pictureClassName="object-cover h-full"
          />
        </V>
        <V
          className="w-full p-16 px-6 sm:px-16 lg:w-1/2 lg:flex-grow"
          oneWay
        >
          <h2
            className="mb-4 text-4xl font-bold uppercase md:text-4xl font-title animate"
            style={setAnim({y: '1rem', d: '400ms'})}
          >{titulo}</h2>
          <p
            className="mb-2 t-p font-title animate"
            style={setAnim({y: '1rem', d: '800ms'})}
          >Actualizado el {fecha}</p>
          <p
            className="t-p font-title animate"
            style={setAnim({y: '1rem', d: '800ms'})}
          >{descripcion}</p>
          <p
            className="flex items-center mt-6 font-bold t-h3 animate font-title"
            style={setAnim({y: '1rem', d: '1200ms'})}
          >
            <span className="pb-2 border-b-2 border-current">
              Saber más
            </span>
            <span className="pb-2 -mr-2 i jam:chevron-right"/>
          </p>
        </V>
      </a>
    </Link>

  )
}

export interface NoticiaCardContainerProps {
  noticias?: Noticia[]
}

export const NoticiaCardContainer = ({ noticias }: NoticiaCardContainerProps) => (
  <div className="flex flex-col space-y-8">
    {noticias?.map((n, i) => <NoticiaCard {...n} key={i}/>)}
  </div>
)

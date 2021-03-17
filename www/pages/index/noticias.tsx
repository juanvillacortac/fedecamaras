import { NoticiaCardContainer, NoticiaCardContainerProps } from '@/components/noticias'
import V from '@/components/viewport'
import Link from 'next/link'

export interface NoticiasProps extends NoticiaCardContainerProps {
}

const Noticias = (props: NoticiasProps) => (
  <div className="py-16 content-lg">
    <div className="pb-12">
      <V className="flex flex-row items-center -mx-8 overflow-hidden text-kmb-blue-800" oneWay>
        <h2
          className="w-full px-8 text-4xl font-light uppercase sm:text-5xl font-title animate"
        >
          Conoce nuestras últimas <span className="font-bold">noticias</span>
        </h2>
      </V>
    </div>
    <NoticiaCardContainer {...props}/>
    <V className="flex mx-auto mt-8 animate" oneWay>
      <Link href="/noticias">
        <a className="mx-auto underline t-h3 hover:scale-95 transform duration-200 font-title">Ver todas las noticias</a>
      </Link>
    </V>
  </div>
)

export default Noticias

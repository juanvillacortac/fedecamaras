import { AlbumCardContainer } from '@/components/galeria'
import V from '@/components/viewport'
import { Album } from '@/lib/models/album'
import Link from 'next/link'

export interface GaleriaProps {
  albums: Album[]
}

const Galeria = (props: GaleriaProps) => (
  <div className="py-16 content-lg">
    <div className="pb-12">
      <V className="flex flex-row items-center -mx-8 overflow-hidden text-kmb-blue-800" oneWay>
        <h2
          className="w-full px-8 text-4xl font-light uppercase sm:text-5xl font-title animate"
        >
          Es momento de <span className="font-bold">sumar</span>
        </h2>
      </V>
    </div>
    <AlbumCardContainer {...props}/>
    <V className="flex mx-auto mt-8 animate" oneWay>
      <Link href="/galeria">
        <a className="mx-auto underline t-h3 hover:scale-95 transform duration-200 font-title">Ir a la galería</a>
      </Link>
    </V>
  </div>
)

export default Galeria

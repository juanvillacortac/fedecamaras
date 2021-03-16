import { AlbumCardContainer } from '@/components/galeria'
import V from '@/components/viewport'
import { Album } from '@/lib/models/album'
import Link from 'next/link'

export interface GaleriaProps {
  albums: Album[]
}

const Galeria = (props: GaleriaProps) => (
  <div className="py-16 content-lg">
    <AlbumCardContainer {...props}/>
  </div>
)

export default Galeria

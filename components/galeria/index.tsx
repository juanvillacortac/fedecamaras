import { Album } from '@/lib/models/album'
import V from '@/components/viewport'
import { Image } from 'react-datocms'
import Link from 'next/link'

const AlbumCard = ({ imagenes, titulo, slug }: Album) => (
  <Link href={{ pathname: '/galeria/[slug]', query: { slug } }}>
    <a className="hover:scale-95 transform duration-200">
      <V className="flex flex-col animate" oneWay>
        <div className="flex-col border bg-kmb-gray-900 border-kmb-gray-200">
          <Image
            data={{
              ...imagenes[0].responsiveImage,
              alt: ''
            }}
            className="w-full"
            pictureClassName="w-full"
          />
          {imagenes.length > 1 && (
            <div className="grid grid-cols-3">
              {imagenes.slice(1, 4).map((v, i) => (
                <Image
                  key={i}
                  data={{
                    ...v.responsiveImage,
                  }}
                  className="w-full"
                  pictureClassName="w-full"
                />
              ))}
            </div>
          )}
          <div className="w-full p-2 bg-gray-100 border-t border-kmb-gray-200">
            <p className="text-lg font-light font-title">{titulo}</p>
          </div>
        </div>
      </V>
    </a>
  </Link>
)

export const AlbumCardContainer = ({ albums }: { albums?: Album[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {albums.map((a, i) => <AlbumCard {...a} key={i}/>)}
  </div>
)

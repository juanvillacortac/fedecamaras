import { Album } from '@/lib/models/album'
import V from '@/components/viewport'
import { Image } from 'react-datocms'
import Link from 'next/link'

const AlbumCard = ({ imagenes, titulo, slug }: Album) => (
  <Link href={{ pathname: '/galeria/[slug]', query: { slug } }}>
    <a className="hover:scale-95 transform duration-200">
      <V className="flex flex-col animate" oneWay>
        <div className="flex-col overflow-hidden bg-gray-900 border rounded-lg shadow-lg border-kmb-blue-800">
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
                    alt: ''
                  }}
                  className="w-full"
                  pictureClassName="w-full"
                />
              ))}
            </div>
          )}
        </div>
        <p className="mt-4 underline t-h3 font-title">{titulo}</p>
      </V>
    </a>
  </Link>
)

export const AlbumCardContainer = ({ albums }: { albums?: Album[] }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {albums.map((a, i) => <AlbumCard {...a} key={i}/>)}
  </div>
)

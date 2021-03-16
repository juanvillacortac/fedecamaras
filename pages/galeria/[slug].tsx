import { request, responsiveImageHelper, responsiveImageFragment, getGlobalData } from '@/lib/datocms'
import {Album} from '@/lib/models/album'
import {GetStaticPathsResult} from 'next'
export { Slug as default } from '@/www/pages/galeria'

const query = `
query GaleriaQuery($slug: String) {
  album(filter: {slug: {eq: $slug}}) {
    titulo
    slug
    imagenes {
      ${responsiveImageHelper({ w: 800 })}
    }
  }
}

${responsiveImageFragment}
`

export const getStaticProps = async (context: any) => {
  const { slug } = context.params
  const { album } = await request({ query, variables: {
    slug
  }})
  const globalData = await getGlobalData()
  return {
    props: {
      album,
      globalData,
    }
  }
}

const paths_query = `
query PathsQuery {
  allAlbums {
    slug
  }
}
`

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const { allAlbums } = await request({ query: paths_query })
  return {
    paths: allAlbums.map(({ slug }: Album) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

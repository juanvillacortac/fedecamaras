import { request, responsiveImageHelper, responsiveImageFragment, getGlobalData } from '@/lib/datocms'
import {Noticia} from '@/lib/models/noticia'
import {GetStaticPathsResult} from 'next'
export { Slug as default } from '@/www/pages/noticias'

const query = `
query NoticiaQuery($slug: String) {
  noticiaEntrada(filter: {slug: {eq: $slug}}) {
    updatedAt
    titulo
    slug
    descripcion
    thumbnail {
      ${responsiveImageHelper({ w: 800 })}
    }
    cuerpo {
      value
      blocks {
        __typename
        ... on ImageRecord {
          id
          imagen {
            ${responsiveImageHelper({ w: 800 })}
          }
        }
      }
    }
  }
}

${responsiveImageFragment}
`

export const getStaticProps = async (context: any) => {
  const { slug } = context.params
  const { noticiaEntrada } = await request({ query, variables: {
    slug
  }})
  const globalData = await getGlobalData()
  return {
    props: {
      noticia: noticiaEntrada,
      globalData,
    }
  }
}

const paths_query = `
query PathsQuery {
  allNoticiaEntradas {
    slug
  }
}
`

export const getStaticPaths = async (): Promise<GetStaticPathsResult> => {
  const { allNoticiaEntradas } = await request({ query: paths_query })
  return {
    paths: allNoticiaEntradas.map(({ slug }: Noticia) => ({
      params: { slug },
    })),
    fallback: false,
  }
}

import { request, responsiveImageHelper, responsiveImageFragment, getGlobalData } from '@/lib/datocms'
export { default,  } from '@/www/pages/noticias'

const query = `
query GaleriaQuery {
  allNoticiaEntradas {
    updatedAt
    titulo
    slug
    descripcion
    thumbnail {
      ${responsiveImageHelper({ w: 800, h: 480, fit: 'crop' })}
    }
  }
}

${responsiveImageFragment}
`

export const getStaticProps = async () => {
  const { allNoticiaEntradas } = await request({ query })
  const globalData = await getGlobalData()
  return {
    props: {
      noticias: allNoticiaEntradas,
      globalData,
    }
  }
}

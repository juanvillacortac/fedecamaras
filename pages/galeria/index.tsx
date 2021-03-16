import { request, responsiveImageHelper, responsiveImageFragment, getGlobalData } from '@/lib/datocms'
export { default,  } from '@/www/pages/galeria'

const query = `
query GaleriaQuery {
  allAlbums {
    titulo
    slug
    imagenes {
      ${responsiveImageHelper({ w: 256, h: 256, fit: 'crop' })}
    }
  }
}

${responsiveImageFragment}
`

export const getStaticProps = async () => {

  const { allAlbums } = await request({ query })
  const globalData = await getGlobalData()
  return {
    props: {
      albums: allAlbums,
      globalData,
    }
  }
}

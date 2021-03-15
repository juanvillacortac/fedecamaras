import { request, responsiveImageHelper, responsiveImageFragment, getGlobalData } from '@/lib/datocms'
export { default,  } from '@/www/pages/index'

const query = `
query InicioQuery {
  inicio {
    introTitulo
    introDescripcion
    introImage {
      ${responsiveImageHelper({ w: 800, h: 800, fit: 'crop' })}
    }
  }
  allCamaras {
    nombre
    bgColor {
      hex
    }
    fgColor {
      hex
    }
    imagen {
      ${responsiveImageHelper({ w: 545, h: 812, fit: 'crop' })}
    }
    modulos {
      titulo
      icon
      texto
    }
  }
}

${responsiveImageFragment}
`

export const getStaticProps = async () => {
  const { inicio, allCamaras } = await request({ query })
  const globalData = await getGlobalData()
  return {
    props: {
      ...inicio,
      camaras: allCamaras,
      globalData
    }
  }
}

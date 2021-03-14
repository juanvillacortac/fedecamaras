import { request, responsiveImageHelper, responsiveImageFragment } from '@/lib/datocms'
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
}

${responsiveImageFragment}
`

export const getStaticProps = async () => {
  const { inicio } = await request({ query })
  return {
    props: {
      ...inicio
    }
  }
}

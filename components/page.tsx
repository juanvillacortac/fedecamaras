import { ReactNode, useContext } from 'react'
import Navbar from './navigation/navbar'
import Footer from './footer'
import { createContext } from 'react'
import OgImage, { OgImageProps } from './og-image'
import SeoTags, { SeoTagsProps } from './seo-tags'
import { useRouter } from 'next/router'

export interface PageProps {
  globalData?: any
}

interface Props extends OgImageProps, SeoTagsProps, PageProps {
  children?: ReactNode
}

const globalDataContext = createContext<any>(null)
export const useGlobalDataContext = () => useContext(globalDataContext)

const brand = 'Somos equipo'
const descriptionDefault = 'En equipo logramos más'

const Page = ({ title, brandTitle, description, children, globalData, ...rest }: Props) => {
  const { pathname } = useRouter()
  return (
    <globalDataContext.Provider value={globalData}>
      <SeoTags
        title={title}
        brandTitle={brandTitle || brand}
        description={description || descriptionDefault}
      />

      <OgImage {...rest}/>

      <div className="wrapper">
        <Navbar/>
        <main className={pathname != '/' && 'padded'}>
          {children}
        </main>
        <Footer/>
      </div>
      <style jsx>{`
        .wrapper {
          display: flex;
          flex-direction: column;
          width: 100%;
          min-height: 100vh;
        }
        main {
          width: 100%;
          flex-grow: 1;
        }
        .padded {
          padding-top: 96px;
        }
        `}</style>
    </globalDataContext.Provider>
  )
}

export default Page

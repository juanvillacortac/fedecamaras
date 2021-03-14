import { ReactNode, useContext } from 'react'
import Navbar from './navigation/navbar'
import Footer from './footer'
import { createContext } from 'react'
import OgImage, { OgImageProps } from './og-image'
import SeoTags, { SeoTagsProps } from './seo-tags'
import { useRouter } from 'next/router'

interface Props extends OgImageProps, SeoTagsProps {
  children?: ReactNode
  globalData?: any
}

const globalDataContext = createContext<any>(null)
export const useGlobalDataContext = () => useContext(globalDataContext)

const brand = 'FEDECAMARAS NE'
const descriptionDefault = 'Our large selection ensure that we have a vehicle just for you. Whether you are looking for a sedan, coupe, truck, or SUV. We look forward to seeing you soon!'

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

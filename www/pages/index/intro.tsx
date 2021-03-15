import V, { setAnim } from '@/components/viewport'

import { Image, ResponsiveImageType } from 'react-datocms'

export interface IntroProps {
  introTitulo?: string
  introDescripcion?: string
  introImage?: {
    responsiveImage?: ResponsiveImageType
  }
}

const Intro = ({ introTitulo, introDescripcion, introImage }: IntroProps) => (
  <div className="flex flex-wrap w-full">
    <V className="w-full lg:w-1/2 animate" oneWay>
      <Image
        data={{
          ...introImage?.responsiveImage,
          alt: introTitulo,
        }}
      />
    </V>
    <V className="w-full p-16 px-6 text-white sm:px-16 bg-kmb-blue-800 lg:w-1/2 lg:flex-grow animate" oneWay>
      <h2
        className="mb-6 text-4xl font-bold uppercase md:text-6xl font-title animate"
        style={setAnim({y: '1rem', d: '700ms'})}
      >{introTitulo}</h2>
      <div
        className="flex flex-col t-p space-y-4 font-title animate"
        dangerouslySetInnerHTML={{ __html: introDescripcion }}
        style={setAnim({y: '1rem', d: '1000ms'})}
      />
    </V>
  </div>
)

export default Intro

import { useGlobalDataContext } from '@/components/page'
import V, { setAnim } from '@/components/viewport'
import { Camara } from '@/lib/models/camara'

import { Image } from 'react-datocms'

export interface CamarasProps {
  camaras?: Camara[]
}

export interface CamaraCompProps extends Camara {
  reverse?: boolean
}

const CamaraComp = ({ nombre, imagen, bgColor, fgColor, modulos, reverse }: CamaraCompProps) => {
  const { presentacion } = useGlobalDataContext()
  console.log(presentacion)
  return (
    <div className={`overflow-hidden flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} w-full`}>
      <V className="flex-grow w-full lg:w-1/2 animate" oneWay>
        <Image
          data={{
            ...imagen?.responsiveImage,
            alt: nombre,
          }}
          className="object-cover h-full"
          pictureClassName="object-cover h-full"
        />
      </V>
      <V
        className="w-full p-16 px-4 sm:px-16 lg:w-1/2 lg:flex-grow animate"
        style={{
          backgroundColor: bgColor.hex,
          color: fgColor.hex
        }}
        oneWay
      >
        <h2
          className="mb-8 text-4xl font-bold uppercase md:text-6xl font-title animate"
          style={setAnim({y: '1rem', d: '800ms'})}
        >{nombre}</h2>
        <div
          className="flex flex-wrap -m-6 t-p font-title animate"
          style={setAnim({y: '1rem', d: '1100ms'})}
        >
          {modulos.map((m, i) => (
            <div className="flex flex-col p-6 lg:w-1/2" key={i}>
              <div className="w-12 h-12 icon" dangerouslySetInnerHTML={{ __html: m.icon }}/>
              <div className="mt-6">
                <h3 className="font-bold t-h3 font-title">{m.titulo}</h3>
                <div className="flex flex-col mt-4 space-y-4" dangerouslySetInnerHTML={{ __html: m.texto }}/>
              </div>
            </div>
          ))}
        </div>
        <a
          href={`/api/proxy?filename=${escape(presentacion)}`}
          className="flex items-center mt-6 font-bold t-h3 link animate font-title"
          download
          style={setAnim({y: '1rem', d: '1300ms'})}
        >
          <span className="pb-2 border-b-2" style={{ borderColor: fgColor.hex }}>
            Saber más
          </span>
          <span className="pb-2 -mr-2 i jam:chevron-right duration-200"/>
        </a>
        <style jsx>{`
          .icon :global(svg) {
            width: 100% !important;
            height: 100% !important;
          }
          .link :global(.i) {
            padding-left: 0.5rem;
          }
          .link:hover :global(.i) {
            padding-left: 1rem;
          }
          `}</style>
      </V>
    </div>
  )
}

const Camaras = ({ camaras }: CamarasProps) => (
  <>
    {camaras.map((c, i) => (
      <CamaraComp {...c} key={i} reverse={i % 2 == 0}/>
    ))}
  </>
)

export default Camaras

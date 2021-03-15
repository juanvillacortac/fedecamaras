import V, { setAnim } from '@/components/viewport'
import { LineaEstrategica } from '@/lib/models/linea'
import s from './styles/lineas.module.css'

import { Image } from 'react-datocms'
import Link from 'next/link'

export interface LineasProps {
  lineasEstrategicas?: LineaEstrategica[]
}

const Especificas = ({ lineasEstrategicas }: LineasProps) => (
  <div className="py-12 content-lg font-title">
    <V className={`flex flex-col sm:flex-row w-full animate mb-12`} id={lineasEstrategicas[0].slug} oneWay>
      <div className="relative w-full sm:pr-6 sm:w-1/2">
        <div className="absolute right-0 z-10 w-16 h-16 mt-4 mb-4 mr-4 text-white sm:mr-10 icon" dangerouslySetInnerHTML={{ __html: lineasEstrategicas[0].icon }}/>
        <Image
          data={{
            ...lineasEstrategicas[0].imagen.responsiveImage,
            alt: lineasEstrategicas[0].titulo
          }}
          className={`w-full mb-4 lg:mb-0`}
          pictureClassName="w-full"
        />
        <style jsx>{`
          .icon :global(svg) {
            width: 100% !important;
            height: 100% !important;
          }`}
        </style>
      </div>
      <div className={`w-full sm:w-1/2 text-black sm:pl-6`}>
        <h2 className="w-full pb-4 border-b border-black t-h2 font-title">{lineasEstrategicas[0].titulo}</h2>
        <ul className="pt-6 pl-6 list-disc space-y-4">
          {lineasEstrategicas[0].descripcion.map((m, i) => (
            <li key={i}>
              <div className="flex flex-col space-y-2 t-p" dangerouslySetInnerHTML={{__html: m.bullet}}/>
            </li>
          ))}
        </ul>
      </div>
    </V>
    <div className="w-full grid gap-12 grid-cols-1 sm:grid-cols-2">
      {lineasEstrategicas.slice(1, lineasEstrategicas.length).map((l, i) => (
        <V className={`flex flex-col w-full animate`} key={i} id={l.slug} oneWay>
          <div className="relative">
            <div className="absolute right-0 z-10 w-16 h-16 mt-4 mb-4 mr-4 text-white icon" dangerouslySetInnerHTML={{ __html: l.icon }}/>
            <Image
              data={{
                ...l.imagen.responsiveImage,
                alt: l.titulo
              }}
              className={`w-full mb-4`}
              pictureClassName="w-full"
            />
            <style jsx>{`
              .icon :global(svg) {
                width: 100% !important;
                height: 100% !important;
              }`}
            </style>
          </div>
          <div className={`w-full text-black`}>
            <h2 className="w-full pb-4 border-b border-black t-h2 font-title">{l.titulo}</h2>
            <ul className="pt-6 pl-6 list-disc space-y-4">
              {l.descripcion.map((m, i) => (
                <li key={i}>
                  <div className="flex flex-col space-y-2 t-p" dangerouslySetInnerHTML={{__html: m.bullet}}/>
                </li>
              ))}
            </ul>
          </div>
        </V>
      ))}
    </div>
  </div>
)

const General = ({ lineasEstrategicas }: LineasProps) => (
  <div className="flex flex-wrap py-16 content-lg">
    <V className="w-full lg:w-4/10 animate lg:pr-6 font-title" oneWay style={setAnim({y: '1rem'})}>
      <h2 className="text-5xl font-bold text-black">Líneas estratégicas</h2>
      <p className="mt-4 text-2xl font-light uppercase text-kmb-blue-800">Juntos <span className="font-bold">logramos +</span></p>
    </V>
    <V className="flex flex-wrap w-full pt-6 -my-4 sm:-m-2 lg:w-6/10 animate sm:justify-between lg:pt-0" oneWay>
      {lineasEstrategicas.map((l, i) => (
        <div className="w-full py-4 sm:p-2 sm:w-1/3 animate" key={i} style={setAnim({ y: '1rem', d: `${(i+1)*100}ms` })}>
          <Link href={`/#${l.slug}`}>
            <a className={`${s['lineaGeneral']} link flex justify-end flex-col p-6 sm:p-4`}>
              <div className="w-12 h-12 mb-4 icon" dangerouslySetInnerHTML={{ __html: l.icon }}/>
              <h3 className="font-bold t-h3 font-title" style={{minHeight: 'calc(1.33rem * 2)'}}>{l.titulo}</h3>
              <p
                className="flex items-center mt-4 font-bold link animate font-title"
                style={setAnim({y: '0', x: '-0.5rem', d: `${(i+1)*200}ms`})}
              >
                <span className="border-b-2 border-current">
                  Saber más
                </span>
                <span className="-mr-2 i jam:chevron-right duration-200"/>
              </p>
            </a>
          </Link>
        </div>
      ))}
    </V>
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
  </div>
)

const Lineas = (data: LineasProps) => (
  <>
    <General {...data}/>
    <Especificas {...data}/>
  </>
)

export default Lineas

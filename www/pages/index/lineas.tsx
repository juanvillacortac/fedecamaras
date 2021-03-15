import V, { setAnim } from '@/components/viewport'
import { LineaEstrategica } from '@/lib/models/linea'
import s from './styles/lineas.module.css'

import { Image } from 'react-datocms'
import Link from 'next/link'

export interface LineasProps {
  lineasEstrategicas?: LineaEstrategica[]
}

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
  </>
)

export default Lineas

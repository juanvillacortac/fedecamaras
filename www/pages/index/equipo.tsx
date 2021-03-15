import V, { setAnim } from '@/components/viewport'
import { Integrante } from '@/lib/models/integrante'

import { Image } from 'react-datocms'

export interface EquipoProps {
  equipo?: Integrante[]
}

const Equipo = ({ equipo }: EquipoProps) => (
  <div className="py-16 overflow-hidden content" id="equipo">
    <V className="flex flex-row items-center -mx-8 text-kmb-blue-800" oneWay>
      <h2
        className="px-8 text-5xl font-light uppercase font-title animate w-7/10"
      >
        En equipo <span className="font-bold">logramos +</span>
      </h2>
      <div className="px-8 bg-black w-4/10 animate" style={{height: '1px !important', ...setAnim({x: '50%'})}}></div>
    </V>
    <div className="flex flex-wrap space-y-4 lg:space-y-0">
      {equipo.map((e, i) => (
        <V className="relative w-full mt-16 lg:w-1/4 animate" key={i} style={setAnim({y: '1rem'})}>
          <div className="absolute z-20 mt-4 ml-4 text-xl text-white font-title lg:text-base">
            <p className="font-bold">{e.nombre}</p>
            <p className="">{e.cargo}</p>
          </div>
          <Image
            data={{
              ...e.imagenSm.responsiveImage,
              alt: e.nombre,
              title: e.nombre,
            }}
            pictureClassName="w-full"
          />
        </V>
      ))}
    </div>
  </div>
)

export default Equipo

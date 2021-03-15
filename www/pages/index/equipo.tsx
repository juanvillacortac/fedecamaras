import V, { setAnim } from '@/components/viewport'
import { Integrante } from '@/lib/models/integrante'

import { Image } from 'react-datocms'

export interface EquipoProps {
  equipo?: Integrante[]
}

const Experiencia = ({ equipo }: EquipoProps) => (
  <div id="experiencia-gremial">
    {equipo.map(({ imagenLg, nombre, cargo, ocupaciones }, i) => (
      <div className={`overflow-hidden flex flex-col content-lg ${i % 2 != 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} my-8`}>
        <V className={`flex-grow w-full lg:w-1/2 animate ${i % 2 == 0 ? 'lg:pr-8' : 'lg:pl-8'}`} oneWay>
          <Image
            data={{
              ...imagenLg?.responsiveImage,
              alt: nombre,
            }}
            className="object-cover h-full"
            pictureClassName="object-cover h-full"
          />
        </V>
        <V
          className="w-full p-16 px-6 sm:px-16 lg:w-1/2 lg:flex-grow animate bg-kmb-blue-800"
          style={{color: i % 2 != 0 ? 'black' : 'white', ...(i % 2 != 0 &&{ backgroundColor: '#F3F3F3' })}}
          oneWay
        >
          <h2
            className="mb-4 text-4xl font-bold uppercase md:text-4xl font-title animate"
            style={setAnim({y: '1rem', d: '400ms'})}
          >{nombre}</h2>
          <h2
            className="mb-8 text-2xl font-bold md:text-2xl font-title animate"
            style={setAnim({y: '1rem', d: '400ms'})}
          >{cargo}</h2>
          <ul
            className="pl-6 list-disc t-p font-title animate space-y-6"
            style={setAnim({y: '1rem', d: '800ms'})}
          >
            {ocupaciones.map((m, i) => (
              <li className="pl-2" key={i}>
                <div className="flex flex-col mt-4 space-y-2" dangerouslySetInnerHTML={{ __html: m.ocupacion }}/>
              </li>
            ))}
          </ul>
        </V>
      </div>
    ))}
  </div>
)

const General = ({ equipo }: EquipoProps) => (
  <div className="py-16 overflow-hidden content-lg" id="equipo">
    <V className="flex flex-row items-center -mx-8 text-kmb-blue-800" oneWay>
      <h2
        className="w-full px-8 text-4xl font-light uppercase sm:text-5xl font-title animate lg:w-7/10"
      >
        En equipo <span className="font-bold">logramos +</span>
      </h2>
      <div className="hidden px-8 bg-black lg:block w-4/10 animate" style={{height: '1px !important', ...setAnim({x: '50%'})}}></div>
    </V>
    <div className="flex flex-wrap pt-16 -my-8 lg:my-0">
      {equipo.map((e, i) => (
        <V className="relative w-full py-8 lg:py-0 lg:w-1/4 animate" key={i} style={setAnim({y: '1rem'})}>
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

const Equipo = (props: EquipoProps) => (
  <>
    <General {...props}/>
    <Experiencia {...props}/>
  </>
)

export default Equipo

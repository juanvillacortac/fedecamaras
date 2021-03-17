import V, { setAnim } from '@/components/viewport'
import Link from 'next/link'
import styles from './styles/hero.module.css'
import Image from 'next/image'

export interface HeroProps {
  heroSvg?: string
}

const Hero = ({ heroSvg }: HeroProps) => (
  <div className={styles['hero']}>
    <div className="flex flex-wrap-reverse items-center my-auto lg:flex-wrap content">
      <V className="w-full lg:w-6/10" style={setAnim({y: '200%', r: '6deg', time: '1.5s'})}>
        <div className="overflow-hidden text-black uppercase">
          <div className="sm:w-4/10 animate">
            <Image src="/images/logo.png" width="591" height="157"/>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="overflow-hidden uppercase">
            <div className="animate">
              <h1
                className={`${styles['subtitle']} gradient leading-none flex flex-col`}
              >En equipo<br/><span className="pl-1 font-bold leading-none sm:text-7xl">logramos +</span></h1>
            </div>
          </div>
          <div className="mt-4 overflow-hidden">
            <div className="font-light animate t-p text-kmb-gray-500" style={setAnim({y: '400%'})}>
              <p>Enfoque estratégico Fedecamaras Nueva Esparta 2021-2023</p>
            </div>
          </div>

          <div className="mt-6 overflow-hidden">
            <div className="flex animate t-p" style={setAnim({y: '0', x: '0', r: '0deg', d: '800ms'})}>
              <Link href="/#introduccion">
                <a className="flex p-4 mr-auto font-bold rounded-lg transform duration-200 hover:scale-95 bg-gradient-to-br to-kmb-blue-600 font-title via-kmb-blue-500 from-kmb-blue-300">Conoce los detalles</a>
              </Link>
            </div>
          </div>
        </div>
      </V>
      <V className="w-full lg:w-4/10 animate heroImg" style={setAnim({ x: '1rem', d: '800ms' })}>
        <div className="mx-auto lg:pl-16 w-6/10 h-6/10 lg:w-full" dangerouslySetInnerHTML={{__html: heroSvg}}/>
      </V>
      <style jsx global>{`
        .heroImg svg {
          width: 100% !important;
        }
        `}
      </style>
    </div>
  </div>
)

export default Hero

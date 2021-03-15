import V, { setAnim } from '@/components/viewport'
import styles from './styles/hero.module.css'

export interface HeroProps {
  heroSvg?: string
}

const Hero = ({ heroSvg }: HeroProps) => (
  <div className={styles['hero']}>
    <div className="flex flex-wrap-reverse items-center my-auto lg:flex-wrap content">
      <V className="w-full lg:w-1/2" style={setAnim({y: '200%', r: '6deg', time: '1.5s'})}>
        <div className="flex flex-col uppercase">
          <div className="overflow-hidden">
            <div className="animate">
              <h1
                className={`${styles['title']} gradient py-2`}
              >Somos equipo</h1>
            </div>
          </div>
          <div className="overflow-hidden">
            <div className="animate">
              <h2
                className={`${styles['subtitle']} gradient`}
                style={{transitionDelay: '300ms'}}
              >En equipo <span className="font-bold">logramos +</span></h2>
            </div>
          </div>
        </div>
      </V>
      <V className="w-full lg:w-1/2 animate heroImg" style={setAnim({ x: '1rem' })}>
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

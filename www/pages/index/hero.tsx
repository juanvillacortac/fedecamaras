import V, { setAnim } from '@/components/viewport'
import styles from './styles/hero.module.css'

export interface HeroProps {
}

const Hero = ({}: HeroProps) => (
  <div className={styles['hero']}>
    <div className="flex content">
      <V className="flex flex-col text-blue-800 uppercase" style={setAnim({y: '200%', r: '8deg', time: '1.5s'})}>
        <div className="overflow-hidden">
          <h1
            className={`${styles['title']} animate`}
          >Fedecamaras</h1>
        </div>
        <div className="overflow-hidden">
          <h2
            className={`${styles['subtitle']} animate`}
            style={{transitionDelay: '200ms'}}
          >En equipo <span className="font-bold">logramos +</span></h2>
        </div>
      </V>
    </div>
  </div>
)

export default Hero

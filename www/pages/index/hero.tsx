import V, { setAnim } from '@/components/viewport'
import styles from './styles/hero.module.css'

export interface HeroProps {
}

const Hero = ({}: HeroProps) => (
  <div className={styles['hero']}>
    <div className="flex content">
      <V className="flex flex-col text-blue-800 uppercase" style={setAnim({x: '-0.5rem'})}>
        <h1
          className={`${styles['title']} animate`}
        >Fedecamaras</h1>
        <h2
          className={`${styles['subtitle']} animate`}
          style={{transitionDelay: '100ms'}}
        >En equipo <span className="font-bold">logramos +</span></h2>
      </V>
    </div>
  </div>
)

export default Hero

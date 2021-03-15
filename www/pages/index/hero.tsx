import V, { setAnim } from '@/components/viewport'
import styles from './styles/hero.module.css'

export interface HeroProps {
}

const Hero = ({}: HeroProps) => (
  <div className={styles['hero']}>
    <div className="flex content">
      <V style={setAnim({y: '200%', r: '6deg', time: '1.5s'})}>
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
    </div>
  </div>
)

export default Hero

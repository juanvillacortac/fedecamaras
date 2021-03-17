import V, { setAnim } from '@/components/viewport'
import styles from './styles/hero.module.css'

const Hero = () => (
  <div className={styles['hero']}>
    <div className="flex flex-wrap-reverse items-center py-24 my-auto lg:flex-wrap content-lg">
      <V className="w-full" style={setAnim({y: '200%', r: '6deg', time: '1.5s'})}>
        <div className="flex flex-col">
          <div className="overflow-hidden uppercase">
            <div className="animate">
              <h1
                className={`${styles['subtitle']} gradient leading-none flex flex-col`}
              >Últimas<br/><span className="pl-1 font-bold leading-none sm:text-7xl">noticias</span></h1>
            </div>
          </div>
        </div>
      </V>
    </div>
  </div>
)

export default Hero

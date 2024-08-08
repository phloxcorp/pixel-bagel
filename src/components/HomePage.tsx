import { LegacyRef } from 'react'
import styles from './HomePage.module.scss'
import planet from '@images/planet.png'
import Background from './Background'
import FadeUp from './FadeUp'

export default function HomePage({ element }: { element: LegacyRef<HTMLDivElement> | null }) {
  return (
    <div className={styles.container} ref={element}>
      <Background />
      <div className={styles.background}>
        <FadeUp>
          <div className={styles.main}>
            <img className={styles.planet} src={planet} alt="planet" width={220} />
            <p className={styles.title}>GAMES MADE<br />FOR EVERYONE</p>
            <p className={styles.subTitle}>Crafting Experiences That Bring People Together</p>
          </div>
        </FadeUp>
      </div>
    </div>
  )
}
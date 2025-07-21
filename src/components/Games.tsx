import styles from './Games.module.scss'
// import appleStore from '@images/logo_apple_store.png'
import googlePlay from '@images/logo_google_play.png'
import toss from '@images/logo-toss-symbol-alpha.png'
import { games } from '../data/games'
import { LegacyRef } from 'react'
import FadeUp from './FadeUp'

export default function Games({ element }: { element: LegacyRef<HTMLDivElement> | null }) {
  return (
    <div className={styles.container} ref={element}>
      <p>OUR GAMES</p>
      <FadeUp>
        <div 
          className={styles.games}
          style={games.length < 4 ? 
            { gridTemplateColumns: `repeat(${games.length}, minmax(0, 260px))` } : {}}
        >
          {games.map((game) => {
            return (
              <div key={game.name} className={styles.gameContainer}>
                <div className={styles.gameImage}>
                <img className={styles.image} src={game.image} alt="game_img" />
                </div>
                <span className={styles.name} >{game.name}</span>
                <div className={styles.logoContainer}>
                  {/* <a className={styles.logo} href={game.appleStore} target='_blank'>
                    <img src={appleStore} alt="apple_store" width={20} />
                  </a> */}
                  <a className={styles.logo} href={game.googlePlay} target='_blank'>
                    <img src={googlePlay} alt="google_play" width={20} />
                  </a>
                  {game.toss && (
                  <a className={styles.logo} href={game.toss} target='_blank' >
                    <img src={toss} alt="toss" style={{
                        width: '32px',
                        height: '32px',
                      }} />
                  </a>
                  )}
                </div>
              </div>
            )})}
        </div>
      </FadeUp>
    </div>
  )
}

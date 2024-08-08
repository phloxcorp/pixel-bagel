import { useState } from 'react'
import styles from './Navbar.module.scss'
import logo from '@images/pixel_bagel_logo.png'
import cn from 'classnames'

export default function Navbar({ onMoveToAbout, onMoveToGames }: {
  onMoveToAbout: () => void,
  onMoveToGames: () => void
}) {
  const [current, setCurrent] = useState('ABOUT')
  
  const clickMenu = (menu: string) => {
    setCurrent(menu)
    if (menu === 'ABOUT') {
      onMoveToAbout()
    } else {
      onMoveToGames()
    }
  }

  return (
    <div className={styles.navContainer}>
      <div className={styles.navbar}>
        <img src={logo} alt="logo" width={165} />
        <div className={styles.menu}>
          {['ABOUT', 'GAMES'].map((menu) => {
            return (
              <button 
                key={menu}
                onClick={() => clickMenu(menu)} 
                className={cn({ [styles.click]: current === menu })}
              >
                {menu}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
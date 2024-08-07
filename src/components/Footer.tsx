import styles from './Footer.module.scss'
import logo from '/images/pixel_bagel_gray.png'

export default function Footer() {
  return (
    <div className={styles.container}>
      <img src={logo} alt="logo"  width={200} />
      <p>Copyright © Pixel Bagel Studio 2024</p>
      <div className={styles.info}>
        <a href='https://phlox.notion.site/Terms-of-Service-874785b54b8b424baf9bbeb29fee9b1a?pvs=4' target='_blank'>
          Terms of Service
        </a>
        <span>|</span>
        <a href='https://phlox.notion.site/Privacy-Policy-7a3184727de3459984909a0bceb9e0ce?pvs=4' target='_blank'>
          Privacy Policy
        </a>
      </div>
    </div>
  )
}
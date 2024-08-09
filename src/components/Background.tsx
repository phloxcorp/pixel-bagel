import styles from './Background.module.scss'
import cn from 'classnames'

export default function Background() {
  return (
    <div className={styles.container}>
      {Array(25).fill(0).map((_, i) => <Star key={i} />)}
      {Array(4).fill(0).map((_, i) => <Meteor key={i} order={i}/>)}
    </div>
  )
}

function Star() {
  const screenWidth = screen.width;
  const screenHeight = screen.height;

  function getRandomValue(max: number) {
    return Math.floor(Math.random() * max);
  }

  const _s = getRandomValue(3);
  const _o = getRandomValue(5);
  const _t = getRandomValue(6);
  const x = getRandomValue(screenWidth);
  const y = getRandomValue(screenHeight);

  const size = [`${styles.size1}`, `${styles.size2}`, `${styles.size3}`];
  const opacity = [
    `${styles.opacity1}`, 
    `${styles.opacity1}`, 
    `${styles.opacity1}`, 
    `${styles.opacity2}`, 
    `${styles.opacity3}`
  ];
  const twinkle = [
    `${styles.twinkle1}`,
    `${styles.twinkle1}`,
    `${styles.twinkle1}`,
    `${styles.twinkle2}`,
    `${styles.twinkle2}`,
    `${styles.twinkle3}`,
  ];

  return (
    <div 
      className={`${styles.star} ${size[_s]} ${opacity[_o]} ${twinkle[_t]}`}
      style={{ 
        top: `${y}px`, 
        left: `${x}px`, 
        animationDelay: `${(Math.random() * 2).toFixed(1)}s` 
      }}
    />
  )
}

function Meteor({ order }: { order: number }) {
  const position = [
    `${styles.position1}`,
    `${styles.position2}`,
    `${styles.position3}`,
    `${styles.position4}`,
  ]

  return (
    <div className={cn(styles.meteor, position[order], {
      [styles.mobileMeteor]: order === 1 || order === 2
    })}/>
  )
}
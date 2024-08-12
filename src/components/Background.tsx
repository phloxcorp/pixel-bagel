import styles from './Background.module.scss'
import cn from 'classnames'

type Star = {
  size: string
  twinkle: string
  x: number
  y: number
}

const stars = [
  {
    size: styles.size1,
    twinkle: styles.twinkle1,
    x: 20,
    y: 20,
  },
  {
    size: styles.size2,
    twinkle: styles.twinkle2,
    x: 25,
    y: 40,
  },
  {
    size: styles.size3,
    twinkle: styles.twinkle1,
    x: 85,
    y: 90,
  },
  {
    size: styles.size1,
    twinkle: styles.twinkle1,
    x: 30,
    y: 70,
  },
  {
    size: styles.size2,
    twinkle: styles.twinkle2,
    x: 45,
    y: 35,
  },
  {
    size: styles.size3,
    twinkle: styles.twinkle1,
    x: 40,
    y: 85,
  },
  {
    size: styles.size2,
    twinkle: styles.twinkle3,
    x: 75,
    y: 30,
  },
  {
    size: styles.size3,
    twinkle: styles.twinkle2,
    x: 10,
    y: 70,
  },
  {
    size: styles.size1,
    twinkle: styles.twinkle1,
    x: 70,
    y: 20,
  },
  {
    size: styles.size2,
    twinkle: styles.twinkle1,
    x: 40,
    y: 60,
  },
  {
    size: styles.size3,
    twinkle: styles.twinkle2,
    x: 60,
    y: 40,
  },
  {
    size: styles.size1,
    twinkle: styles.twinkle3,
    x: 55,
    y: 50,
  },
]


export default function Background() {
  return (
    <>
      {stars.map((star, i) => <Star key={i} star={star} />)}
      {Array(2).fill(0).map((_, i) => <Meteor key={i} order={i}/>)}
    </>
  )
}

function Star({ star }: { star: Star }) {
  return (
    <div
      className={cn(styles.star, star.size, star.twinkle)}
      style={{
        top: `${star.y}%`,
        left: `${star.x}%`,
      }}
    />
  )
}

function Meteor({ order }: { order: number }) {
  const position = [
    `${styles.position1}`,
    `${styles.position2}`
  ]

  return (
    <div className={`${styles.meteor} ${position[order]}`}/>
  )
}
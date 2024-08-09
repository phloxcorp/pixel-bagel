import styles from './Background.module.scss'
import styled from 'styled-components'
import cn from 'classnames'

export default function Background() {
  return (
    <div className={styles.container}>
      {Array(25).fill(0).map((_, i) => <Star key={i} />)}
      <Meteor duration={3.5} />
      <Meteor left={810} width={80} posx={10} posy={28} duration={4.5} />
      <Meteor left={200} width={70} posx={9} posy={24} duration={5.5} isMobile />
      <Meteor left={570} width={80} posx={10} posy={28} duration={5} isMobile />
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

function Meteor({ 
  left,
  width,
  posx,
  posy,
  duration,
  isMobile
}: { 
  left?: number 
  width?: number
  posx?: number
  posy?: number
  duration?: number
  isMobile?: boolean
}) {

  return (
    <MeteorStyles 
      className={cn(styles.meteor, { [styles.mobileMeteor]: isMobile })} 
      $left={left} 
      $width={width} 
      $posx={posx} 
      $posy={posy} 
      $duration={duration} 
    />
  )
}

const MeteorStyles = styled.div<{ 
  $left?: number
  $width?: number
  $posx?: number
  $posy?: number
  $duration?: number
}>`
  left: ${(props) => props.$left}px;
  animation: meteor ${(props) => props.$duration}s infinite;

  &:after {
    width: ${(props) => props.$width}px;
    left: -${(props) => props.$posx}px;
    top: -${(props) => props.$posy}px;
  }

  @keyframes meteor {
    0% {
      top: -10vh;
      transform: translateX(0px);
    }
    100% {
      top: 110vh;
      transform: translateX(-120vh);
    }
  }
`
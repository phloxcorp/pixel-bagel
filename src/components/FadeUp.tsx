import { useEffect, useRef, useState } from 'react';
import styles from './FadeUp.module.scss'
import cn from 'classnames'

export default function FadeUp({ children }: { children: React.ReactNode }) {
  const [fadeIn, setFadeIn] = useState(false)
  const targetElement = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
           setFadeIn(true)
          } else {
            setFadeIn(false)
          }
        });
      },
      { threshold: 0.1 }
    );

    if (targetElement.current) {
      observer.observe(targetElement.current);
    }

    return () => {
      if (targetElement.current) {
        observer.unobserve(targetElement.current);
      }
    };

  }, [])

  return (
    <div ref={targetElement} className={cn(styles.fadeWrap, { [styles.fadeIn]: fadeIn })}>
      {children}
    </div>
  )
}
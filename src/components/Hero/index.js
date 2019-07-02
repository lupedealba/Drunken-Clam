import * as React from 'react'
import styles from './styles.module.css'
import classnames from 'classnames'

// function Hero({ miniHero }) {
  function Hero() {
  // Always add .hero from styles.module.css
// const classes = classnames('hero', 'hero-lg', 'mb-3', styles.hero)

// Only add the .hero class when some condition is true
const classes = classnames('hero', 'hero-lg', 'mb-3', {
  [styles.hero]: conditional
})

  // const classes = classnames(styles.hero, 'hero', 'mb-3', {
  //   'hero-sm': miniHero,
  //   [styles.miniHero]: miniHero,
  //   'hero-lg': !miniHero
  // })



  return (
    <div className="hero hero-lg mb-3">
      <div className="hero-body text-center text-light">

      {/* <h1 className={styles.hero}>Real Estate Finder</h1> */}
        <h1>Real Estate Finder</h1>
        <p className="mb-0">Bringing property right to your fingertips</p>
      </div>
    </div>
  )
}

export default Hero
import { useState } from 'react'
import Link from 'next/link'

import Button from './button'

import styles from '../../styles/elements/Header.module.scss'

const Header = ({ isTop }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  return (
    <div
      className={`${styles.headerMenu} ${isTop ? 'header-menu__isTop' : ''}`}
    >
      <div className={styles.logoContainer}>
        <Link href="/">
          <img
            className={styles.headerMenuLogo}
            src="/RECOVER-logo.svg"
            alt="Recover Logo"
          />
        </Link>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.linkContainer}>
          <a
            className={styles.link}
            href="https://app.recover.ws/"
            target="_blank"
          >
            APPLICATION
          </a>
        </div>
        <div className={styles.linkContainer}>
          <Link href="/blog">
            <a className={styles.link}>BLOG</a>
          </Link>
        </div>
        <div className={styles.linkContainer}>
          <Link href="/about">
            <a className={styles.link}>ABOUT</a>
          </Link>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/loser-box">
          <Button isPrimary>Get Your Loser Box</Button>
        </Link>
      </div>
      <div
        className={styles.burgerMenu}
        onClick={() => setShowSidebar(!showSidebar)}
      >
        <div className={styles.burgerMenuBar}></div>
        <div className={styles.burgerMenuBar}></div>
        <div className={styles.burgerMenuBar}></div>
      </div>
      {showSidebar ? (
        <div className={styles.sidebar}>
          <div
            className={styles.crossButton}
            onClick={() => setShowSidebar(false)}
          >
            X
          </div>
          <div className={styles.linkContainer}>
            <a
              className={styles.link}
              href="https://app.recover.ws/"
              target="_blank"
            >
              APPLICATION
            </a>
          </div>
          <div className={styles.linkContainer}>
            <Link href="/blog">
              <a className={styles.link}>BLOG</a>
            </Link>
          </div>
          <div className={styles.linkContainer}>
            <Link href="/about">
              <a className={styles.link}>ABOUT</a>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default Header

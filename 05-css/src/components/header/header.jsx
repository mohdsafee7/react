import React from 'react'
import styles from './header.module.css'

const header = () => {
  return (
    <div className={styles.header}>
      <p className={styles.logo}>Movies</p>
      <button>18+ Content</button>
    </div>
  )
}

export default header

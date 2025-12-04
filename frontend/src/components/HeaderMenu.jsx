import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/HeaderMenu.module.css'

const HeaderMenu = () => {
  return (
    <div className={styles.links}>
    
                    <Link to="/" className={styles.link}>
                        <div>Home</div>
                    </Link>
    
                    <Link to="/uitslagen" className={styles.link}>
                        <div >Wedstrijden</div>
                    </Link>
    
                    <Link to="/recent" className={styles.link}>
                        <div >Recent</div>
                    </Link>
    
                    <Link to='/stand' className={styles.link}>
                        <div >Stand</div>
                    </Link>
                    <Link to='/clubinfo' className={styles.link}>
                        <div >Clubs</div>
                    </Link>
    
    
                </div>
  )
}

export default HeaderMenu
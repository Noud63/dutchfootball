import React from 'react'
import styles from '../styles/Header.module.css'
import HeaderMenu from './HeaderMenu';
import logo from '../images/eredivisielogo.png'

const Header = () => {

    const [scrolled, setScrolled] = React.useState(true);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setScrolled(false);
        }
        else {
            setScrolled(true);
        }
    }
    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    })

    return (
        <div className={scrolled ? styles.header : styles.header + ' ' + styles.scrolled}>

            <div className={styles.eredivisie}>
                <img src={logo} alt="Eredivisie Logo" className={styles.logo} />
                KNVB Eredivisie 2025-2026
                </div>

            <HeaderMenu />

        </div>
    )
}

export default Header

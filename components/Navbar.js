import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import {DM_Serif_Display} from 'next/font/google'

const dm_serif_display = DM_Serif_Display({ subsets: ['latin'] ,weight:'400'})

function Navbar() {
    return (
        <nav className={`${styles.mainnav} ${dm_serif_display.className}`}>
            <ul>
                <Link href='/'><l className={styles.nav_item}>Home</l></Link>
                <Link href='/about'><l className={styles.nav_item}>About</l></Link>
                <Link href='/blog'><l className={styles.nav_item}>Blog</l></Link>
                <Link href='/contact'><l className={styles.nav_item}>Contact Us</l></Link>
            </ul>
        </nav>
    )
}

export default Navbar
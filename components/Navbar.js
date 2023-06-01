import React from 'react'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import {Roboto_Mono} from 'next/font/google'

const roboto_mono = Roboto_Mono({ subsets: ['latin'] ,weight:'400'})

function Navbar() {
    return (
        <nav className={`${styles.mainnav} ${roboto_mono.className}`}>
            <ul>
                <Link href='/'><l className={styles.nav_item}>Home</l></Link>
                <Link href='/blog'><l className={styles.nav_item}>Blog</l></Link>
                <Link href='/contact'><l className={styles.nav_item}>Contact Us</l></Link>
                <Link href='/about'><l className={styles.nav_item}>About</l></Link>
            </ul>
        </nav>
    )
}

export default Navbar
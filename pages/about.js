import React from 'react'
import styles from '@/styles/About.module.css'
import { Roboto, Roboto_Condensed } from 'next/font/google'
import Image from 'next/image'
import wave from '@/public/wave.png'

const roboto = Roboto({ subsets: ['latin'], weight: '400' })
const roboto_condensed = Roboto_Condensed({ subsets: ['latin'], weight: '700' })


function About() {
  return (
    <>
      {/* <Image
        className={styles.image}
        src={wave}
        alt=''
      /> */}
      <div className={`${styles.container}`}>
        <h2 className={`${roboto_condensed.className} ${styles.heading}`}>About Code - Tales</h2>
        <p className={`${roboto.className}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias quod impedit ex! Voluptatibus nisi doloribus est? Est maxime magni fugit quaerat, eum veritatis iste suscipit natus id architecto nisi nam sed blanditiis, quidem at labore porro obcaecati voluptate ducimus accusantium aut sint deserunt? Commodi ducimus provident rem odio quis, sit tempora natus voluptas excepturi. Blanditiis eius similique eaque labore accusamus id, nesciunt vitae, perspiciatis culpa voluptates odio maiores architecto corporis vel quisquam fuga quibusdam eligendi suscipit iure velit reprehenderit. Dolore sint sed sapiente fugit ad voluptate architecto doloremque, perspiciatis, ea soluta molestiae ipsa? Officia soluta corporis nam, vel modi odio! Molestiae sapiente optio maxime eveniet iure neque quia rem itaque, ad corrupti magnam porro hic officia nobis, facere reprehenderit sit perferendis quae? Esse, totam enim quisquam distinctio ipsum omnis quae, explicabo cumque in mollitia sed at illo recusandae vero modi nobis placeat excepturi. Nostrum minus, quis dolorum quisquam dolore fuga? </p>
      </div>
      <footer className={styles.footer}></footer>
    </>
  )
}

export default About
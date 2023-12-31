import Head from 'next/head'
import Image from 'next/image'
import { DM_Sans } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import coder from '../public/coder_img.jpg'

const dm_sans = DM_Sans({ subsets: ['latin'], weight: '400' })

export default function Home() {
  return (
    <>
      <Head>
        <title>Code Tales - Your Personal coding blog</title>
        <meta name="description" content="A modern blog website for coders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${dm_sans.className}`}>
        <header className={styles.header}>
          <div className={styles.center}>
            <h1>&lt;Code-Tales/&gt;</h1>
            <p> A blog for coders hunting for a bug spray, interactions and loads of fun!!!</p>
          </div>

          <div className={styles.image_wrapper}>
            <Image
              className={styles.image}
              priority
              src={coder}
              alt=''
              width={700}
              height={500}
            />

          </div>
        </header>

        <h2 style={{ marginTop: "2rem", fontSize: "max(2vw,1.4rem)", textAlign: "center" }}>Popular Blog Posts</h2>
        <div className={styles.blogs}>
          <div className={styles.blogpost}>
            <h3>How to install NextJS?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam dolore at modi praesentium ipsum ex corrupti sequi, fuga, eos iure. Dolor, asperiores repudiandae error recusandae eveniet sint consectetur quae autem nesciunt rem dolorem!</p>
          </div>
          <div className={styles.blogpost}>
            <h3>How to install NextJS?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam dolore at modi praesentium ipsum ex corrupti sequi, fuga, eos iure. Dolor, asperiores repudiandae error recusandae eveniet sint consectetur quae autem nesciunt rem dolorem!</p>
          </div>
          <div className={styles.blogpost}>
            <h3>How to install NextJS?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam dolore at modi praesentium ipsum ex corrupti sequi, fuga, eos iure. Dolor, asperiores repudiandae error recusandae eveniet sint consectetur quae autem nesciunt rem dolorem!</p>
          </div>
        </div>
      </main>
    </>
  )
}

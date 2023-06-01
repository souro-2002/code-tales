import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import { Roboto } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'

const roboto = Roboto({
  subsets: ['latin'],
  weight: "500"
})
const url = "http://localhost:3000"

function Blog() {
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    const api = async () => {
      const response = await fetch(`${url}/api/blogs`)
      const parsed = await response.json()
      return parsed;
    }
    api().then((parsed) => {
      setBlogs(parsed)
    })
  }, [])

  return (
    <>
      <Head>
        <title>Blogs</title>
      </Head>
      <h2 className={`${styles.blog_heading} ${roboto.className}`}>Popular Blog Posts</h2>
      <div className={`${styles.blogs} ${roboto.className}`}>
        {blogs.map((item) => {
          return <Link key={item.title} href={`/blogpost/${item.slug}`}>
            <div className={styles.blogpost}>
              <h3>{item.title}</h3>
              <p>{item.content.substr(0,100) + "....."}</p>
            </div></Link>
        })}

        {/* <div className={styles.blogpost}>
          <h3>How to install NextJS?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam dolore at modi praesentium ipsum ex corrupti sequi, fuga, eos iure. Dolor, asperiores repudiandae error recusandae eveniet sint consectetur quae autem nesciunt rem dolorem!</p>
        </div>
        <div className={styles.blogpost}>
          <h3>How to install NextJS?</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias totam dolore at modi praesentium ipsum ex corrupti sequi, fuga, eos iure. Dolor, asperiores repudiandae error recusandae eveniet sint consectetur quae autem nesciunt rem dolorem!</p>
        </div> */}
      </div>
    </>
  )
}

export default Blog
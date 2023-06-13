import React, { useState } from 'react'
import styles from '@/styles/Blog.module.css'
import { Roboto } from 'next/font/google'
import Head from 'next/head'
import Link from 'next/link'

import * as fs from 'fs'

const roboto = Roboto({
  subsets: ['latin'],
  weight: "500"
})
const url = "http://localhost:3000"

function Blog(props) {
  const [blogs, setBlogs] = useState(props.allBlogs)
  return (
    <>
      <Head>
        <title>Code Tales - Blog</title>
        <meta name="description" content="A modern blog website for coders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h2 className={`${styles.blog_heading} ${roboto.className}`}>Popular Blog Posts</h2>
      <div className={`${styles.blogs} ${roboto.className}`}>
        {blogs.map((item) => {
          return <Link key={item.title} href={`/blogpost/${item.slug}`}>
            <div className={styles.blogpost}>
              <h3>{item.title}</h3>
              <p>{item.content.substr(0, 100) + "....."}</p>
            </div></Link>
        })}

      </div>
    </>
  )
}

// export async function getServerSideProps(context) {
//   let allBlogs = await fetch(`${url}/api/blogs`)
//   allBlogs = await allBlogs.json()
//   return {
//     props: {allBlogs}
//   };
// }

export async function getStaticProps(context) {
  const data = await fs.promises.readdir("blogData");
  let myfile;
  let allBlogs = [];
  for (let index = 0; index < data.length; index++) {
    const item = data[index];
    myfile = await fs.promises.readFile(`blogData/${item}`, 'utf-8');
    myfile = JSON.parse(myfile)
    allBlogs.push(myfile)
  }
  return {
    props: { allBlogs }
  };
}

export default Blog
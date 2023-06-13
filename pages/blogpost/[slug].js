import { Lato } from 'next/font/google'
import styles from '@/styles/BlogPost.module.css'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import * as fs from 'fs'
import Head from 'next/head'

const lato = Lato({
  subsets: ['latin'],
  weight: ["700", "400"]
})

function Slug(props) {
  const router = useRouter()
  const [blog, setBlog] = useState(props.myblog)
  if (router.isFallback) return (<div>Loading...</div>)

  return (
    <>
      <Head>
        <title>{blog?.title}</title>
        <meta name="description" content="A modern blog website for coders" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${styles.container} ${lato.className}`}>
        <h1 className={`${lato.className}`}>{blog?.title}</h1>
        <p className={styles.content}>{blog && blog?.content}</p>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  let allb = await fs.promises.readdir('blogData')
  allb = allb.map((item) => {
    return { params: { slug: item.split('.')[0] } }
  })

  return {
    paths: allb,
    fallback: true
  };
}

export async function getStaticProps(context) {
  let { slug } = context.params;
  let myblog = await fs.promises.readFile(`blogData/${slug}.json`, 'utf-8')

  return {
    props: { myblog: JSON.parse(myblog) }
  };
}

// export async function getServerSideProps(context) {
//   const { slug } = context.query
//   let myblog = await fetch(`http://localhost:3000/api/getblog?q=${slug}`)
//   myblog = await myblog.json()
//   return {
//     props: {myblog : myblog.data}
//   };
// }

export default Slug
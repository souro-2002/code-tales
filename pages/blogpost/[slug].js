import { Lato } from 'next/font/google'
import styles from '@/styles/BlogPost.module.css'
import React, { useState } from 'react'

import * as fs from 'fs'

const lato = Lato({
  subsets: ['latin'],
  weight: ["700", "400"]
})

function Slug(props) {
  const [blog, setBlog] = useState(props.myblog)

  return (
    <>
      <div className={`${styles.container} ${lato.className}`}>
        <h1 className={`${lato.className}`}>{blog.title}</h1>
        <p className={styles.content}>{blog && blog.content}</p>
      </div>
    </>
  )
}

export async function getStaticPaths() {
  let allb = await fs.promises.readdir('blogData')
  allb = allb.map((item)=>{
    return { params: { slug : item.split('.')[0] }}
  })

  return {
    paths: allb,
    fallback: true
  };
}

export async function getStaticProps(context) {
  let { slug } = context.params;
  let myblog = await fs.promises.readFile(`blogData/${slug}.json`,'utf-8')

  return {
    props: {myblog:JSON.parse(myblog)}
  };
}

export default Slug
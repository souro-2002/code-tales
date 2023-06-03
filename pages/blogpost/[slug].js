import { useRouter } from 'next/router'
import { Lato } from 'next/font/google'
import styles from '@/styles/BlogPost.module.css'
import React, { useEffect, useState } from 'react'

const lato = Lato({
  subsets: ['latin'],
  weight: ["700", "400"]
})
const url = "http://localhost:3000"

function slug(props) {
  const [blog, setBlog] = useState(props.blog)

  return (
    <>
      <div className={`${styles.container} ${lato.className}`}>
        <h1 className={`${lato.className}`}>{blog && blog.title}</h1>
        <p className={styles.content}>{blog.content}</p>
      </div>
    </>
  )
}

export async function getServerSideProps(context) {
  let { slug } = context.query
  const response = await fetch(`${url}/api/getblog?q=${slug}`)
  const blog = await response.json()

  return {
    props: {blog}
  };
}

export default slug
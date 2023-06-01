import { useRouter } from 'next/router'
import { Lato } from 'next/font/google'
import styles from '@/styles/BlogPost.module.css'
import React, { useEffect, useState } from 'react'

const lato = Lato({
    subsets: ['latin'],
    weight: ["700", "400"]
})
const url = "http://localhost:3000"

function slug() {
    const router = useRouter()
    const [blog, setBlog] = useState({})
    
    useEffect(() => {
        if(!router.isReady) return;
        let { slug } = router.query
        const api = async () => {
          const response = await fetch(`${url}/api/getblog?q=${slug}`)
          const parsed = await response.json()
          return parsed;
        }
        api().then((parsed) => {
          setBlog(parsed)
        })
      }, [router.isReady])

    return (
        <>
            <div className={`${styles.container} ${lato.className}`}>
                <h1 className={`${lato.className}`}>{blog && blog.title}</h1>
                <p className={styles.content}>{blog.content}</p>
            </div>
        </>
    )
}

export default slug
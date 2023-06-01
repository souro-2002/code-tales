import { useRouter } from 'next/router'
import { Lato } from 'next/font/google'
import styles from '@/styles/BlogPost.module.css'
import React from 'react'

const lato = Lato({
    subsets: ['latin'],
    weight: ["700", "400"]
})
const url = "http://localhost:3000"

function slug() {
    const router = useRouter()
    let { slug } = router.query
    return (
        <>
            <div className={`${styles.container} ${lato.className}`}>
                <h1 className={`${lato.className}`}>{(slug)}</h1>
                <p className={styles.content}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores labore debitis natus harum exercitationem voluptas praesentium ullam, necessitatibus officia blanditiis repellendus unde, sunt dolorum et vero, iste nihil obcaecati quod ipsum suscipit aperiam odio. Unde voluptatum fugiat doloribus similique at praesentium ullam iste libero totam. Architecto beatae itaque placeat repellat aperiam. Tenetur dignissimos iste impedit consectetur dolor illum deserunt sit debitis quia voluptatem adipisci accusamus nemo optio numquam, placeat facere, exercitationem cupiditate iusto quis quas nulla reprehenderit autem. Ipsa rerum minima iste molestiae illo, tempore atque non repellat assumenda, veritatis repudiandae temporibus doloribus nobis ex quia nam enim quas culpa.</p>
            </div>
        </>
    )
}

export default slug
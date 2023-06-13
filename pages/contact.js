import React, { useRef, useState } from 'react'
import styles from '@/styles/Contact.module.css'
import Image from 'next/image'
import contact_img from '@/public/contact.jpg'
import { Aleo } from 'next/font/google'

const aleo = Aleo({ subsets: ['latin'], weight: ['400', '700'] })


function Contact() {
  const [creds, setCreds] = useState({ name: '', email: '', phone: '', desc: '' })
  const ref = useRef()

  const onChange = (e) => {
    setCreds({ ...creds, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    ref.current.click()
    let response = await fetch('http://localhost:3000/api/contact', {
      method: "POST",
      body: JSON.stringify({ ...creds })
    })
    response = await response.json()
    if (response.success) alert("Your Concern has been registered successfully")
    else alert("Please fill the form again")
  }
  return (
    <>
      <div className={styles.container}>
        <section className={styles.main_form}>
          <h2 className={`${aleo.className} ${styles.heading}`}>Fill your concerns below</h2>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.mb3}>
              <input onChange={onChange} className={`${aleo.className} ${styles.form_control}`} placeholder='Enter your name' name='name' type="text" aria-describedby="nameHelp" />
            </div>
            <div className={styles.mb3}>
              <input onChange={onChange} className={`${aleo.className} ${styles.form_control}`} placeholder='Enter your email' name='email' type="email" aria-describedby="emailHelp" />
            </div>
            <div className={styles.mb3}>
              <input onChange={onChange} className={`${aleo.className} ${styles.form_control}`} placeholder='Enter your phone number' name='phone' type="text" aria-describedby="phoneHelp" />
            </div>
            <div className={styles.mb3}>
              <textarea onChange={onChange} className={`${styles.form_control} ${aleo.className}`} placeholder='Address your concerns' name="desc" cols="30" rows="10" />
            </div>
            <button type="submit" className={`${styles.btn} ${aleo.className}`}>Submit</button>
            <button style={{ display: "none" }} ref={ref} type="reset"></button>
          </form>
        </section>
        <div className={styles.contact_img}>
          <Image
            className={styles.image}
            priority
            src={contact_img}
            alt=''
            width={620}
            height={620}
          />
        </div>
      </div>
    </>
  )
}

export default Contact
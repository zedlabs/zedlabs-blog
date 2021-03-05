import styles from '../styles/homePage.module.css'

import { useEffect, useState } from 'react'
import Head from 'next/head'
import Post from '../components/post'
import Link from 'next/link'

export default function Home(posts){
  console.log(posts.posts);
  return (
    <html className={styles.topLevel}>
    <body>
    <div className={styles.parent}>
    <div className={styles.titleName}><b>zohaib Ansari</b></div>
    <div className={styles.subtext}><b>Android Developer</b></div>
    <div className={styles.space} />

    <div className={styles.body1}>
    <p className={styles.itemList}>
      <ul className={styles.list}>
        <li>Portfolio</li>
        <li>
          <Link href={'/posts'}>
            <a className={styles.anchor}>Blog</a>
          </Link>
        </li>
        <li>
          <Link href={'https://github.com/zedlabs'}>
            <a className={styles.anchor}>Github</a>
          </Link>
          </li>
        <li>About</li>
      </ul>
    </p>
    <div className={styles.space}/>
    </div>
    </div>
    </body>
    </html>
        )
}
  // <a className={styles.anchor} href="mailto:zohaibansari100@gmail.com">zohaibansari100@gmail.com</a>

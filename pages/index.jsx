import { useEffect, useState } from 'react'
import Head from 'next/head'
import Post from '../components/post'
import Link from 'next/link'

export default function Home(posts){
  console.log(posts.posts);
  return (
    <>
    <div class="header">
      <h1 class="titleName">Zohaib Ansari.</h1>
      <p><h3 class="subtext">Android Developer</h3></p>
    </div>
    <p class="itemList">
      <ul>
        <li>Portfolio</li>
        <li>
          <Link href={'/posts'}>
            <a>Blog</a>
          </Link>
        </li>
        <li>Github</li>
        <li>About</li>
      </ul>
    </p>
    <div class="space" />
    <div class="contacts">
      <>Contact</><br />
        <a href="mailto:zohaibansari100@gmail.com">zohaibansari100@gmail.com</a>
    </div>
    </>
        )
}

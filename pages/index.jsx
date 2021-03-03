import { useEffect, useState } from 'react'
import Head from 'next/head'
import Post from '../components/post'
import Link from 'next/link'

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps(){
  let data = await client.getEntries({
    content_type: 'post'
  })

  return {
    props: {
      posts: data.items
    },
    revalidate: 1
  }
}

export default function Home(posts){
  console.log(posts.posts);
  return (
      <ul>
      {posts.posts.map(article => (
        <li key={article.sys.id}>
          <Link href={'/posts/' + article.fields.slug}>
          <a>{article.fields.title}</a>
          </Link>
        </li>
      ))}
      </ul>
        )
}

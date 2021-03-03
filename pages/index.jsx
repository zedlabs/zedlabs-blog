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
    }
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
//  return (<div></div>)
}

// function HomePage() {
//   async function fetchEntries() {
//     const entries = await client.getEntries()
//     if (entries.items) return entries.items
//     console.log(`Error getting Entries for ${contentType.name}.`)
//   }
//
//   const [posts, setPosts] = useState([])
//
//   useEffect(() => {
//     async function getPosts() {
//       const allPosts = await fetchEntries()
//       setPosts([...allPosts])
//     }
//     getPosts()
//   }, [])
//
//   return (
//     <>
//       <Head>
//         <title>Next.js + Contentful</title>
//         <link
//           rel="stylesheet"
//           href="https://css.zeit.sh/v1.css"
//           type="text/css"
//         />
//       </Head>
//       {posts.length > 0
//         ? posts.map((p) => (
//             <Post
//               alt={p.fields.alt}
//               date={p.fields.date}
//               key={p.fields.title}
//               image={p.fields.image}
//               title={p.fields.title}
//               url={p.fields.url}
//             />
//           ))
//         : null}
//     </>
//   )
// }

//export default HomePage

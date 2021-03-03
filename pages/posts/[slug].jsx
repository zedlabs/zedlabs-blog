import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import Image from "next/image";

const client = require('contentful').createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticPaths(){

  let data = await client.getEntries({
    content_type: 'post'
  })

  return {
    paths: data.items.map(item => ({
      params: {slug: item.fields.slug },
    })),
    fallback: true
  }
}

export async function getStaticProps({ params }){
  let data = await client.getEntries({
    content_type: 'post',
    "fields.slug": params.slug,
  })

  return {
    props: {
      post: data.items[0],
    },
    revalidate: 1,
  }
}

export default function Article({ post }) {
  if(!post) return <div>404</div>;
  return (
    <div>
      {documentToReactComponents(post.fields.body, {
        renderNode: {
          [BLOCKS.EMBEDDED_ASSET]: (node) => (
            <Image
            src={"https:" + node.data.target.fields.file.url}
            width={node.data.target.fields.file.details.image.width}
            height={node.data.target.fields.file.details.image.height}
            />
          )
      }
  })} </div>);
}

import Head from 'next/head'
import Link from 'next/Link'

export default function Post ({post}) {

  return <>
    <Head>
      <title>{post.title}</title>
      <meta name="description" content="Tag meta personnalise pour post demo SEO"/>
    </Head>
    <main>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link href="/">
        <a>
          🏠 Retour
        </a>
      </Link>
    </main>
  </>
}

// Nico_uncomment for static rendering
// export async function getStaticProps ({params}) {
//   const post = await fetch(`http://jsonplaceholder.typicode.com/posts/${params.id}`)
//     .then(r=>r.json())
//   return {
//     props: {
//       post
//     }
//   }
// }

// Nico_uncomment for static rendering
// export async function getStaticPaths () {
//     const posts = await fetch(`http://jsonplaceholder.typicode.com/posts?_limit=5`)
//       .then(r=>r.json())
//     return {
//         paths: posts.map(post => ({
//             params: {id: post.id.toString()}
//           })),
//           fallback: false,
//         }
//       }
      
// Nico_uncomment for server side rendering
export async function getServerSideProps ({params}) {
  const post = await fetch(`http://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then(r=>r.json())
  return {
    props: {
      post
    }
  }
}

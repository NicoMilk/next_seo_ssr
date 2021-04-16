import Head from 'next/head';
import Link from 'next/link';
// import Image from 'next/image';

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={`${post.body}`} />
      </Head>
      <main>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <img
          src={`https://picsum.photos/id/100${post.id}/400/300`}
          alt={`Ceci est une image pour ${post.title}`}
        ></img>
        <br />
        <Link href="/">
          <a>🏠 Retour</a>
        </Link>
      </main>
    </>
  );
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
export async function getServerSideProps({ params }) {
  const post = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${params.id}`
  ).then((r) => r.json());

  return {
    props: {
      post,
    },
  };
}

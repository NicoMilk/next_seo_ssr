import Head from 'next/head';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home({ posts, images, date }) {
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   const timer = setInterval(() => setCount((n) => n + 1), 1000);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <>
      <Head>
        <title>Demo NextJS pour SEO</title>
        <meta
          name="description"
          content="Tag meta personnalise pour demo SEO"
        />
      </Head>
      {/* <h1>Chrono : {count}</h1> */}
      <h1>Date : {date}</h1>
      <h1>Bonjour Monde !</h1>
      <p>ceci est la page d'accueil du site</p>
      <ul>
        {posts.map((post) => (
          <li style={{ listStyle: 'none' }}>
            <Link href={`/blog/${post.id}`}>
              <a>
                <h3>
                  {post.id} - {post.title}
                </h3>
                <img
                  src={`https://picsum.photos/id/100${post.id}/400/300`}
                ></img>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

// Nico_uncomment for static rendering
export async function getStaticProps() {
  const posts = await fetch(
    `http://jsonplaceholder.typicode.com/posts?_limit=5`
  ).then((r) => r.json());

  // const images = await fetch(
  //   `https://picsum.photos/v2/list?limit=5`
  // ).then((r) => r.json());

  return {
    props: {
      posts,
      // images,
      date: new Date().toLocaleTimeString(),
    },
    revalidate: 10,
  };
}

// Nico_uncomment for server side rendering
// export async function getServerSideProps() {
//   const posts = await fetch(
//     `http://jsonplaceholder.typicode.com/posts?_limit=5`
//   ).then((r) => r.json());

//   const images = await fetch(
//     `https://picsum.photos/v2/list?limit=5`
//   ).then((r) => r.json());

//   return {
//     props: {
//       posts,
//       images,
//       // date: new Date().toLocaleTimeString(),
//     },
//   };
// }

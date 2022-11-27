import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getPosts, PostType } from '../lib/post';
import { Layout } from '../src/layout';
import { List } from '../src/list';

export default function Home({ posts }: { posts: PostType[] }) {
  return (
    <>
      <Head>
        <title>Eomttt Log</title>
        <meta name="title" content="Eomttt Log" />
        <meta property="og:title" content="Eomttt Log" />
        <meta property="og:type" content="website" />
      </Head>
      <Layout>
        <List posts={posts} />
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const postList = await getPosts();

  return {
    props: {
      posts: postList,
    },
  };
};

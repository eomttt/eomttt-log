import { GetStaticProps } from 'next';
import { getPosts, PostType } from '../lib/post';
import { Layout } from '../src/layout';
import { List } from '../src/list';

export default function Home({ posts }: { posts: PostType[] }) {
  return (
    <Layout>
      <List posts={posts} />
    </Layout>
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

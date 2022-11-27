import { GetStaticProps } from 'next';
import Head from 'next/head';
import { PostType, getPostData, getPosts } from '../../lib/post';
import { Layout } from '../../src/layout';
import { Post as PostComponent } from '../../src/post';

interface PostProps {
  postData: PostType;
}

export default function Post({ postData }: PostProps) {
  return (
    <>
      <Head>
        <title>{postData.title}</title>
        <meta name="title" content={postData.title} />
        <meta name="description" content={postData.content} />
        <meta property="og:title" content={postData.title} />
        <meta property="og:type" content="website" />
      </Head>
      <Layout>
        <PostComponent className="px-4" postContent={postData.contentHtml} />
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  const postList = await getPosts();
  const paths = postList.map(post => ({
    params: {
      id: `${post.id}`,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (params?.id) {
    const postData = await getPostData(params.id as string);

    return {
      props: {
        postData,
      },
    };
  }

  return {
    props: {},
  };
};

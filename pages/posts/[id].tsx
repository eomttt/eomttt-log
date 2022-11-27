import { GetStaticProps } from 'next';
import { PostType, getPostData } from '../../lib/post';
import { Layout } from '../../src/layout';
import { Post as PostComponent } from '../../src/post';

interface PostProps {
  postData: PostType;
}

export default function Post({ postData }: PostProps) {
  return (
    <Layout>
      <PostComponent className="px-4" postContent={postData.contentHtml} />
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: '1',
        },
      },
    ],
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

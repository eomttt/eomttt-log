import { GetStaticProps } from 'next';
import { ContentData, getContentData } from '../../lib/content';
import { Layout } from '../../src/layout';

interface ContentProps {
  contentData: ContentData;
}

export default function Content({ contentData }: ContentProps) {
  return (
    <Layout>
      <article className="prose max-w-none">
        <div dangerouslySetInnerHTML={{ __html: contentData.contentHtml }} />
      </article>
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
    const contentData = await getContentData(params.id as string);

    return {
      props: {
        contentData,
      },
    };
  }

  return {
    props: {},
  };
};

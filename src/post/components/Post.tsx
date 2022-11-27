interface PostProps {
  postContent: string;
}

const Post = ({ postContent }: PostProps) => (
  <article className="prose max-w-none">
    <div dangerouslySetInnerHTML={{ __html: postContent }} />
  </article>
);

export default Post;

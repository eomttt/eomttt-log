interface PostProps {
  className?: string;
  postContent: string;
}

const Post = ({ className, postContent }: PostProps) => (
  <article className={`prose max-w-none ${className}`}>
    <div dangerouslySetInnerHTML={{ __html: postContent }} />
  </article>
);

export default Post;

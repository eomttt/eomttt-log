import Link from 'next/link';
import { PostType } from '../../../lib/post';
import ListItem from './ListItem';

interface ListProps {
  posts: PostType[];
}

const List = ({ posts }: ListProps) => (
  <>
    {posts.map(post => (
      <Link key={post.id} href={`/posts/${post.id}`}>
        <ListItem post={post} />
      </Link>
    ))}
  </>
);

export default List;

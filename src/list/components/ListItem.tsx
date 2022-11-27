import React from 'react';
import { PostType } from '../../../lib/post';

interface ListItemProps {
  post: PostType;
}

const ListItem = ({ post }: ListItemProps) => (
  <section className="flex flex-col gap-3 hover:bg-gray-100 px-4 py-4 rounded-md">
    <div className="flex gap-1 items-end">
      <span className="font-bold text-2xl">{post.title}</span>
      <span>{post.date}</span>
    </div>
    <span>{post.content}</span>
  </section>
);

export default ListItem;

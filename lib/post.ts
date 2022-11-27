/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable guard-for-in */
import path from 'path';
import * as fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface PostType {
  id: string;
  contentHtml: string;
  title?: string;
  content?: string;
  date?: string;
}

export async function getPostData(id: string): Promise<PostType> {
  const fullPath = path.join('posts', `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export async function getPosts() {
  const postList = [];
  const files = fs.readdirSync('posts');

  const ids = files.reverse().map(file => file.replace('.md', ''));

  for (const id of ids) {
    const post = await getPostData(id);
    postList.push(post);
  }

  return postList;
}

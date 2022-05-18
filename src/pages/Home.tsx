import { FC } from 'react';

import { useAppSelector } from '../app/hooks';
import PostForm from '../features/posts/PostForm';
import { selectAllPosts } from '../features/posts/postSlice';
import { KeyValuePair } from '../interfaces/interfaces';
interface HomeProps {
  title: string;
}

const Home: FC<HomeProps> = ({ title }) => {
  const posts = useAppSelector(selectAllPosts);

  //Sort function
  const sortFunction = (
    arr: KeyValuePair<any>[],
    key: string,
    desending = false
  ) =>
    [...arr].sort((a, b) => {
      if (desending) {
        return a[key].localeCompare(b[key]);
      }
      return b[key].localeCompare(a[key]);
    });

  const sortedPosts = sortFunction(posts, 'title', true);

  return (
    <article>
      <h1>{title}</h1>
      <PostForm />
      <div>
        {sortedPosts.map((post) => (
          <article key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </article>
        ))}
      </div>
    </article>
  );
};
export default Home;

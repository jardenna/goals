import { FC } from 'react';

interface PageProps {
  title: string;
}
const Page: FC<PageProps> = ({ title }) => {
  return (
    <article>
      <h1> {title}</h1>
    </article>
  );
};
export default Page;

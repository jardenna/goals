import { FC } from 'react';

interface ErrorProps {
  text: string;
}

const Error: FC<ErrorProps> = ({ text }) => <div>{text}</div>;

export default Error;

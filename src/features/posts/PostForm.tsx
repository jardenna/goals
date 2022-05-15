import { FC, useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { ChangeEventType, FormEventType } from '../../interfaces/events';
import { postAdded } from './postSlice';
interface PostFormProps {}
const PostForm: FC<PostFormProps> = () => {
  const initialState = {
    title: '',
    content: '',
  };
  const [values, setValues] = useState(initialState);
  const handleChange = (e: ChangeEventType) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };
  const dispatch = useAppDispatch();
  const handleSubmit = (e: FormEventType) => {
    e.preventDefault();
    dispatch(postAdded(values));
    setValues(initialState);
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            id="postTitle"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
          <label htmlFor="postTitle">Post Title:</label>
        </div>
        <div className="input-wrapper">
          <textarea
            id="postContent"
            name="content"
            value={values.content}
            onChange={handleChange}
          />
          <label htmlFor="postContent">Content:</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Save Post
        </button>
      </form>
    </section>
  );
};
export default PostForm;

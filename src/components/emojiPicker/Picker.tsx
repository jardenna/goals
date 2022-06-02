import { useEffect, useRef } from 'react';
import data from '@emoji-mart/data';
import { Picker } from 'emoji-mart';

function EmojiPicker(props: any) {
  const ref: any = useRef();

  useEffect(() => {
    new Picker({ ...props, data });
  }, []);

  const addEmoji = (e: any) => {
    console.log(e);
  };
  return (
    <>
      <div ref={ref} onClick={addEmoji} />
    </>
  );
}

export default EmojiPicker;

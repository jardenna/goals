import { useEffect, useRef } from 'react';
import data from '@emoji-mart/data';
import { Picker } from 'emoji-mart';

function EmojiPicker(props: any) {
  const ref: any = useRef();

  useEffect(() => {
    new Picker({ ...props, data, ref });
  }, []);

  return (
    <>
      <div ref={ref} onClick={props.onEmojiSelect} />
    </>
  );
}

export default EmojiPicker;

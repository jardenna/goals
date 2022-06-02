import { FC } from 'react';
import EmojiPicker from './Picker';
interface EmojiPickerProps {}
const EmojiPickerBody: FC<EmojiPickerProps> = () => {
  return (
    <div>
      <EmojiPicker onEmojiSelect={(e: any) => console.log(e.native)} />
    </div>
  );
};
export default EmojiPickerBody;

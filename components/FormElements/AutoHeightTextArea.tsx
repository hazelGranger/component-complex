import { ChangeEvent, useState } from 'react';
import useAutoHeightTextArea from '../../hooks/useAutoHeightTextArea';
import styles from './AutoHeightTextArea.module.css';

export default function AutoHeightTextArea() {
  const [value, setValue] = useState('');
  const { textAreaRef } = useAutoHeightTextArea(value);
  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <textarea
      className={styles.autoHeightTextarea}
      rows={1}
      ref={textAreaRef}
      onChange={handleTextAreaChange}
    ></textarea>
  );
}

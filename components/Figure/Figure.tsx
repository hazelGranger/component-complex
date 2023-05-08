import styles from './Figure.module.css';
import { CSSProperties, ReactNode } from 'react';

type FigureProps = CSSProperties & {
  caption?: string;
  children: ReactNode;
};

const Figure: React.FC<FigureProps> = ({
  caption,
  children,
  maxWidth,
  width,
}: FigureProps) => {
  return (
    <figure style={{ maxWidth, width }}>
      {children}
      <figcaption className={styles.figureCaption}>{caption}</figcaption>
    </figure>
  );
};

export default Figure;

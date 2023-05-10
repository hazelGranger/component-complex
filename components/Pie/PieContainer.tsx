import { PieContainerProps } from '../../types/pie';

export default function PieContainer({
  viewBox,
  style,
  textAnchor,
  fontFamily,
  children,
}: PieContainerProps) {
  return (
    <svg
      viewBox={viewBox}
      style={style}
      textAnchor={textAnchor}
      fontFamily={fontFamily}
    >
      {children}
    </svg>
  );
}

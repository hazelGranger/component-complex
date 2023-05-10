import { theme_colors } from '../../constants/colors';
import { FortuneWheelButtonProps } from '../../types/pie';
import styles from './FortuneWheel.module.css';

export const FortuneWheelButton = ({
  handleSpin,
  radius,
  text,
}: FortuneWheelButtonProps) => {
  return (
    <g onClick={handleSpin} className={styles.fortuneWheelButton}>
      <circle r={radius} fill={theme_colors.react_blue}></circle>
      <polygon
        points="90,-20 90,20 120,0"
        style={{
          fill: theme_colors.react_blue,
          stroke: theme_colors.react_blue,
          strokeWidth: 1,
        }}
      />
      <text fontSize="26" fontWeight="bold" fill="#fff">
        {text}
      </text>
    </g>
  );
};

import { CSSProperties, ReactNode } from 'react';

export interface PieDataItem {
  [key: string]: any;
}

export type PieChartProps = {
  pieData: PieDataItem[];
  valueAttribute: keyof PieDataItem;
  textAttribute: keyof PieDataItem;
  width: string;
  innerRadius: number;
  outerRadius: number;
  cornerRadius: number;
  padRadius: number;
};

export type FortuneWheelProps = PieChartProps & {
  spinMaximumTimeInSeconds: number;
};

export type PieContainerProps = {
  viewBox: string;
  style?: CSSProperties;
  textAnchor: string;
  fontFamily: string;
  children: ReactNode;
};

export type PieSliceProps = {
  d: string;
  textTransform: string;
  label: string;
  value?: number | string;
  color: string;
};

export type FortuneWheelButtonProps = {
  handleSpin: () => void;
  radius: number;
  text: string;
};

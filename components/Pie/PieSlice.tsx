type PieSliceProps = {
    d: any;
    textTransform: string;
    label: string;
    value: number | string;
    color: string;
}

export default function PieSlice({ d, textTransform, label, value, color }: PieSliceProps) {
    return (
      <g>
        <path fill={color} d={d}></path>
        <text fill="white" transform={textTransform}>
          <tspan x="0" fontSize="26" fontWeight="bold">
            {label}
          </tspan>
          <tspan x="0" fontSize="26" fontWeight="bold" dy="30">
            {value}
          </tspan>
        </text>
      </g>
    );
  }
  
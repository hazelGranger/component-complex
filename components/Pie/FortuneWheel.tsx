import { pie, arc, PieArcDatum, pointer, color } from 'd3';
import PieContainer from './PieContainer';
import PieSlice from './PieSlice';
import { useMemo, useState } from 'react';
import { FortuneWheelProps, PieDataItem } from '../types/pie';
import { chart_colors as colors } from '../../constants/colors';
import { FortuneWheelButton } from './FortuneWheelButton';
import styles from './FortuneWheel.module.css';

export default function FortuneWheel({
  pieData,
  valueAttribute,
  textAttribute,
  width,
  innerRadius,
  outerRadius,
  cornerRadius,
  padRadius,
  spinMaximumTimeInSeconds,
}: FortuneWheelProps) {
  const pieArcData = useMemo(
    () =>
      pie<PieDataItem>().value((d: PieDataItem) => d[valueAttribute])(pieData),
    [pieData, valueAttribute]
  );

  const arcPie = useMemo(
    () =>
      arc<PieArcDatum<PieDataItem>>()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .padRadius(padRadius)
        .padAngle(2 / padRadius)
        .cornerRadius(cornerRadius),
    [innerRadius, outerRadius, padRadius, cornerRadius]
  );

  const [rotateAngle, setRotateAngle] = useState(0);
  const [result, setResult] = useState(null);

  const generateRandomNumber = (maximum: number) => {
    return Math.floor(Math.random() * maximum);
  };

  const handleSpin = () => {
    const spinToIndex = generateRandomNumber(pieArcData.length);
    const spinToItem = pieData[spinToIndex];
    const total = pieData.reduce((ac, v) => ac + v[valueAttribute], 0);

    const turns = generateRandomNumber(7) + 1; // rotate 0 - 5 turns
    const angleBefore = pieData.reduce((ac, v, i) => {
      return i < spinToIndex ? ac + v[valueAttribute] : ac + 0;
    }, 0);

    const leastAngle =
      ((spinToItem[valueAttribute] * Math.random() + angleBefore) / total) *
      360;

    const angle = leastAngle + turns * 360 - 90;

    setResult(null);
    setRotateAngle(-angle);
    setTimeout(() => {
      setResult(spinToItem[textAttribute]);
    }, spinMaximumTimeInSeconds * 1000);
  };

  return (
    <>
      <PieContainer
        viewBox={'-320 -320 640 640'}
        style={{
          maxWidth: width,
        }}
        textAnchor="middle"
        fontFamily="sans-serif"
      >
        <g
          style={{
            transform: `rotate(${rotateAngle}deg)`,
            transition: `transform ${spinMaximumTimeInSeconds}s ease-in-out`,
          }}
        >
          {pieArcData.map((d, i) => (
            <PieSlice
              key={i}
              d={arcPie(d) ?? ''}
              textTransform={`translate(${arcPie
                .centroid(d)
                .join(',')}) rotate(${
                (((d.endAngle + d.startAngle) / 2) * 180) / Math.PI - 90
              })`}
              label={d.data[textAttribute]}
              color={colors[i % colors.length]}
            />
          ))}
        </g>
        <FortuneWheelButton
          handleSpin={handleSpin}
          radius={innerRadius}
          text="spin"
        />
      </PieContainer>
      {result && (
        <h2 className={styles.fortuneWheelResult}>The result is {result}</h2>
      )}
    </>
  );
}

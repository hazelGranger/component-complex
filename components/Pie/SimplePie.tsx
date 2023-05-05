import { pie, arc, PieArcDatum } from 'd3'
import PieContainer from './PieContainer'
import PieSlice from './PieSlice'
import { useMemo } from 'react'
import { PieChartProps, PieDataItem } from '../types/pie'

export default function SimplePieChart({
  pieData,
  valueAttribute,
  textAttribute,
  width,
  innerRadius,
  outerRadius,
  cornerRadius,
  padRadius,
}: PieChartProps) {
  const pieArcData = useMemo(
    () =>
      pie<PieDataItem>().value((d: PieDataItem) => d[valueAttribute])(pieData),
    [pieData, valueAttribute],
  )

  const arcPie = useMemo(
    () =>
      arc<PieArcDatum<PieDataItem>>()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
        .padRadius(padRadius)
        .padAngle(2 / padRadius)
        .cornerRadius(cornerRadius),
    [innerRadius, outerRadius, padRadius, cornerRadius],
  )

  const colors = ['#63cfb2', '#b5d373', '#f6c451', '#e1533d', '#a477bb']

  return (
    <PieContainer
      viewBox={'-320 -320 640 640'}
      style={{
        maxWidth: width,
      }}
      textAnchor="middle"
      fontFamily="sans-serif"
    >
      {pieArcData.map((d, i) => (
        <PieSlice
          key={i}
          d={arcPie(d) ?? ''}
          textTransform={`translate(${arcPie
            .centroid(d)
            .join(',')}) rotate(${0})`}
          label={d.data[textAttribute]}
          value={d.value}
          color={colors[i % colors.length]}
        />
      ))}
    </PieContainer>
  )
}
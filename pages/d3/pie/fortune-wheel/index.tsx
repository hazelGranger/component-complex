import Figure from '../../../../components/Figure/Figure';
import FortuneWheel from '../../../../components/Pie/FortuneWheel';

const FortuneWheelPage = () => {
  const data = [
    { label: 'A', value: 1 },
    { label: 'B', value: 1 },
    { label: 'C', value: 1 },
    { label: 'D', value: 1 },
    { label: 'E', value: 1 },
    { label: 'F', value: 1 },
    { label: 'G', value: 1 },
    { label: 'H', value: 1 },
    { label: 'I', value: 1 },
    { label: 'J', value: 1 },
  ];
  return (
    <Figure caption="Fortune wheel" maxWidth="60rem">
      <FortuneWheel
        pieData={data}
        valueAttribute={'value'}
        textAttribute={'label'}
        width={'800px'}
        innerRadius={100}
        outerRadius={300}
        padRadius={0}
        cornerRadius={0}
        spinMaximumTimeInSeconds={4}
      />
    </Figure>
  );
};

export default FortuneWheelPage;

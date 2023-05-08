import Figure from '../../../../components/Figure/Figure';
import Pie from '../../../../components/Pie/SimplePie';
const PiePage = () => {
  const data = [
    { label: 'A', value: 3 },
    { label: 'B', value: 2 },
    { label: 'C', value: 1 },
    { label: 'D', value: 2 },
  ];
  return (
    <Figure caption="simple pie chart" maxWidth="45rem">
      <Pie
        pieData={data}
        valueAttribute={'value'}
        textAttribute={'label'}
        width={'100%'}
        innerRadius={0}
        outerRadius={300}
        padRadius={300}
        cornerRadius={0}
      />
    </Figure>
  );
};

export default PiePage;

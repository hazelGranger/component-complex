import Layout from '../../../../components/Layout/Layout'
import Pie from '../../../../components/Pie/SimplePie'

const PiePage = () => {
  const data = [
    { label: 'A', value: 3 },
    { label: 'B', value: 2 },
    { label: 'C', value: 1 },
    { label: 'D', value: 2 },
  ]
  return (
    <Layout>
      <Pie
        pieData={data}
        valueAttribute={'value'}
        textAttribute={'label'}
        width={'700px'}
        innerRadius={0}
        outerRadius={300}
        padRadius={300}
        cornerRadius={0}
      />
    </Layout>
  )
}

export default PiePage

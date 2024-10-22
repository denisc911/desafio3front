import style from '../style/Hucha/layout.module.css'
import LayoutContent from '../components/LayoutContent'
import { Typography, Button } from 'antd'
import { SaveFilled } from '@ant-design/icons'
import MetasDeAhorro from '../components/Hucha/MetasDeAhorro'
import Card from '../components/Hucha/Card'
import Titles from '../components/Hucha/Titles'
const { Title, Text } = Typography

export default function Hucha () {
  return (
    <>
      <header className={style.container}>
        <Title level={1}>Hucha</Title>
      </header>
      <LayoutContent>
        <main className={style.content}>
          <MetasDeAhorro />
          <Titles title='Hacer aportación'></Titles>
          <Card>
            <Text strong>10€</Text>
            <Button color='danger' type="primary" icon={<SaveFilled />}>Guardar</Button>
          </Card>
        </main>
      </LayoutContent>
    </>
  )
}

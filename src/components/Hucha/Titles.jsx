import styles from '../../style/Hucha/layout.module.css'
import { Typography } from 'antd'
const { Title } = Typography

export default function Titles ({ title }) {
  return (
    <div className={styles.flex_titles}>
      <Title level={3}>{title}</Title>
    </div>
  )
}
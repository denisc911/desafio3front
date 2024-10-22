import style from '../../style/Hucha/layout.module.css'
import { Typography } from 'antd'
const { Text } = Typography

export default function MetasDeAhorro () {
  return (
    <span className={style.metas_ahorra}>
      <div className={style.progress_bar} />
      <Text className={style.text} strong>Haz ahorrado el 15% de tu objetivo</Text>
    </span>
  )
}
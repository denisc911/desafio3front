import style from '../style/layout-content.module.css'

export default function LayoutContent ({ children }) {
  return (
    <div className={style.padding}>
      {children}
    </div>
  )
}
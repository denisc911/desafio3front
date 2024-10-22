import style from '../../style/Hucha/layout.module.css'

export default function Card ({ children }) {
  return (
    <article className={style.card}>
      {children}
    </article>
  )
}

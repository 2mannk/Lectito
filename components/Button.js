import styles from '../styles/Header.module.scss'

export default function Button ({ zawartosc, size }) {
  return(
    <div className={styles.komponent} style={{ 'flex-grow': size }}>
      <div>{zawartosc}</div>
    </div>
  )
}
import styles from '../styles/Header.module.scss';
import Button from './Button';

export default function Header() {
  return (
    <div className={styles.component_holder}>
      {/* logo */}
      <Button zawartosc={'LOGO'} size={1} />

      {/* profile */}
      <Button zawartosc={'PROFILE'} size={1} />

      {/* search bar */}
      <Button zawartosc={'search bar'} size={4} />

      {/* create new post */}
      <Button zawartosc={'+'} size={1} />

      {/* settings */}
      <Button zawartosc={'...'} size={1} />
    </div>
  )
}
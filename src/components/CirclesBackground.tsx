import styles from './CirclesBackground.module.css';

export default function CirclesBackground() {
  return (
    <ul className={styles.circles}>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={i}></li>
      ))}
    </ul>
  );
}

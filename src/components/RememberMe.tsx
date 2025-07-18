import styles from "./rememberMe.module.css";

export default function RememberMe() {
  return (
    <div className={styles.rememberMe}>
      <label htmlFor="remember">Recuérdame</label>
      <input type="checkbox" id="remember" className={styles.checkbox} />
    </div>
  );
}

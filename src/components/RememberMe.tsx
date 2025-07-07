import styles from "./components.module.css";

export default function RememberMe() {
  return (
    <label className={styles.remember}>
      <input type="checkbox" />
      Recuérdame
    </label>
  );
}

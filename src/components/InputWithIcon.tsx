import type { ReactNode } from "react";
import styles from "./components.module.css";

interface Props {
  icon: ReactNode;
  type?: string;
  placeholder?: string;
  label?: string;
}

export default function InputWithIcon({
  icon,
  type = "text",
  placeholder,
  label = ""
}: Props) {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.label}>{label}</label>

      <div className={styles.roundInputContainer}>
        <div className={styles.iconWrapper}>
          {icon}
        </div>
        <input className={styles.roundInput} type={type} placeholder={placeholder} />
      </div>
    </div>
  );
}

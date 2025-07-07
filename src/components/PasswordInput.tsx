import { useState } from "react";
import { FaLock } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import styles from "./components.module.css";

export default function PasswordInput() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.roundInputContainer}>
      <div className={styles.iconWrapper}>
        <FaLock />
      </div>

      <input
        type={showPassword ? "text" : "password"}
        placeholder="Contraseña"
        className={styles.roundInput}
      />

      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className={styles.eyeButton}
      >
        {showPassword ? <FiEyeOff /> : <FiEye />}
      </button>
    </div>
  );
}

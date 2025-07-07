import InputWithIcon from "../components/InputWithIcon";
import PasswordInput from "../components/PasswordInput";
import RememberMe from "../components/RememberMe";
import { FaUser } from "react-icons/fa";
import styles from "../styles/login.module.css";
import logo from "../assets/logo.png";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
            <img src={logo} alt="Logo inmobiliaria" className={styles.logo} />
          <h1 className={styles.title}>Inicia Sesión</h1>
        </div>

        <form className={styles.form}>
          <InputWithIcon icon={<FaUser />} placeholder="Usuario o correo" />
          <PasswordInput />
          <RememberMe />
          <button type="submit" className={styles.button}>
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

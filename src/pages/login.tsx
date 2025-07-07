import InputWithIcon from "../components/InputWithIcon";
import PasswordInput from "../components/PasswordInput";
import RememberMe from "../components/RememberMe";
import { FaUser } from "react-icons/fa";
import styles from "../styles/login.module.css";
import logo from "../assets/logo-1.png";
import miniLogo from "../assets/mini-logo.png";

export default function Login() {
  return (
    <div className="area">
      {/* Fondo animado */}
      <ul className="circles">
        <li></li><li></li><li></li><li></li><li></li>
        <li></li><li></li><li></li><li></li><li></li>
      </ul>

      <div className={styles.wrapper}>
        {/* Columna azul izquierda */}
        <div className={styles.leftPanel}>
          <img src={logo} alt="Logo" className={styles.sideLogo} />
        </div>

        {/* Área principal del login */}
        <div className={styles.mainContent}>
          <div className={styles.card}>
            <div className={styles.header}>
              <h1 className={styles.title}>Inicia Sesión</h1>
            </div>
            <form className={styles.form}>
              <InputWithIcon icon={<FaUser />} placeholder="Usuario o correo" />
              <PasswordInput />
              <RememberMe />
              <button type="submit" className={styles.button}>
                Acceder
              </button>
            </form>
          </div>
        </div>

        {/* Franja amarilla inferior */}
        <div className={styles.bottomBanner}>
          <img src={miniLogo} alt="Mini logo" className={styles.miniLogo} />
          <span className={styles.powered}>Powered by</span>
        </div>
      </div>
    </div>
  );
}

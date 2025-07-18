// src/layout/SistemaLayout.tsx
import { ReactNode } from "react";
import { FaUserCircle, FaSignOutAlt, FaCogs } from "react-icons/fa";
import logoEmpresa from "../assets/logo_empresa.svg";
import miniLogo from "../assets/mini-logo.png";
import styles from "../styles/inicio.module.css";

export default function SistemaLayout({ children }: { children: ReactNode }) {
  return (
    <div className={styles.container}>
      {/* Franja Azul Superior */}
      <div className={styles.topbar}>
        <div className={styles.topbarLeft}>
          <img src={logoEmpresa} alt="Logo Empresa" className={styles.logoEmpresa} />
          <h1 className={styles.brand}>EMPRESA</h1>
        </div>
        <div className={styles.topbarRight}>
          <FaUserCircle className={styles.userIcon} />
          <span>Hola, Brando</span>
        </div>
      </div>

      {/* Layout principal */}
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <img src={miniLogo} alt="Minilogo personal" className={styles.minilogo} />
          <nav className={styles.nav}>
            <a href="#" className={styles.navItem}>
              <FaCogs /> Configuración
            </a>
            <a href="#" className={styles.navItem}>
              <FaSignOutAlt /> Cerrar sesión
            </a>
          </nav>
        </aside>

        <main className={styles.main}>
          {children}
        </main>
      </div>
    </div>
  );
}

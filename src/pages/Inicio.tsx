import {FaHome,FaFileAlt,FaUsers,FaBuilding,FaCogs,FaSignOutAlt,FaUserCircle,FaFileInvoiceDollar,FaStream,FaUserCog,} from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "../styles/inicio.module.css";

import logoEmpresa from "../assets/logo_empresa.svg";
import miniLogo from "../assets/mini-logo.png";

export default function Inicio() {
  return (
    <div className={styles.container}>
      {/* Franja Azul Superior */}
      <div className={styles.topbar}>
        <div className={styles.topbarLeft}>
          <img
            src={logoEmpresa}
            alt="Logo Empresa"
            className={styles.logoEmpresa}
          />
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
          <img
            src={miniLogo}
            alt="Minilogo personal"
            className={styles.minilogo}
          />
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
          <div className={styles.pageHeader}>
            <FaHome />
            <span>Inicio</span>
          </div>

          <h2 className={styles.sectionTitle}>Módulos Principales</h2>
          <div className={styles.modulesGrid}>
            <Link to="/propiedades" className={styles.moduleCard}>
              <FaBuilding />
              <span>Propiedades</span>
            </Link>
            <Link to="/interesados" className={styles.moduleCard}>
              <FaUsers />
              <span>Interesados</span>
            </Link>
            <Link to="/cotizaciones" className={styles.moduleCard}>
              <FaFileInvoiceDollar />
              <span>Cotizaciones</span>
            </Link>
            <Link to="/seguimiento" className={styles.moduleCard}>
              <FaStream />
              <span>Seguimiento</span>
            </Link>
            <Link to="/documentos" className={styles.moduleCard}>
              <FaFileAlt />
              <span>Documentos</span>
            </Link>
            <Link to="/usuarios" className={styles.moduleCard}>
              <FaUserCog />
              <span>Usuarios</span>
            </Link>
            <Link to="/configuracion" className={styles.moduleCard}>
              <FaCogs />
              <span>Configuración</span>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}

// src/pages/propiedades/propiedades.tsx
import { useState, useEffect } from "react";
import type { Propiedad } from "../../types/propiedad";
import { propiedades as propiedadesIniciales } from "../../data/propiedades";
import styles from "../../styles/propiedades.module.css";
import SistemaLayout from "../../layout/SistemaLayout";
import ModalNuevaPropiedad from "../../components/ModalNuevaPropiedad";

export default function Propiedades() {
  const [mostrarModal, setMostrarModal] = useState(false);
  const [listaPropiedades, setListaPropiedades] = useState<Propiedad[]>([]);

  useEffect(() => {
    const local = localStorage.getItem("propiedades");
    if (local) {
      const almacenadas: Propiedad[] = JSON.parse(local);
      setListaPropiedades([...propiedadesIniciales, ...almacenadas]);
    } else {
      setListaPropiedades(propiedadesIniciales);
    }
  }, [mostrarModal]); // Se recarga la lista al cerrar el modal

  return (
    <SistemaLayout>
      <div className={styles.header}>
        <h1 className={styles.title}>Listado de Propiedades</h1>
        <button
          className={styles.newButton}
          onClick={() => setMostrarModal(true)}
        >
          + Registrar nueva propiedad
        </button>
      </div>

      <div className={styles.grid}>
        {listaPropiedades.map((propiedad) => (
          <div key={propiedad.id} className={styles.card}>
            <img
              src={propiedad.imagen}
              alt={propiedad.titulo}
              className={styles.image}
            />
            <h2 className={styles.cardTitle}>{propiedad.titulo}</h2>
            <p className={styles.info}>{propiedad.ubicacion}</p>
            <p className={styles.info}>Tipo: {propiedad.tipo}</p>
            <p className={styles.price}>${propiedad.precio.toLocaleString()}</p>
            <span
              className={`${styles.badge} ${styles[propiedad.estado.replace(" ", "")]}`}
            >
              {propiedad.estado}
            </span>
          </div>
        ))}
      </div>

      {mostrarModal && (
        <ModalNuevaPropiedad onClose={() => setMostrarModal(false)} />
      )}
    </SistemaLayout>
  );
}

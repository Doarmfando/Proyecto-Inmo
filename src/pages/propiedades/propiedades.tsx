// src/pages/propiedades/propiedades.tsx
import { useState, useEffect } from "react";
import type { Propiedad } from "../../types/propiedad";
import { propiedades as propiedadesIniciales } from "../../data/propiedades";
import styles from "../../styles/propiedades.module.css";
import SistemaLayout from "../../layout/SistemaLayout";
import ModalNuevaPropiedad from "../../components/ModalNuevaPropiedad";
import ModalEditarPropiedad from "../../components/ModalEditarPropiedad";

export default function Propiedades() {
  const [listaPropiedades, setListaPropiedades] = useState<Propiedad[]>([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarEditar, setMostrarEditar] = useState(false);
  const [propiedadAEditar, setPropiedadAEditar] = useState<Propiedad | null>(null);
  const [modoSeleccionEdicion, setModoSeleccionEdicion] = useState(false);

  useEffect(() => {
    const local = localStorage.getItem("propiedades");
    if (local) {
      const almacenadas: Propiedad[] = JSON.parse(local);
      setListaPropiedades([...propiedadesIniciales, ...almacenadas]);
    } else {
      setListaPropiedades(propiedadesIniciales);
    }
  }, [mostrarModal, mostrarEditar]);

  const handleSeleccionEdicion = (propiedad: Propiedad) => {
    if (!modoSeleccionEdicion) return;
    setPropiedadAEditar(propiedad);
    setMostrarEditar(true);
    setModoSeleccionEdicion(false);
  };

  return (
    <SistemaLayout>
      <div className={styles.header}>
        <h1 className={styles.title}>Listado de Propiedades</h1>

        <div className={styles.buttonGroup}>
          <button
            className={styles.newButton}
            onClick={() => setMostrarModal(true)}
          >
            + Registrar nueva propiedad
          </button>

          <button
            className={styles.editButton}
            onClick={() => setModoSeleccionEdicion(true)}
          >
            ✏️ Editar propiedad existente
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        {listaPropiedades.map((propiedad) => (
          <div
            key={propiedad.id}
            className={`${styles.card} ${modoSeleccionEdicion ? styles.cardSelectable : ""}`}
            onClick={() => handleSeleccionEdicion(propiedad)}
          >
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
            {modoSeleccionEdicion && (
              <div className={styles.cardOverlay}>
                <span>Haz clic para editar</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {mostrarModal && (
        <ModalNuevaPropiedad onClose={() => setMostrarModal(false)} />
      )}

      {mostrarEditar && propiedadAEditar && (
        <ModalEditarPropiedad
          propiedad={propiedadAEditar}
          onClose={() => {
            setMostrarEditar(false);
            setPropiedadAEditar(null);
          }}
        />
      )}
    </SistemaLayout>
  );
}

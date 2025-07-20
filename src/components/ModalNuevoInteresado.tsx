import { useState, useEffect, useRef } from "react";
import styles from "../styles/modal.module.css";
import type { Interesado } from "../types/interesado";

interface Props {
  onClose: () => void;
  onGuardar: (nuevo: Interesado) => void;
}

export default function ModalNuevoInteresado({ onClose, onGuardar }: Props) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [estado, setEstado] = useState<Interesado["estado"]>("Nuevo");
  const [propiedad, setPropiedad] = useState("");
  const [fecha, setFecha] = useState(() =>
    new Date().toISOString().split("T")[0]
  );

  const overlayRef = useRef<HTMLDivElement>(null);

  // Cierra con tecla ESC
  useEffect(() => {
    const escListener = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", escListener);
    return () => document.removeEventListener("keydown", escListener);
  }, [onClose]);

  // Cierra al hacer clic fuera del panel
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const nuevo: Interesado = {
      id: Date.now(),
      nombre,
      correo,
      telefono,
      estado,
      propiedad: propiedad || "Sin asignar",
      fecha,
    };

    onGuardar(nuevo);
    onClose();
  };

  return (
    <div
      className={styles.overlay}
      ref={overlayRef}
      onClick={handleOutsideClick}
    >
      <div className={styles.panel}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        <h2 className={styles.title}>Nuevo Interesado</h2>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <input
            type="tel"
            placeholder="Teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
          />

          <select
            value={estado}
            onChange={(e) => setEstado(e.target.value as Interesado["estado"])}
            required
          >
            <option value="Nuevo">Nuevo</option>
            <option value="Contactado">Contactado</option>
            <option value="Interesado">Interesado</option>
            <option value="Descartado">Descartado</option>
          </select>

          <input
            type="text"
            placeholder="Propiedad (ej. Casa en Lima)"
            value={propiedad}
            onChange={(e) => setPropiedad(e.target.value)}
          />

          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />

          <button type="submit" className={styles.saveButton}>
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}

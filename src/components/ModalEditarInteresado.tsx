import { useState, useEffect, useRef } from "react";
import styles from "../styles/modal.module.css";
import type { Interesado } from "../types/interesado";

interface Props {
  interesado: Interesado;
  onClose: () => void;
  onGuardar: (actualizado: Interesado) => void;
}

export default function ModalEditarInteresado({
  interesado,
  onClose,
  onGuardar,
}: Props) {
  const [nombre, setNombre] = useState(interesado.nombre);
  const [correo, setCorreo] = useState(interesado.correo);
  const [telefono, setTelefono] = useState(interesado.telefono);
  const [estado, setEstado] = useState<Interesado["estado"]>(interesado.estado);
  const [propiedad, setPropiedad] = useState(interesado.propiedad);
  const [fecha, setFecha] = useState(interesado.fecha);

  const overlayRef = useRef<HTMLDivElement>(null);

  // Cerrar con tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Cerrar al hacer clic fuera del panel
  const handleClickOutside = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const actualizado: Interesado = {
      ...interesado,
      nombre,
      correo,
      telefono,
      estado,
      propiedad,
      fecha,
    };

    onGuardar(actualizado);
    onClose();
  };

  return (
    <div
      className={styles.overlay}
      ref={overlayRef}
      onClick={handleClickOutside}
    >
      <div className={styles.panel}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        <h2 className={styles.title}>Editar Interesado</h2>

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
            placeholder="Propiedad"
            value={propiedad}
            onChange={(e) => setPropiedad(e.target.value)}
            required
          />

          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />

          <button type="submit" className={styles.saveButton}>
            Guardar cambios
          </button>
        </form>
      </div>
    </div>
  );
}

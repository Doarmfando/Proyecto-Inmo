import { useState, type ChangeEvent, type FormEvent } from "react";
import styles from "../styles/modalNuevaPropiedad.module.css";
import type { Propiedad } from "../types/propiedad";

interface Props {
  onClose: () => void;
}

export default function ModalNuevaPropiedad({ onClose }: Props) {
  const [titulo, setTitulo] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [tipo, setTipo] = useState<Propiedad["tipo"]>("Casa");
  const [precio, setPrecio] = useState("");
  const [estado, setEstado] = useState<Propiedad["estado"]>("Disponible");
  const [imagenBase64, setImagenBase64] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagenBase64(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const nuevaPropiedad: Propiedad = {
      id: `P${Date.now()}`,
      titulo,
      ubicacion,
      tipo,
      precio: parseFloat(precio),
      estado,
      imagen: imagenBase64 || "",
    };

    const existentes = JSON.parse(localStorage.getItem("propiedades") || "[]");
    const actualizadas = [...existentes, nuevaPropiedad];
    localStorage.setItem("propiedades", JSON.stringify(actualizadas));
    alert("✅ Propiedad registrada correctamente");
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.panel} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>×</button>
        <h2 className={styles.title}>Nueva Propiedad</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>Título:
            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
          </label>
          <label>Ubicación:
            <input type="text" value={ubicacion} onChange={(e) => setUbicacion(e.target.value)} required />
          </label>
          <label>Tipo:
            <select value={tipo} onChange={(e) => setTipo(e.target.value as Propiedad["tipo"])} required>
              <option value="Casa">Casa</option>
              <option value="Departamento">Departamento</option>
              <option value="Terreno">Terreno</option>
              <option value="Local">Local</option>
            </select>
          </label>
          <label>Precio:
            <input type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
          </label>
          <label>Estado:
            <select value={estado} onChange={(e) => setEstado(e.target.value as Propiedad["estado"])} required>
              <option value="Disponible">Disponible</option>
              <option value="En negociación">En negociación</option>
              <option value="Vendido">Vendido</option>
            </select>
          </label>
          <label>Imagen:
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </label>
          {imagenBase64 && (
            <div className={styles.preview}><img src={imagenBase64} alt="Vista previa" /></div>
          )}
          <button type="submit" className={styles.saveButton}>Guardar</button>
        </form>
      </div>
    </div>
  );
}

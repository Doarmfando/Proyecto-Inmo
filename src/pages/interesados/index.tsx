import { useState, useEffect } from "react";
import type { Interesado } from "../../types/interesado";
import { interesados as datosIniciales } from "../../data/interesados";
import styles from "../../styles/interesados.module.css";

import ModalNuevoInteresado from "../../components/ModalNuevoInteresado";
import ModalEditarInteresado from "../../components/ModalEditarInteresado";
import SistemaLayout from "../../layout/SistemaLayout";

import { Pencil, Trash2 } from "lucide-react";

export default function Interesados() {
  const [lista, setLista] = useState<Interesado[]>([]);
  const [busqueda, setBusqueda] = useState("");
  const [mostrarNuevo, setMostrarNuevo] = useState(false);
  const [interesadoAEditar, setInteresadoAEditar] = useState<Interesado | null>(null);

  const normalizarInteresado = (i: Partial<Interesado>): Interesado => ({
    id: i.id ?? Date.now(),
    nombre: i.nombre ?? "Sin nombre",
    correo: i.correo ?? "",
    telefono: i.telefono ?? "",
    estado: i.estado ?? "Nuevo",
    propiedad: i.propiedad ?? "Sin asignar",
    fecha: i.fecha ?? new Date().toISOString().slice(0, 10),
  });

  useEffect(() => {
    const local = localStorage.getItem("interesados");
    if (local) {
      try {
        const cargados = JSON.parse(local) as Partial<Interesado>[];
        const normalizados = cargados.map(normalizarInteresado);
        setLista(normalizados);
      } catch (err) {
        console.error("Error al cargar interesados:", err);
        setLista(datosIniciales);
      }
    } else {
      setLista(datosIniciales);
    }
  }, []);

  const guardarEnStorage = (nuevos: Interesado[]) => {
    setLista(nuevos);
    localStorage.setItem("interesados", JSON.stringify(nuevos));
  };

  const filtrar = lista.filter((i) =>
    i.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  const agregarInteresado = (nuevo: Interesado) => {
    const nuevos = [...lista, normalizarInteresado(nuevo)];
    guardarEnStorage(nuevos);
    setMostrarNuevo(false);
  };

  const actualizarInteresado = (actualizado: Interesado) => {
    const nuevos = lista.map((i) => (i.id === actualizado.id ? actualizado : i));
    guardarEnStorage(nuevos);
    setInteresadoAEditar(null);
  };

  const eliminarInteresado = (id: string | number) => {
    const confirmado = confirm("¿Deseas eliminar este interesado?");
    if (!confirmado) return;
    const nuevos = lista.filter((i) => i.id !== id);
    guardarEnStorage(nuevos);
  };

  return (
    <SistemaLayout>
      <div className={styles.header}>
        <h1 className={styles.title}>Listado de Interesados</h1>

        <div className={styles.actions}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Buscar por nombre..."
              className={styles.search}
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <div className={styles.buttonContainer}>
            <button
              className={styles.newButton}
              onClick={() => setMostrarNuevo(true)}
            >
              + Registrar interesado
            </button>
          </div>
        </div>
      </div>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Email</th>
              <th>Teléfono</th>
              <th>Estado</th>
              <th>Propiedad</th>
              <th>Fecha</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {filtrar.map((interesado) => (
              <tr key={interesado.id}>
                <td>{interesado.nombre}</td>
                <td>{interesado.correo}</td>
                <td>{interesado.telefono}</td>
                <td>{interesado.estado}</td>
                <td>{interesado.propiedad}</td>
                <td>{interesado.fecha}</td>
                <td>
                  <div className={styles.actionsCell}>
                    <button
                      className={styles.iconButton}
                      onClick={() => setInteresadoAEditar(interesado)}
                    >
                      <Pencil size={18} />
                    </button>
                    <button
                      className={styles.iconButton}
                      onClick={() => eliminarInteresado(interesado.id)}
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modales */}
      {mostrarNuevo && (
        <ModalNuevoInteresado
          onClose={() => setMostrarNuevo(false)}
          onGuardar={agregarInteresado}
        />
      )}

      {interesadoAEditar && (
        <ModalEditarInteresado
          interesado={interesadoAEditar}
          onClose={() => setInteresadoAEditar(null)}
          onGuardar={actualizarInteresado}
        />
      )}
    </SistemaLayout>
  );
}

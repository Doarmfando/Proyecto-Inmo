export interface Interesado {
  id: string | number;
  nombre: string;
  correo: string;
  telefono: string;
  estado: "Nuevo" | "Contactado" | "Interesado" | "Descartado"; // podés ajustar los estados
  propiedad: string; // ejemplo: "Casa en Lima"
  fecha: string; // formato: YYYY-MM-DD
}

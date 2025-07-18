export interface Propiedad {
  id: string;
  titulo: string;
  ubicacion: string;
  tipo: "Casa" | "Departamento" | "Terreno" | "Local" | "Otro";
  precio: number;
  estado: "Disponible" | "En negociación" | "Vendido";
  imagen: string; // URL o ruta local a la imagen
}

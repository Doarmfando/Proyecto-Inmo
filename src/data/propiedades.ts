import type { Propiedad } from "../types/propiedad";
import casa1 from "../assets/casa1.png";
import depa1 from "../assets/depa1.png";
import terreno1 from "../assets/terreno1.png";
import local1 from "../assets/local1.png";

export const propiedades: Propiedad[] = [
  {
    id: "P001",
    titulo: "Casa familiar en Trujillo",
    ubicacion: "Av. América Norte 123",
    tipo: "Casa",
    precio: 250000,
    estado: "Disponible",
    imagen: casa1,
  },
  {
    id: "P002",
    titulo: "Departamento moderno en Lima",
    ubicacion: "Av. Arequipa 1500",
    tipo: "Departamento",
    precio: 180000,
    estado: "En negociación",
    imagen: depa1,
  },
  {
    id: "P003",
    titulo: "Terreno en expansión",
    ubicacion: "Zona Industrial 42, Chimbote",
    tipo: "Terreno",
    precio: 90000,
    estado: "Disponible",
    imagen: terreno1,
  },
  {
    id: "P004",
    titulo: "Local comercial - Av. Principal",
    ubicacion: "Av. José Gálvez 755, Huacho",
    tipo: "Local",
    precio: 320000,
    estado: "Vendido",
    imagen: local1,
  },
];

export class Planta {
  id: number;
  nombre_comun: string;
  nombre_cientifico: string;
  tipo: string;
  clima: string;
  imagen: string;
  descripcion: string;

  constructor(
    id: number,
    nombre_comun: string,
    nombre_cientifico: string,
    tipo: string,
    clima: string,
    imagen: string,
    descripcion: string
  ) {
    this.id = id;
    this.nombre_comun = nombre_comun;
    this.nombre_cientifico = nombre_cientifico;
    this.tipo = tipo;
    this.clima = clima;
    this.imagen = imagen;
    this.descripcion = descripcion;
  }
}

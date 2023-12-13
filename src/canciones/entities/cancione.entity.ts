import { Schema } from "@nestjs/mongoose";
import { Lista } from "../../listas/entities/lista.entity";

@Schema()
export class Cancione {
  titulo: string;
  artista: string;
  duracion: number;
  genero: string;
  anio: number;
  imagen: string;
  lista: Lista;
}

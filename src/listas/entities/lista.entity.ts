import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ListaDocument = HydratedDocument<Lista>;

@Schema()
export class Lista {
  @Prop()
  nombre: string;
  @Prop()
  descripcion: string;

  @Prop()
  canciones: string[];
}

export const ListaSchema = SchemaFactory.createForClass(Lista);

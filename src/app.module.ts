import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ListasModule } from "./listas/listas.module";
import { CancionesModule } from "./canciones/canciones.module";
import { MongooseModule } from "@nestjs/mongoose";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost:27017/spotify"),
    ListasModule,
    CancionesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

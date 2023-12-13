import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix("api/v1");

  const config = new DocumentBuilder()
    .setTitle("Lista Canciones")
    .setDescription("API para la implementacion de una facturacion electronica")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("docs/v1", app, document);
  await app.listen(3000);
}

bootstrap();




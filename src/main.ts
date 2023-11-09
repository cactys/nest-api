import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from './pipes/validation.pipe';

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('BACKEND TITLE')
    .setDescription('BACKEND DESCRIPTION')
    .setVersion('1.0.0')
    .addTag('Khortys')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('/api/docs', app, document);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(PORT, () => console.log(`Server port = ${PORT}`));
}

start();

// https://youtu.be/dDeWWQWMM-Y?t=4912

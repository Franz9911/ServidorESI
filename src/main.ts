import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as bodyParser from 'body-parser';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  app.enableCors({
      origin: '*',
  });
  // Aumenta el límite de tamaño de carga de archivos
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  const ap = await NestFactory.create<NestExpressApplication>(AppModule);
    // Configura el servidor para servir archivos estáticos desde el directorio 'uploads'
    //app.useStaticAssets(join(__dirname, '..', 'uploads'));
    ap.useStaticAssets(join(__dirname, '..', 'uploads'), {
      prefix: '/uploads/', // Prefijo opcional para las URLs
    });
    await ap.listen(3001);
   
  await app.listen(3000);
}
bootstrap();

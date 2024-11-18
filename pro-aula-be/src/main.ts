import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT ?? 3000;

  app.enableCors();

  app.setGlobalPrefix('api');

  await app.listen(PORT).then(() => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
bootstrap();

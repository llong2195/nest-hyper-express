import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HyperExpressAdapter } from './hyper-express-adapter';
async function bootstrap() {
  const app = await NestFactory.create(AppModule, new HyperExpressAdapter());
  await app.listen(3000);
}
bootstrap();

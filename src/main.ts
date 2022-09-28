import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { createdocument } from './swagger/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    })
  )
  SwaggerModule.setup('api', app, createdocument(app));
  app.useGlobalInterceptors(new LoggingInterceptor());
  // app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();

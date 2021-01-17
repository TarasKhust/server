import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './all-exceptions.filter';
import { ValidationPipe } from './validation/validation.pipe';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
// somewhere in your initialization file
  app.use(compression());
  // app.use(
  //     session({
  //       secret: 'my-secret',
  //       resave: false,
  //       saveUninitialized: false,
  //     }),
  // );


// somewhere in your initialization file
  app.use(cookieParser());
  /**
   * Global Validation rules
   */
  // app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();

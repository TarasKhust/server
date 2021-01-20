import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionsFilter } from './all-exceptions.filter';
import { ValidationPipe } from './validation/validation.pipe';
import * as cookieParser from 'cookie-parser';
import * as compression from 'compression';
import * as session from 'express-session';
import * as helmet from 'helmet';
import * as csrf from 'csurf';
import * as rateLimit from 'express-rate-limit';


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true});
  app.use(
      rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
      }),
  );
  app.use(cookieParser());
  app.use(csrf());

  app.use(helmet());
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
  /**
   * Global Validation rules
   */
  // app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}
bootstrap();

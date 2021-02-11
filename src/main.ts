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
import {PinoLoggerService} from "./logger/pino-logger.service";
import {ASYNC_STORAGE} from "./logger/logger.constants";
import { v4 as uuid4 } from "uuid"
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";


async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true, logger: true});
  app.use((req, res, next) => {
    const asyncLocalStorage = app.get(ASYNC_STORAGE)
    const traceId = req.headers['x-request-id'] || uuid4();
    const store = new Map().set('traceId', traceId)
    asyncLocalStorage.run(store, () => {
      next()
    })
  })
  app.useLogger(app.get(PinoLoggerService))
  // app.use(
  //     rateLimit({
  //       windowMs: 15 * 60 * 1000, // 15 minutes
  //       max: 100, // limit each IP to 100 requests per windowMs
  //     }),
  // );
  app.use(cookieParser());
  // app.use(csrf());

    app.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === 'production') ? undefined : false }));
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
// somewhere in your initialization file
  app.use(compression());

  const config = new DocumentBuilder()
      .setTitle('Cats example')
      .setDescription('The cats API description')
      .setVersion('1.0')
      .addTag('cats')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);



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
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();

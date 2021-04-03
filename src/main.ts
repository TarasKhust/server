import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cookieParser from "cookie-parser";
import * as compression from "compression";
import * as helmet from "helmet";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
    const app = await NestFactory.create(AppModule, { cors: true, logger: true });
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe());

    app.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === "production") ? undefined : false }));
    app.enableCors();
    app.use(compression());

    await app.listen(process.env.PORT || 3000);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}

bootstrap();

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import * as cookieParser from "cookie-parser";
import * as compression from "compression";
import * as helmet from "helmet";
import { Logger, ValidationPipe } from "@nestjs/common";

async function bootstrap() {
    const logger = new Logger("bootstrap");
    const app = await NestFactory.create(AppModule, { logger: true });
    app.use(cookieParser());
    app.useGlobalPipes(new ValidationPipe());

    app.use(helmet({ contentSecurityPolicy: (process.env.NODE_ENV === "production") ? undefined : false }));

    if (process.env.NODE_ENV === "development") {
        app.enableCors();
        logger.log("cors is enabled");
    } else {
        app.enableCors({ origin: "http://localhost:9000" });
        logger.log("Accepting requests from origin https://servercrm.herokuapp.com/graphql");
    }

    app.use(compression());

    await app.listen(process.env.PORT || 3000);

    if (module.hot) {
        module.hot.accept();
        module.hot.dispose(() => app.close());
    }
}

bootstrap();

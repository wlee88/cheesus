import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Cheesus API')
        .setDescription('Swagger page for Cheesus API')
        .setVersion('1.0')
        .build()

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);

    // TODO: should set via global env
    app.enableCors([new ConfigService().get('ALLOWED_CORS_ORIGIN') || ''] as CorsOptions)

    await app.listen(3000);
}
bootstrap();

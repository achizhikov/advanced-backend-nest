import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'
import { ValidationPipe } from './pipes/validation.pipe'

async function start() {
  const PORT = process.env.PORT || 5678
  const app = await NestFactory.create(AppModule)
  const config = new DocumentBuilder()
    .setTitle('Advanced Backend')
    .setDescription('REST API Docs')
    .setVersion('1.0.0')
    .addTag('backend')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api/docs', app, document)

  app.useGlobalPipes(new ValidationPipe())

  await app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
  })
}

start()

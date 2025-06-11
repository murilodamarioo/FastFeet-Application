import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './infra/database/prisma/prisma.service';
import { CreateAdminAccountController } from './infra/http/controllers/create-admin-account.controller';
import { envSchema } from './env';

@Module({
  imports: [ConfigModule.forRoot({
    validate: env => envSchema.parse(env),
    isGlobal: true
  })],
  controllers: [CreateAdminAccountController],
  providers: [PrismaService],
})
export class AppModule {}

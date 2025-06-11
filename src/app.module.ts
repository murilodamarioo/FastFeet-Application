import { Module } from '@nestjs/common';
import { PrismaService } from './infra/database/prisma/prisma.service';
import { CreateAdminAccountController } from './infra/http/controllers/create-admin-account.controller';

@Module({
  controllers: [CreateAdminAccountController],
  providers: [PrismaService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './ormconfig';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { CommandsModule } from './commands/commands.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), UserModule, AuthModule, ProductModule, CommandsModule, AdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

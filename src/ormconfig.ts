import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mongodb',
  url: 'mongodb+srv://houcem:houcem@cluster0.29zpygz.mongodb.net/?retryWrites=true&w=majority',
  database: 'ecommerce',
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
};

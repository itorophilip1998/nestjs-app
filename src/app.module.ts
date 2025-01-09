import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { NinjasModule } from './ninjas/ninjas.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [UsersModule, NinjasModule, ProductsModule],
})
export class AppModule {}

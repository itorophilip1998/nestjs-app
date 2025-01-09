import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProductModule, UsersModule],
})
export class AppModule {}

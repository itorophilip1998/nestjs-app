import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UsersModule } from './users/users.module';
import { NinjasModule } from './ninjas/ninjas.module';

@Module({
  imports: [ProductModule, UsersModule, NinjasModule],
})
export class AppModule {}

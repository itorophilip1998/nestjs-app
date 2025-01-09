import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [ProductModule, UserModule, UsersModule],
})
export class AppModule {}

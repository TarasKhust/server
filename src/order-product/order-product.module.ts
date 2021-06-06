import { Module } from '@nestjs/common';
import { OrderProductService } from './order-product.service';
import { OrderProductResolver } from './order-product.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderProduct } from './entities/order-product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderProduct])],
  providers: [OrderProductResolver, OrderProductService],
})
export class OrderProductModule {}

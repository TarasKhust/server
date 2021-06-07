import { Module } from '@nestjs/common';
import { OrderStatusService } from './order-status.service';
import { OrderStatusResolver } from './order-status.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderStatus } from './entities/order-status.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrderStatus])],
  providers: [OrderStatusResolver, OrderStatusService],
})
export class OrderStatusModule {}

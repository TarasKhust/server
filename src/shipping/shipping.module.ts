import { Module } from '@nestjs/common';
import { ShippingService } from './shipping.service';
import { ShippingResolver } from './shipping.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shipping } from './entities/shipping.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shipping])],
  providers: [ShippingResolver, ShippingService],
})
export class ShippingModule {}

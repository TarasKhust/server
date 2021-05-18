import { Module } from '@nestjs/common';
import { ProductResolver } from './product.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';
import { AttributeModule } from '../attribute/attribute.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity]), AttributeModule],
  providers: [ProductResolver, ProductService],
})
export class ProductModule {}

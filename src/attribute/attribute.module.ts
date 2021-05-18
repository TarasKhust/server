import { Module } from '@nestjs/common';
import { AttributeService } from './attribute.service';
import { AttributeResolver } from './attribute.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributeEntity } from './entities/attribute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AttributeEntity])],
  providers: [AttributeResolver, AttributeService],
  exports: [AttributeService],
})
export class AttributeModule {}

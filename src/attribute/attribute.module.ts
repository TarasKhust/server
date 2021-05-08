import { Module } from '@nestjs/common';
import { AttributeService } from './attribute.service';
import { AttributeResolver } from './attribute.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Attribute } from './entities/attribute.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attribute])],
  providers: [AttributeResolver, AttributeService],
})
export class AttributeModule {}

import { Module } from '@nestjs/common';
import { AttributeGroupService } from './attribute-group.service';
import { AttributeGroupResolver } from './attribute-group.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttributeGroupEntity } from './entities/attribute-group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AttributeGroupEntity])],
  providers: [AttributeGroupResolver, AttributeGroupService],
})
export class AttributeGroupModule {}

import { Module } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CategoryResolver } from "./category.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryRepository } from "./category.repository";

@Module({
  imports: [TypeOrmModule.forFeature([CategoryRepository])],
  providers: [CategoryResolver, CategoryService],
})
export class CategoryModule {}

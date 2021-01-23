import { Module } from '@nestjs/common';
import {AuthorsService} from "./authors.service";
import {PostsService} from "./post.service";


@Module({
    imports: [],
    controllers: [],
    providers: [AuthorsService, PostsService],
})
export class AuthorModule {}
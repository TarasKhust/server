import {Injectable} from "@nestjs/common";


@Injectable()
export class PostsService {

    constructor() {
    }

    findAll({ authorId: id }) {
        return { authorId: id }
    }



}
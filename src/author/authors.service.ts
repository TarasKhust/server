import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Author} from "./author.entity";
import {Repository} from "typeorm";


@Injectable()
export class AuthorsService {

    constructor( @InjectRepository(Author)
        private authorRepository: Repository<Author>
    ) {
    }

    findOneById(id: number): Promise<Author[]> {
        return this.authorRepository.find();
    }

}
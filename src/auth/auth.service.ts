import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { UserRepository } from "../users/user.repository";
import { AuthHelper } from "./auth.helper";
import { JwtDto } from "./dto/jwt.dto";

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private userRepository: UserRepository,
        private jwtService: JwtService
    ) {}

    public async createUser(email: string, password: string) {
        const getUser = await this.usersService.getUserByEmail(email);

        if (getUser) {
            throw new BadRequestException(`Cannot register with email ${email}`);
        }

        const hashPass = await AuthHelper.hash(password);

       return await this.userRepository.create({
           email, password: hashPass,
       }).save();
    }

    public async login(email: string, password: string) {
        const user = await this.usersService.getUserByEmail(email);

        if (!user) {
            throw new NotFoundException(`User with email ${email} does not exist`);
        }

        const isPassword = await AuthHelper.validate(password, user.password);

        if (!isPassword) {
            throw new Error("invalid password");
        }

        const token = this.signToken(user.id);

        return {
            token: token,
            status: true,
            id: user.id,
            email: user.email,
            redirect: "/member",
        };
    }

    private signToken(id: string) {
        const payload: JwtDto = { userId: id };

        return this.jwtService.sign(payload);
    }

    public async validateUser(userId: string) {
        return this.usersService.getUserById(userId);
    }
}

import { Injectable } from "@nestjs/common";
import { UsersService } from "../users/users.service";

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService) {}

    async validateUser(password: string): Promise<any> {
        const user = await this.usersService.getUserByEmail(password);

        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }

        return null;
    }
}

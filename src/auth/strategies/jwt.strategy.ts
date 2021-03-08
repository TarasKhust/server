import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { jwtConstants } from "../constants";
import { AuthService } from "../auth.service";
import { JwtDto } from "../dto/jwt.dto";
import { User } from "../../users/user.entity";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: jwtConstants.secret,
        });
    }

    async validate(payload: JwtDto): Promise<User> {
        const user = await this.authService.validateUser(payload.userId);

        if (!user) {
            throw new UnauthorizedException();
        }

        return user;
    }
}

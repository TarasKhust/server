import {CacheModule, Module} from "@nestjs/common";
import {UserCacheService} from "./user.cache.service";



@Module({
    imports: [CacheModule],
    providers: [UserCacheService],
    exports: [UserCacheService],
})
export class UserCacheModule {}
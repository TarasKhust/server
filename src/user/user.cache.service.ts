import {CACHE_MANAGER, Inject} from "@nestjs/common";


export class UserCacheService {
    constructor(@Inject(CACHE_MANAGER) private cacheManager) {}
    get(key: string) { return this.get(key); }
}
import {ExecutionContext, Injectable} from "@nestjs/common";
import {CacheInterceptor} from "../interceptor/cache.interceptor";

@Injectable()
class HttpCacheInterceptor extends CacheInterceptor {
    trackBy(context: ExecutionContext): string | undefined {
        return 'key';
    }
}

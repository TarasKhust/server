import { Module } from '@nestjs/common';
import { VpsService } from './vps.service';
import { VpsResolver } from './vps.resolver';

@Module({
  providers: [VpsResolver, VpsService]
})
export class VpsModule {}

import { Test, TestingModule } from '@nestjs/testing';
import { VpsResolver } from './vps.resolver';
import { VpsService } from './vps.service';

describe('VpsResolver', () => {
  let resolver: VpsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VpsResolver, VpsService],
    }).compile();

    resolver = module.get<VpsResolver>(VpsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

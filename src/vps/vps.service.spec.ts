import { Test, TestingModule } from '@nestjs/testing';
import { VpsService } from './vps.service';

describe('VpsService', () => {
  let service: VpsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VpsService],
    }).compile();

    service = module.get<VpsService>(VpsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

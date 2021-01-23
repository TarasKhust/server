import { Injectable } from '@nestjs/common';
import { CreateVpInput } from './dto/create-vp.input';
import { UpdateVpInput } from './dto/update-vp.input';

@Injectable()
export class VpsService {
  create(createVpInput: CreateVpInput) {
    return 'This action adds a new vp';
  }

  findAll() {
    return `This action returns all vps`;
  }

  findOne(id: number) {
    return `This action returns a #${id} vp`;
  }

  update(id: number, updateVpInput: UpdateVpInput) {
    return `This action updates a #${id} vp`;
  }

  remove(id: number) {
    return `This action removes a #${id} vp`;
  }
}

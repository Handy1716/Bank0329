import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnerService {
  create(createOwnerDto: CreateOwnerDto) {
    return 'This action adds a new owner';
  }

  findAll() {
    return `This action returns all owner`;
  }

  async findOne(id: number) : Promise<Owner> {
    return ; // TODO
  }

  update(id: number, updateOwnerDto: UpdateOwnerDto) {
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}

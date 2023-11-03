import { Injectable } from '@nestjs/common';
import { Portal } from './portal.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PortalsService {
  constructor(
    @InjectRepository(Portal)
    private readonly portalRepository: Repository<Portal>,
  ) {}

  async findAll(): Promise<Portal[]> {
    return await this.portalRepository.find();
  }

}

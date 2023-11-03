import { Module } from '@nestjs/common';
import { PortalsService } from './portals.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Portal } from './portal.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Portal])],
  providers: [PortalsService],
  exports: [PortalsService],
})
export class PortalsModule {}

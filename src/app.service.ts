import { Injectable } from '@nestjs/common';
import { PortalsService } from './portals/portals.service';
import { Portal } from './portals/portal.entity';

@Injectable()
export class AppService {
  constructor(
    private readonly portalsService: PortalsService,
  ) {}

  async countPortals(): Promise<number> {
    const portals = await this.portalsService.findAll();
    
    return portals.length;
  }
}

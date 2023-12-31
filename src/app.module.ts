import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { PortalsModule } from './portals/portals.module';
import { ConfigModule } from '@nestjs/config';
import { environments } from './enviroments';
import config from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: environments[process.env.NODE_ENV ?? 'local'],
      load: [config],
      isGlobal: true,
    }),
    DatabaseModule,
    PortalsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

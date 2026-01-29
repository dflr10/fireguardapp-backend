import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Emergency } from "./emergencies/emergency.entity";
import { EmergenciesModule } from './emergencies/emergencies.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "fireguard",
      password: "fireguard123",
      database: "fireguarddatabase",
      entities: [Emergency],
      synchronize: true
    }),
    EmergenciesModule,
    TypeOrmModule.forFeature([Emergency])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

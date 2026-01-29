import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Emergency } from "./emergency.entity";
import { EmergenciesService } from "./emergencies.service";
import { EmergenciesController } from "./emergencies.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Emergency])],
  providers: [EmergenciesService],
  controllers: [EmergenciesController]
})
export class EmergenciesModule {}

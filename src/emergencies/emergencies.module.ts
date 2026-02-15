import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Emergency } from "./entities/emergency.entity";
import { Operation } from "./entities/operation.entity";
import { AdditionalData } from "./entities/additional.entity";
import { Closure } from "./entities/closure.entity";
import { Impact } from "./entities/impact.entity";
import { PatientReport } from "./entities/patient.entity";

import { EmergenciesService } from "./emergencies.service";
import { EmergenciesController } from "./emergencies.controller";

@Module({
  imports: [TypeOrmModule.forFeature([Emergency, Operation, AdditionalData, Closure, Impact, PatientReport])],
  providers: [EmergenciesService],
  controllers: [EmergenciesController]
})
export class EmergenciesModule {}

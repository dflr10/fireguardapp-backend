import { Controller, Get, Post, Body } from "@nestjs/common";
import { EmergenciesService } from "./emergencies.service";
import { CreateEmergencyDto } from "./dto/create-emergency.dto";

@Controller("api/emergencies")
export class EmergenciesController {
  constructor(private service: EmergenciesService) {}

  @Post()
  create(@Body() dto: CreateEmergencyDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }
}
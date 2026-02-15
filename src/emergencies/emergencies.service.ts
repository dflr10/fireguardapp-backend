import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Emergency } from "./entities/emergency.entity";
import { CreateEmergencyDto } from "./dto/create-emergency.dto";


@Injectable()
export class EmergenciesService {
  constructor(
    @InjectRepository(Emergency)
    private repo: Repository<Emergency>
  ) {}

async create(dto: CreateEmergencyDto) {
  if (dto.id) {
    const existing = await this.repo.findOne({
      where: { id: dto.id }
    });

    if (existing) {
      return existing;
    }
  }

  return this.repo.save({
    ...dto,
    synced: true
  });
}

  findAll() {
    return this.repo.find();
  }
}

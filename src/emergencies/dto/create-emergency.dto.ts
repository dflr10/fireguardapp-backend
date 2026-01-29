import { IsUUID, IsString, IsNotEmpty, IsLatitude, IsLongitude, IsIn, IsOptional } from "class-validator";
import { Type } from "class-transformer";

export class CreateEmergencyDto {

  @IsUUID()
  @IsOptional()
  id?: string;

  @IsString()
  @IsNotEmpty()
  departmentId: string;

  @IsString()
  @IsNotEmpty()
  municipalityId: string;

  @IsString()
  @IsNotEmpty()
  stationId: string;

  @IsString()
  @IsIn(["incendio", "accidente", "rescate", "inundacion", "otro"])
  type: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @Type(() => Number)
  @IsLatitude()
  lat: number;

  @Type(() => Number)
  @IsLongitude()
  lng: number;

  @IsString()
  @IsIn(["abierta", "en_proceso", "cerrada"])
  status: string;

  @IsString()
  @IsNotEmpty()
  createdBy: string;
}

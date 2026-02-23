import {
  IsUUID,
  IsString,
  IsNotEmpty,
  IsLatitude,
  IsLongitude,
  IsIn,
  IsOptional,
  ValidateNested,
  IsArray,
} from 'class-validator';
import { Type } from 'class-transformer';
import { OperationDto } from './operation.dto';
import { PatientDto } from './patient.dto';
import { ClosureDto } from './closure.dto';
import { AdditionalDto } from './additional.dto';
import { ImpactDto } from './impact.dto';

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
  @IsIn([
    'flight',
    'car_crash',
    'security',
    'person_remove',
    'search',
    'park',
    'apartment',
    'bug_report',
    'waves',
    'droplet',
    'water_drop',
    'plumbing',
    'terrain',
    'explosion',
    'power_off',
    'notifications_off',
    'air',
    'grain',
    'local_fire_department',
    'landslide',
    'forest',
    'directions_car',
    'construction',
    'warning',
    'helping_hand',
    'group',
    'favorite',
    'record_voice_over',
    'block',
    'pets',
    'wb_sunny',
    'sensors',
    'flash_on',
    'local_hospital',
    'groups',
    'heart_plus',
    'campaign',
    'flame_delete',
    'tornado',
  ])
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
  @IsIn(['Abierta', 'En proceso', 'Cerrada'])
  status: string;

  @IsString()
  @IsNotEmpty()
  createdBy: string;

  // SUBMODULES

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => OperationDto)
  operations?: OperationDto[];

  @IsOptional()
  @ValidateNested()
  @Type(() => ImpactDto)
  impact?: ImpactDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => AdditionalDto)
  additional?: AdditionalDto;

  @IsOptional()
  @ValidateNested()
  @Type(() => ClosureDto)
  closure?: ClosureDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => PatientDto)
  patients?: PatientDto[];
}

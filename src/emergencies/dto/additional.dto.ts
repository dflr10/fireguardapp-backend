import { IsOptional, IsString } from 'class-validator';

export class AdditionalDto {
  @IsOptional()
  @IsString()
  affectedName?: string;

  @IsOptional()
  @IsString()
  idNumber?: string;

  @IsOptional()
  @IsString()
  vehiclePlate?: string;

  @IsOptional()
  @IsString()
  fireNotes?: string;

  @IsOptional()
  @IsString()
  development?: string;
}

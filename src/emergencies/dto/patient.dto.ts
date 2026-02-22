import { IsOptional, IsString, IsNumber } from 'class-validator';

export class PatientDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  document?: string;

  @IsOptional()
  @IsNumber()
  age?: number;

  @IsOptional()
  @IsString()
  gender?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsString()
  address?: string;

  @IsOptional()
  @IsString()
  companion?: string;

  @IsOptional()
  @IsString({ each: true })
  injuries?: string[];

  @IsOptional()
  @IsNumber()
  glasgowEye?: number;

  @IsOptional()
  @IsNumber()
  glasgowVerbal?: number;

  @IsOptional()
  @IsNumber()
  glasgowMotor?: number;

  @IsOptional()
  @IsString({ each: true })
  procedures?: string[];

  @IsOptional()
  @IsString()
  notes?: string;

  @IsOptional()
  @IsString()
  transferredTo?: string;

  @IsOptional()
  @IsString()
  status?: string;
}

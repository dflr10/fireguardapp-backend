import { IsOptional, IsBoolean, IsNumber, IsString } from 'class-validator';

export class ClosureDto {
  @IsOptional()
  @IsNumber()
  distance?: number;

  @IsOptional()
  @IsNumber()
  finalKm?: number;

  @IsOptional()
  @IsBoolean()
  cleaning?: boolean;

  @IsOptional()
  @IsBoolean()
  organization?: boolean;

  @IsOptional()
  @IsString()
  heas?: string;

  @IsOptional()
  @IsString()
  observations?: string;

  @IsOptional()
  expenses?: any; 

  @IsOptional()
  @IsString()
  incidents?: string;
}

import { IsOptional, IsString, IsNumber, IsDateString, IsArray } from 'class-validator';

export class OperationDto {
  @IsOptional()
  @IsString()
  commander?: string;

  @IsOptional()
  @IsString()
  driver?: string;

  @IsOptional()
  @IsArray()
  assistants?: string[];

  @IsOptional()
  @IsString()
  vehicle?: string;

  @IsOptional()
  @IsDateString()
  departureTime?: Date;

  @IsOptional()
  @IsDateString()
  arrivalTime?: Date;

  @IsOptional()
  @IsNumber()
  units?: number;

  @IsOptional()
  @IsNumber()
  kmStart?: number;

  @IsOptional()
  @IsNumber()
  kmEnd?: number;
}

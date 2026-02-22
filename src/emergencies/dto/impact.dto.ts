import { IsOptional, IsNumber, IsString } from 'class-validator';

export class ImpactDto {
  @IsOptional() @IsNumber() deaths?: number;
  @IsOptional() @IsNumber() injured?: number;
  @IsOptional() @IsNumber() missing?: number;
  @IsOptional() @IsNumber() affectedPersons?: number;
  @IsOptional() @IsNumber() affectedFamilies?: number;
  @IsOptional() @IsNumber() affectedHouses?: number;
  @IsOptional() @IsNumber() affectedHousesDestroyed?: number;
  @IsOptional() @IsString() area?: string;
}

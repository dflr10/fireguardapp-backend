import { IsOptional, IsNumber, IsString } from 'class-validator';

export class ImpactDto {
  @IsOptional() @IsNumber() deaths?: number;
  @IsOptional() @IsNumber() injured?: number;
  @IsOptional() @IsNumber() missing?: number;
  @IsOptional() @IsNumber() affectedPeople?: number;
  @IsOptional() @IsNumber() affectedFamilies?: number;
  @IsOptional() @IsNumber() damagedHomes?: number;
  @IsOptional() @IsNumber() destroyedHomes?: number;
  @IsOptional() @IsString() area?: string;
}

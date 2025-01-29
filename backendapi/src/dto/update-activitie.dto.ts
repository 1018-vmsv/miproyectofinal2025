import { IsString, IsBoolean, IsOptional, IsNumber } from "class-validator";

export class updateActivitieDto{
    @IsString()
    @IsOptional()
    prenda: string;

    @IsNumber()
    @IsOptional()
    idcategoria?: number;
    
    @IsString()
    @IsOptional()
    description?: string;

    @IsBoolean()
    @IsOptional()
    stock?: number;
}


import { IsString, IsBoolean, IsNotEmpty, IsNumber } from "class-validator";

export class createActivitieDto{
    @IsString()
    @IsNotEmpty()
    prenda: string;

    @IsNumber()
    @IsNotEmpty()
    idcategoria:number;

    @IsString()
    @IsNotEmpty()
    description?: string;

    @IsBoolean()
    @IsNotEmpty()
    stock?: number;
}

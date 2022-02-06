import { IsNumber, IsString } from "class-validator";

export class IngredientDto{

    @IsString()
    name: string;

    @IsNumber()
    quantityInGrams: number;
}
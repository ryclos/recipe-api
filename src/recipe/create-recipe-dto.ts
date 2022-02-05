import { IngredientDto } from "./ingredient-dto";
import { IsArray, IsNumber, IsString } from "class-validator";

export class CreateRecipeDto {

    @IsNumber()
    id: number

    @IsString()
    name?: string

    @IsArray()
    ingredients: IngredientDto[]
    
    @IsArray()
    steps: string[]
}
import { IngredientDto } from "./ingredient-dto";
import { IsNumber, IsString, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

export class CreateRecipeDto {

    //UniqueID Comment faire ?
    @IsNumber()
    id: number

    @IsString()
    name?: string

    @ValidateNested() // Demande une sous validation interne à l'objet
    @Type( () => IngredientDto) // permet de spécifier quelle validation
    ingredients: IngredientDto[]

    @IsString({ each: true }) // Cela peut remplacer le fait que cela soit un @IsArray - each: true vérifie le type de chaques élément dans le tableau, il faut le déclarer sous forme d'objet
    steps: string[]
}
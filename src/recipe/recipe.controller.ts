import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateRecipeDto } from "./dto/create-recipe-dto";
import { Recipe } from "./recipe.interface";

@Controller('recipe')
export class RecipeController {
    recipes: Recipe[] = []
    constructor() {
        this.recipes = []
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createRecipe(@Body() body: CreateRecipeDto) {

        return this.create(body)
    }

    @Get()
    getAllRecipes() {
        // Mettre ici un logger ?
        return this.recipes
    }

    create(body){
        // Dédier ceci plus aux services normalement ?
        this.recipes.push(body)
    }
}

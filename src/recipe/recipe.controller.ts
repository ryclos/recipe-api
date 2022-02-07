import { Body, Controller, Get, NotFoundException, Param, Post, Query, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateRecipeDto } from "./dto/create-recipe-dto";
import { Recipe } from "./recipe.interface";
import { GetRecipesFiltersDto } from "./dto/get-recipes-filters-dto";
import any = jasmine.any;

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

    @Get(':id')
    getRecipe(@Param('id') param: CreateRecipeDto) {
        if (!this.recipes) {
            throw new NotFoundException()
        }
        console.log(this.recipes)
        return this.recipes
    }

    //@Get('recipe')
    //searchRecipe(@Query('recipe') query: GetRecipesFiltersDto){
    //    if (this.recipes) {
    //
    //    }
    //}

    create(body){
        // Dédier ceci plus aux services normalement ?
        this.recipes.push(body)
    }
}

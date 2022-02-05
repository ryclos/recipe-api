import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateRecipeDto } from "./create-recipe-dto";

@Controller('recipe')
export class RecipeController {
    recipes: { [id: number]: any[] }
    constructor() {
        this.recipes = {}
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createRecipe(@Body() body: CreateRecipeDto) {
        console.log(this.create(body))
        return this.create(body)
    }

    @Get()
    getAllRecipes() {
        console.log(this.recipes)
        return this.recipes
    }

    create(body){
        this.recipes[body.id] = body.name, body.ingredients[body.name, body.quantityInGrams], body.steps
    }
}
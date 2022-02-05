export class Recipe {
    id: number
    name?: string
    ingredients: ingredient[]
    steps: string[]
}

export class ingredient {
    name: string
    quantityInGrams: number
}
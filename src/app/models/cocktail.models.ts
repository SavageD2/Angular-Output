export class Cocktail{
    constructor(
        public name: string,
        public price: number,
        public picture: string
    ){}
}

export class CocktailJson{
    
    constructor(
        public cocktailList: Cocktail[]
    ){}
}
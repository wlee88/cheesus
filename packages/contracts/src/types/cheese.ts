export interface Cheese {
    name: string;
    // Validation for price to be done later
    pricePerKilo: number;
    description: string
    imageUrl: string;
    // better to ask but let's assume they said https://www.thecheeseweb.com/7-types-of-cheese
    type: 'fresh' | 'aged' | 'soft-white-rind' | 'semi-soft' | 'hard' | 'blue' | 'flavour-added'
    color: 'orange' | 'yellow' | 'white' | 'blue'
}

export interface CreateCheese extends Cheese {}
export interface UpdateCheese extends Cheese {
    id: string;
}

export interface DeleteCheese {
    id: string;
}
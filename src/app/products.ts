export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
};

export const products: Product[] = [
    {
        id: 1,
        name: 'Phone XL',
        description: 'A large phone with one of the best screens',
        price: 799,
    },
    {
        id: 2,
        name: 'Phone Mini',
        description: 'A great phone with one of the best cameras',
        price: 699,
    },
    {
        id: 3,
        name: 'Phone Standard',
        description: '',
        price: 299,
    },
];
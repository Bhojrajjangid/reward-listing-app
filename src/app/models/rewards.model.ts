export const placeholderImage = 'assets/images/placeholder.webp';

export interface Rewards {
    pk: number;
    name: string;
    points: number;
    display_img_url: string;
    quantity: number;
    low_quantity: number;
    valid_until: string | Date
}

export const originalRewards: Rewards[] = [
    {
        pk: 987,
        name: 'Adidas E-Gift card for Rs 1000',
        points: 250,
        display_img_url: 'assets/images/adidas.png',
        quantity: 14,
        valid_until: '2024-12-31T00:00:00',
        low_quantity: 10,
    },
    {
        pk: 988,
        name: 'H & M E-Gift card for Rs 2000',
        points: 300,
        display_img_url: 'assets/images/h&m.png',
        quantity: 1,
        valid_until: '2024-12-31T00:00:00',
        low_quantity: 1,
    },
    {
        pk: 989,
        name: 'McDonalds E-Gift card for Rs 100',
        points: 50,
        display_img_url: 'assets/images/mcdonalds.png',
        quantity: 20,
        valid_until: '2024-12-31T00:00:00',
        low_quantity: 10,
    },
    {
        pk: 990,
        name: 'Kachori worth Rs 200',
        points: 20,
        display_img_url: placeholderImage,
        quantity: 0,
        valid_until: '2024-12-31T00:00:00',
        low_quantity: 10,
    },
    {
        pk: 991,
        name: 'Prada E-Gift card for Rs 1000',
        points: 180,
        display_img_url: 'assets/images/prada.png',
        quantity: 3,
        valid_until: '2024-12-31T00:00:00',
        low_quantity: 12,
    },
    {
        pk: 992,
        name: 'Starbucks E-Gift card for Rs 5000',
        points: 150,
        display_img_url: 'assets/images/starbucks.png',
        quantity: 3,
        valid_until: '2024-12-31T00:00:00',
        low_quantity: 9,
    },
    {
        pk: 993,
        name: 'Unilever E-Gift card for Rs 500',
        points: 18,
        display_img_url: 'assets/images/unilever.png',
        quantity: 2,
        valid_until: '2024-12-31T00:00:00',
        low_quantity: 8,
    },
    {
        pk: 994,
        name: 'Wolkswagon E-Gift card for Rs 100000',
        points: 18000,
        display_img_url: 'assets/images/wolkswagon.png',
        quantity: 3,
        valid_until: '2024-12-31T00:00:00',
        low_quantity: 5,
    },
    {
        pk: 995,
        name: 'Zata E-Gift card for Rs 1000',
        points: 180,
        display_img_url: 'assets/images/zara.webp',
        quantity: 0,
        valid_until: '2024-12-31T00:00:00',
        low_quantity: 10,
    },
    {
        pk: 996,
        name: 'Empty E-Gift card for Rs 1000',
        points: 180,
        display_img_url: '',
        quantity: 3,
        valid_until: '2024-12-31T00:00:00',
        low_quantity: 107,
    }
];

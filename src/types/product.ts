export interface Product {
    id: string;
    title: string;
    price: number;
    currency_id: string;
    available_quantity: number;
    thumbnail: string;
    condition: string;
    seller: {
        id: number;
        power_seller_status: string;
        car_dealer: boolean;
        real_estate_agency: boolean;
        tags: string[];
    };
}

import { Order } from './Order';
import { Product } from './Product';

export class Provider {
    name: string = ""
    products : Array<Product>
    orders: Array<Order>

    constructor() {}
}
import { AppDataSource } from '../database';
import Product from '../models/Product';

type ProductRequest = {
    name: string,
    price: number,
    amount: number,
    active: boolean
}

class CreateProductService {
    
    async execute({name, price, amount, active}:ProductRequest): Promise<Product | Error>{
        const productRepository = AppDataSource.getRepository(Product);
        const product = new Product();

        if(await productRepository.findOneBy({name: name})){
            return new Error("Product already exist!");
        }

        product.name = name;
        product.price = price;
        product.amount = amount;
        product.active = active;

        await productRepository.save(product);

        return product;
    }
};

class GetProductService {
    
    async execute(): Promise<Product[] | Error>{
        const productRepository = AppDataSource.getRepository(Product);

        const allProducts = await productRepository.find();

        return allProducts;
    }
};

export {
    CreateProductService,
    GetProductService
};
import { AppDataSource } from '../database';
import Product from '../models/Product';

type ProductRequest = {
    name: string,
    price: number,
    amount: number,
    active: boolean
}

type ProductUpdateRequest = {
    id: number,
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

class DeleteProductService {

    async execute({id}): Promise<Product | Error>{
        const productRepository = AppDataSource.getRepository(Product);

        const productRemove = await productRepository.findOneBy({id: id});

        await productRepository.remove(productRemove);

        return productRemove;
    }
}

class UpdateProductService {

    async execute({id, name, price, amount, active}: ProductUpdateRequest){
        const productRepository = AppDataSource.getRepository(Product);

        const productUpdate = await productRepository.findOneBy({id: id});

        if(!productUpdate){
            return new Error("Product does not exists!");
        }

        productUpdate.name = name ? name : productUpdate.name;
        productUpdate.price = price ? price : productUpdate.price;
        productUpdate.amount = amount ? amount : productUpdate.amount;
        productUpdate.active = active ? active : productUpdate.active;

        await productRepository.save(productUpdate);

        return productUpdate;
    }
}

export {
    CreateProductService,
    GetProductService,
    DeleteProductService,
    UpdateProductService
};
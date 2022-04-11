import { Request, Response } from "express";

import { CreateProductService, GetProductService, DeleteProductService, UpdateProductService } from "../services/productService";


export class ProductController {
    async getAllProducts(req: Request, res: Response) {
        const service = new GetProductService();

        const result = await service.execute();

        if(result instanceof Error){
            return res.status(400).json(result.message);
        };

        return res.status(200).send(result);
    }

    async createProduct(req: Request, res: Response) {

        const { name, price, amount, active } = req.body;
        
        const service = new CreateProductService();

        const result = await service.execute({ name, price, amount, active });

        if(result instanceof Error){
            return res.status(400).json(result.message);
        };

        return res.status(200).send('Product created successfully!');
    }

    async deleteProduct(req: Request, res: Response) {
        const { id } = req.params;

        const service = new DeleteProductService();

        const result = await  service.execute({id: parseInt(id)});

        if(result instanceof Error){
            return res.status(400).json(result.message);
        }

        return res.status(200).send('Product removed successfully!');
    }

    async updateProduct(req: Request, res: Response) {
        const { id } = req.params;
        const { name, price, amount, active } = req.body;

        const service = new UpdateProductService();
        
        const result = await service.execute({id: parseInt(id),name, price, amount, active})

        if(result instanceof Error){
            return res.status(400).json(result.message);
        }

        return res.status(200).send('Product updated successfully!');
    }
}
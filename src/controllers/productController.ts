import { Request, Response } from "express";

import { CreateProductService, GetProductService } from "../services/productService";


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
}
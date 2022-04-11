import { Router } from "express";

import controllers from "../controllers";

const router = Router();

router.get('/products', new controllers.ProductController().getAllProducts);
router.post('/products', new controllers.ProductController().createProduct);
router.put('/products/:id', new controllers.ProductController().updateProduct);
router.delete('/products/:id', new controllers.ProductController().deleteProduct);

export default router;
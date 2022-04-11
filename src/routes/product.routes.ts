import { Router } from "express";

import controllers from "../controllers";

const router = Router();

router.get('/products', new controllers.ProductController().getAllProducts);
router.post('/products', new controllers.ProductController().createProduct);

export default router;
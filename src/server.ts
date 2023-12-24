import bodyParser = require("body-parser");
import  { Application, NextFunction, Request, Response } from "express";
import express = require("express");

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

let products: Product[] = [
    {id: 1, name:'Product 1', description:'Description 1', price:10},
    {id: 2, name:'Product 2', description:'Description 2', price:20}
];

export const app: Application = express();

const logRequest = (req: Request, res: Response, next: NextFunction) => {
    const timestamp = new Date().toISOString();
    const { method, originalUrl } = req;
  
    console.log(`[${timestamp}] ${method} request to ${originalUrl}`);
    next(); // Call next to move to the next middleware or route handler
  };

app.use(logRequest);  

app.use(bodyParser.json());

app.get('/api/products', (req: Request, res: Response) => {
    res.json(products);
  });


app.get('/api/products/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const product = products.find((p) => p.id === id);
    if(product) {
        res.json(product);
    }else {
        res.status(404).json({message:'Product not found'});
    }
})

app.post('/api/products', (req: Request, res: Response)=>{
    const { name, description, price } = req.body;
    const id = products.length + 1;
    const newProduct: Product = {id, name, description, price};
    products.push(newProduct);
    res.status(201).json(newProduct);
})

app.put('/api/products/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { name, description, price } = req.body;
    const find = products.findIndex(p => p.id === id);
    if(find != -1){
        products[find] = {id, name, description, price};
        res.json(products[find]);
    }else{
        res.status(404).json({message:'Product not found'});
    }
})

app.delete('/api/products/:id', (req: Request, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);
    if(index != -1){
        products.splice(index, 1);
        res.json({message: 'Product deleted successfully'});
    }else{
        res.status(404).json({message:'Product deleted already or Product not found'});
    }
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});



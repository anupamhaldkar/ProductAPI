"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const bodyParser = require("body-parser");
const express = require("express");
let products = [
    { id: 1, name: 'Product 1', description: 'Description 1', price: 10 },
    { id: 2, name: 'Product 2', description: 'Description 2', price: 20 }
];
exports.app = express();
const logRequest = (req, res, next) => {
    const timestamp = new Date().toISOString();
    const { method, originalUrl } = req;
    console.log(`[${timestamp}] ${method} request to ${originalUrl}`);
    next(); // Call next to move to the next middleware or route handler
};
exports.app.use(logRequest);
exports.app.use(bodyParser.json());
exports.app.get('/api/products', (req, res) => {
    res.json(products);
});
exports.app.get('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find((p) => p.id === id);
    if (product) {
        res.json(product);
    }
    else {
        res.status(404).json({ message: 'Product not found' });
    }
});
exports.app.post('/api/products', (req, res) => {
    const { name, description, price } = req.body;
    const id = products.length + 1;
    const newProduct = { id, name, description, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
});
exports.app.put('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const { name, description, price } = req.body;
    const find = products.findIndex(p => p.id === id);
    if (find != -1) {
        products[find] = { id, name, description, price };
        res.json(products[find]);
    }
    else {
        res.status(404).json({ message: 'Product not found' });
    }
});
exports.app.delete('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);
    if (index != -1) {
        products.splice(index, 1);
        res.json({ message: 'Product deleted successfully' });
    }
    else {
        res.status(404).json({ message: 'Product deleted already or Product not found' });
    }
});
const PORT = 3000;
exports.app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
//# sourceMappingURL=server.js.map
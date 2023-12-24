# Product API documentation

This project includes CRUD functionality related to product. 

## Table of Contents

- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Tests](#tests)
- [Postman Collection](#postman-collection)

## Installation

1. Clone the repository.
2. Install dependencies using `npm install`.
4. Start the application using `npx tsc` and `npx nodemon src/server.js`.

## API Endpoints

- `GET /api/products`: Retrieve a list of products.

Example:
- Request - localhost:3000/api/products

- Response:

```
[
    {
        "id": 2,
        "name": "Product 2",
        "description": "Description 2",
        "price": 20
    },
    {
        "id": 3,
        "name": "New Product",
        "description": "New Description",
        "price": 50
    }
]
```

- `GET /api/products/:id`: Retrieve details of a specific product by ID.

Example:

- Request - localhost:3000/api/products/3

- Response:

```
{
    "id": 3,
    "name": "New Product",
    "description": "New Description",
    "price": 50
}
```

- `POST /api/products`: Create a new product.

Example:

- Request - localhost:3000/api/products

```
{
    "name":"Product 4",
    "description": "description 4",
    "price":36
}
```



- Response:
```
{
    "id": 4,
    "name": "Product 4",
    "description": "description 4",
    "price": 36
}
```

- `PUT /api/products/:id`: Update details of a specific product by ID.

Example:
- Request - localhost:3000/api/products/4

```
{
    "name":"product 3 changed",
    "description":"description is same",
    "price":30
}
```

- Response:

```
{
    "id": 4,
    "name": "product 3 changed",
    "description": "description is same",
    "price": 30
}
```



- `DELETE /api/products/:id`: Delete a product by ID.

Example: 
- Request - localhost:3000/api/products/4

- Response:

```
{
    "message": "Product deleted successfully"
}

```

## Tests

Explain how to run tests and provide any necessary instructions for testing the API endpoints.

Run tests using `npm test`.

## Postman Collection

- Import the postman collection present in `docs` folder for manual testing




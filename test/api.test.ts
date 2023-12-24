import chai from "chai";
import chaiHttp from "chai-http";
import {app} from "../src/server";

chai.use(chaiHttp);
const expect = chai.expect;

describe('API Endpoint Tests', () => {
  
  it('should get a list of products', (done) => {
    chai.request(app)
      .get('/api/products')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });


  it('should get details of a specific product by ID', (done) => {
    const productId = 1; // Replace with an existing product ID
    chai.request(app)
      .get(`/api/products/${productId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id', productId);
        done();
      });
  });


  it('should create a new product', (done) => {
    const newProduct = {
      name: 'New Product',
      description: 'New Description',
      price: 50
    };
    chai.request(app)
      .post('/api/products')
      .send(newProduct)
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('name', newProduct.name);
        done();
      });
  });


  it('should update details of a specific product by ID', (done) => {
    const productId = 1; 
    const updatedProduct = {
      name: 'Updated Product',
      description: 'Updated Description',
      price: 75
    };
    chai.request(app)
      .put(`/api/products/${productId}`)
      .send(updatedProduct)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('name', updatedProduct.name);
        done();
      });
  });

  it('should delete a product by ID', (done) => {
    const productId = 1; 
    chai.request(app)
      .delete(`/api/products/${productId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('message', 'Product deleted successfully');
        done();
      });
  });
});
import React, { useState } from "react";
import axios from "axios";
import { Container, Form, Button, Alert } from "react-bootstrap";
import Navigation from "../Components/Navigation";

const ProductsPage: React.FC = () => {
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImageUrl, setProductImageUrl] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/furniture/add",
        {
          name: productName,
          description: productDescription,
          price: parseFloat(productPrice),
          imageUrl: productImageUrl,
        }
      );
      console.log("Product added:", response.data);
      setSuccessMessage("Product successfully added!");
      setProductName("");
      setProductDescription("");
      setProductPrice("");
      setProductImageUrl("");
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <Container>
      <Navigation />
      <h2>Add Product</h2>
      {successMessage && <Alert variant="success">{successMessage}</Alert>}
      <Form onSubmit={handleAddProduct}>
        <Form.Group controlId="formProductName">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formProductDescription">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            as="textarea"
            value={productDescription}
            onChange={(e) => setProductDescription(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formProductPrice">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="text"
            value={productPrice}
            onChange={(e) => setProductPrice(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formProductImageUrl">
          <Form.Label>Product Image URL</Form.Label>
          <Form.Control
            type="text"
            value={productImageUrl}
            onChange={(e) => setProductImageUrl(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Product
        </Button>
      </Form>
    </Container>
  );
};

export default ProductsPage;

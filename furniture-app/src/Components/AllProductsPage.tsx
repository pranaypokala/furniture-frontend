import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, ListGroup, Button, Image } from "react-bootstrap";
import Navigation from "./Navigation";

const AllProductsPage: React.FC = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/furniture/all"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDeleteProduct = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/furniture/delete/${id}`);
      setProducts(products.filter((product: any) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div>
      <Navigation />
      <Container>
        <h2>All Products</h2>
        <p>Here are the total products:</p>
        <ListGroup>
          {products.map((product: any) => (
            <ListGroup.Item key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
              {product.imageUrl && (
                <Image src={product.imageUrl} alt={product.name} thumbnail />
              )}
              <Button
                variant="danger"
                onClick={() => handleDeleteProduct(product.id)}
              >
                Delete
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Container>
    </div>
  );
};

export default AllProductsPage;

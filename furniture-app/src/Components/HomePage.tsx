import React from "react";
import Navigation from "../Components/Navigation";
import { Container } from "react-bootstrap";

const HomePage: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <h2 className="my-4">Home Page</h2>
        <p>Welcome to our furniture store!</p>
      </Container>
    </div>
  );
};

export default HomePage;

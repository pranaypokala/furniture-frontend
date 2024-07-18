import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../Components/Navigation";

const ContactUsPage: React.FC = () => {
  return (
    <div>
      <Navigation />
      <Container>
        <h2 className="my-4">Contact Us</h2>
        <p>
          For inquiries, please email us at example@example.com or call us at
          +123456789.
        </p>
      </Container>
    </div>
  );
};

export default ContactUsPage;

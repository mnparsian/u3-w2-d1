import React from "react";
import { Col, Card } from "react-bootstrap";

const SingleBook = ({ book, isSelected, onBookClick }) => {
  const cardStyle = isSelected ? { border: "2px solid red", cursor: "pointer" } : { cursor: "pointer" };

  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card style={cardStyle} onClick={onBookClick}>
        <Card.Img variant="top" src={book.img} alt={book.title} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            <p>Price: {book.price} €</p>
            <p>Category: {book.category}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;

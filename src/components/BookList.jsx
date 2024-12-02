import { Container, Row } from "react-bootstrap";
import SingleBook from "./SingleBook";

const BookList = ({ books, onBookSelect, selectedAsin }) => (
  <Container className="mt-4">
    <Row>
      {books.map((book) => (
        <SingleBook
          key={book.asin}
          book={book}
          isSelected={selectedAsin === book.asin}
          onBookClick={() => onBookSelect(book.asin)}
        />
      ))}
    </Row>
  </Container>
);

export default BookList;

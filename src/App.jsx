import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import BookList from "./components/BookList";
import Books from "./data/fantasy.json";
import { Col, Container, Row } from "react-bootstrap";
import { Component } from "react";
import CommentArea from "./components/CommentArea";

class App extends Component {
  state = {
    selectedBookAsin: null 
  };

  handleBookSelect = (asin) => {
    this.setState({ selectedBookAsin: asin });
  };

  render() {
    return (
      <>
        <MyNav />
        <Welcome />
        <Container fluid>
          <Row>
            <Col xs={9}>
              <BookList books={Books} onBookSelect={this.handleBookSelect} selectedAsin={this.state.selectedBookAsin} />
            </Col>
            <Col xs={3} style={{ position: "sticky", top: "10px", height: "100vh" }}>
              <h2>Comment Area</h2>
              {this.state.selectedBookAsin ? <CommentArea asin={this.state.selectedBookAsin} /> : <p>Please select a book to see comments.</p>}
            </Col>
          </Row>
        </Container>
        <MyFooter />
      </>
    );
  }
}

export default App;

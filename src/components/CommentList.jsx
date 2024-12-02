import React, { Component } from "react";
import SingleComment from "./SingleComment";

class CommentList extends Component {
  state = {
    comments: [],
  };

  componentDidUpdate(prevProps) {
    if (prevProps.asin !== this.props.asin && this.props.asin) {
      fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.asin}`, {
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzM3MTBhMjhhZDEyOTAwMTU4NzZiZDIiLCJpYXQiOjE3MzMxNDg5NzAsImV4cCI6MTczNDM1ODU3MH0.nrrDVB1UUFuPI_WXjQBVZ8yvW-tTlkZl_JpTKZ_DCsI"
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Failed to fetch data");
          }
        })
        .then((data) => {
          this.setState({ comments: data });
        })
        .catch((error) => {
          console.error("Error fetching comments:", error);
          this.setState({ comments: [] });
        });
    }
  }

  render() {
    const { comments } = this.state;

    if (!this.props.asin) {
      return <p>No comments to display. Select a book first!</p>;
    }

    return (
      <div>
        <ul>
          {comments.map((comment) => (
            <li key={comment._id}>
              <SingleComment comment={comment} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CommentList;

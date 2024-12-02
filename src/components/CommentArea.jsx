import CommentList from "./CommentList"
import AddComment from "./AddComment"

const CommentArea = ({ asin }) => {
  if (!asin) {
    return <div>Select a book to see its comments</div>;
  }

  return (
    <div>
      <h5 className="px-2 py-2 border-bottom border-top">Reviews:</h5>
      <CommentList asin={asin} />
      <AddComment asin={asin} />
    </div>
  );
};
export default CommentArea
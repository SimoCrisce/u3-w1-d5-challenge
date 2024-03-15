import Col from "react-bootstrap/Col";

const SingleMovie = function (props) {
  return (
    <Col className="col mb-2 text-center px-1">
      <img className="img-fluid" src={props.aMovie} alt="movie" />
    </Col>
  );
};

export default SingleMovie;

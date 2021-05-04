import Card from "react-bootstrap/Card"

const Results = (props) => {
  return(
    <div>
      <Card>
        <Card.Body>
          {props.results.title && <div>タイトル：{props.results.title}</div>}
          {props.results.author && <div>{props.results.author}</div>}
          {props.results.publisher && <div>出版社：{props.results.publisher}</div>}
        </Card.Body>
      </Card>
      {props.results.url && <img src={props.results.url} width="300" alt="書影"/>}
    </div>
  );
};

export default Results;
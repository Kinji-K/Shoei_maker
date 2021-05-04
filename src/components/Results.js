import Card from "react-bootstrap/Card"

const Results = (props) => {
  return(
    <div>
      <Card>
        <Card.Body>
          {props.results.title && <p>タイトル：{props.results.title}</p>}
          {props.results.author && <p>{props.results.author}</p>}
          {props.results.publisher && <p>出版社：{props.results.publisher}</p>}
        </Card.Body>
      </Card>
      {props.results.url && <Card><Card.Body><img src={props.results.url} className="cover" width="300" alt="書影"/></Card.Body></Card>}
    </div>
  );
};

export default Results;
import Card from "react-bootstrap/Card";
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Sns from './Sns';

const Results = (props) => {
  const params = useParams();
  useEffect(() => props.getData(params.isbn),[]);

  return(
    <div>
      <Card>
        <Card.Body>
          {props.result.title && <p>タイトル：{props.result.title}</p>}
          {props.result.author && <p>{props.result.author}</p>}
          {props.result.publisher && <p>出版社：{props.result.publisher}</p>}
          <Sns />
        </Card.Body>
      </Card>
      {props.result.url && <Card><Card.Body><img src={props.result.url} className="cover" width="300" alt="書影"/></Card.Body></Card>}
    </div>
  );
};

export default Results;
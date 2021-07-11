import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'
import {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import Sns from './Sns';

const Results = (props) => {
  const params = useParams();
  
  useEffect(() => {
    props.setIsloading(true);
    props.getData(params.isbn);
    props.setFilename(params.isbn.replace(/-/g, '') + ".jpg");
    props.setIsloading(false);
  }
    ,[params.isbn]);

  return(
    <>
      {props.isloading ?
        <div>
          <br/>
          <Spinner animation="border" />
        </div>
      :
      <div>
      <Card>
        <Card.Body>
          {props.result.title && <p>タイトル：{props.result.title}</p>}
          {props.result.author && <p>{props.result.author}</p>}
          {props.result.publisher && <p>出版社：{props.result.publisher}</p>}
          <Sns />
        </Card.Body>
      </Card>
      {props.result.url && 
      <Card>
        <Card.Body>
        <Button variant="secondary" href={props.blob} download={props.filename}>画像をダウンロード</Button><br/><br/>
          <img src={props.result.url} className="cover" width="300" alt="書影"/>
        </Card.Body>
      </Card>}
      </div>
      }
   </>
  );
};

export default Results;
import Card from "react-bootstrap/Card"
import {useLocation} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

const Results = (props) => {
  const [result,setResult] = useState({
    title: "",
    author: "",
    publisher: "",
    url:""
  });
  const location = useLocation()

  
  axios.get(`https://api.openbd.jp/v1/get${location.search}`)
  .then(res => {
    try{
      setResult({
        title : res.data[0].summary.title,
        author : res.data[0].summary.author,
        publisher : res.data[0].summary.publisher,
        url : res.data[0].summary.cover
      })
    } catch {
      setResult({
        title : "お探しの書籍は見つかりません",
        author : "",
        publisher : "",
        url : ""
      })
    }
    console.log(result)
  }).then(console.log(result.title))
  
  

  return(
    <div>
      <p>{location.search}</p>
      <Card>
        <Card.Body>
          {result.title && <p>タイトル：{result.title}</p>}
          {result.author && <p>{result.author}</p>}
          {result.publisher && <p>出版社：{result.publisher}</p>}
        </Card.Body>
      </Card>
      {result.url && <Card><Card.Body><img src={result.url} className="cover" width="300" alt="書影"/></Card.Body></Card>}
    </div>
  );
};

export default Results;
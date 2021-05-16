import Title from  "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useState} from "react";
import './App.css';

function App() {
  const [isbn,setIsbn] = useState("");
  const [result,setResult] = useState({
    title: "",
    author: "",
    publisher: "",
    url:""
  });

  // OpenDB APIへのアクセス・情報取得
  const getData = (isbn_code) => {
    axios.get(`https://api.openbd.jp/v1/get?isbn=${isbn_code}`)
    .then(res => {
      try{
        setResult({
          title: res.data[0].summary.title,
          author: res.data[0].summary.author,
          publisher: res.data[0].summary.publisher,
          url:res.data[0].summary.cover
        });
      } catch {
        setResult({
          title: "お探しの書籍は見つかりません",
          author: "",
          publisher: "",
          url:""
        });        
      }
  })
  };

  return (
    <div className="App">
      <Header />
      <Title />
      <Router>
        <Switch>
          <Route path="/" exact>
            <Form isbn={isbn} setIsbn={setIsbn}/>
          </Route>
          <Route path="/book/:isbn">
            <Form  isbn={isbn} setIsbn={setIsbn}/>
            <Results result={result} getData={getData}/>
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
};

export default App;

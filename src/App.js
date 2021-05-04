import Title from  "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import Header from "./components/Header";
import Footer from "./components/Footer";
import axios from "axios";
import {useState} from "react";
import './App.css';

function App() {
  // stateの宣言
  const [isbn,setIsbn] = useState("");
  const [results,setResults] = useState({
    title:"",
    author:"",
    publisher:"",
    url:""
  });

  // OpenDB APIへのアクセス・情報取得
  const getData = (e) => {
    e.preventDefault();
    axios.get(`https://api.openbd.jp/v1/get?isbn=${isbn}`)
    .then(res => {
      try{
        setResults({
          title: res.data[0].summary.title,
          author: res.data[0].summary.author,
          publisher: res.data[0].summary.publisher,
          url:res.data[0].summary.cover
        });
      } catch {
        setResults({
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
      <Form setIsbn={setIsbn} getData={getData}/>
      <Results results={results}/>
      <Footer />
    </div>
  );
};

export default App;

import Title from  "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Route } from 'react-router-dom';
import {useState} from "react";
import './App.css';

function App() {
  const [isbn,setIsbn] = useState("");

  return (
    <div className="App">
      <Header />
      <Title />
      <Router>
        <Form setIsbn={setIsbn}/>
        <Route component={Results} />
      </Router>
      <Footer />
    </div>
  );
};

export default App;

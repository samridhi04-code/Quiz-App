import React, { useEffect, useState } from 'react';
import axios from "axios";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home.js';
import Play from './components/Quiz/Play.js';
import QuizInstructions from './components/Quiz/QuizInstructions.js';

function App() {

  const [data, setData] = useState({});
    const URL = "https://opentdb.com/api.php?amount=10";
  
    useEffect(() => {
      axios.get(`${URL}`)
      .then((res) => {
          setData(res.data);
      })
      .catch((err) => {
          console.log("Error", err);
      })
  }, [])
  return (
    <BrowserRouter>

        <Routes>
        <Route path="/" element={<Home/>} />
        </Routes>
        <Routes>
        <Route path="/play/quiz" element={<Play fetchedData={data}/>} />
        </Routes>
        <Routes>
        <Route  path="/play/instructions" element={<QuizInstructions/>} />
        </Routes>
        </BrowserRouter>


  );
}

export default App;

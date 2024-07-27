import './App.css';
import { useState } from 'react';
import QuestionComponent from './Components/QuestionComponent';
import PlayerInfoComponent from './Components/PlayerInfoComponent';

let App=()=> {
  let [points,setPoints]=useState(0)
  let [questions, setQuestions] = useState([
    {
      text: "¿Cual es la capital de España",
      options: ["Madrid","Paris","Berlin"],
      answer: 0
    },
    {
      text: "¿Cual es la capital de Alemania",
      options: ["Madrid","Paris","Berlin","Tokio"],
      answer: 2
    },
    {
      text: "¿Cuanto es 10+10?",
      options: [],
      answer: 20
    },
    {
      text: "¿Cual es la capital de Alemania",
      options: [],
      answer: "Berlin"
    }
  ])


  return (
    <div className="App">
      <PlayerInfoComponent points={points}/>
      <QuestionComponent questions={questions} points={points}setPoints={setPoints}/>
    </div>
  );
}

export default App;

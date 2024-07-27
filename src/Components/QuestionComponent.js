import { useState } from "react"

let QuestionComponent = (props) => {
    let {questions,setPoints,points} = props
    let [numberOfQuestion,setNumberOfQuestion] = useState(0)

    let answerQuestion = (answer) => {
        if (answer == questions[numberOfQuestion].answer){
            setPoints(points+1)
            //msg
        }else{
            //msg
        }

        if(numberOfQuestion<questions.length-1){
            setNumberOfQuestion(numberOfQuestion+1)
        }else{
            setTimeout(()=>{
                setNumberOfQuestion(0)
                setPoints(0)
            },4000)
            
        }
    }

    return (
        <div className = "question">
            <h2>Question</h2>
            <p id="questionText"> {questions[numberOfQuestion].text}</p>
            <ul className="options">
                <li><button onClick={()=>{answerQuestion(0)}}>{questions[numberOfQuestion].options[0]}</button></li>
                <li><button onClick={()=>{answerQuestion(1)}}>{questions[numberOfQuestion].options[1]}</button></li>
                <li><button onClick={()=>{answerQuestion(2)}}>{questions[numberOfQuestion].options[2]}</button></li>
            </ul>
        </div>
    )
}

export default QuestionComponent;
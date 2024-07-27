import { useState } from "react"

let QuestionComponent = (props) => {
    let {questions,setPoints,points} = props
    let [numberOfQuestion,setNumberOfQuestion] = useState(0)
    let [message,setMessage]=useState(null)

    let answerQuestion = (answer) => {
        if (answer == questions[numberOfQuestion].answer){
            setMessage("Right answer")
            setPoints(points+1)
            //msg
        }else{
            setMessage("Wrong answer")
        }

        if(numberOfQuestion<questions.length-1){
            setNumberOfQuestion(numberOfQuestion+1)
            setTimeout(()=>{
                setMessage(null)
            },2000)
        }else{
            setTimeout(()=>{
                setMessage("Finish")
            },2000)
            setTimeout(()=>{
                setNumberOfQuestion(0)
                setPoints(0)
            },4000)
            
        }
    }

    return (
        <div className = "question">
            {message !=null &&
                <h2>{message}</h2>}
            <h2>Question</h2>
            <p id="questionText"> {questions[numberOfQuestion].text}</p>
            <ul className="options">
                {questions[numberOfQuestion].options.map((option,i)=>
                  <li><button onClick={()=>{answerQuestion(i)}}>{option}</button></li>  
                )}
            </ul>
        </div>
    )
}

export default QuestionComponent;
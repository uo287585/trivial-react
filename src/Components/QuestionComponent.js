import { useState } from "react"

let QuestionComponent = (props) => {
    let {questions,setPoints,points} = props
    let [numberOfQuestion,setNumberOfQuestion] = useState(0)
    let [message,setMessage]=useState(null)
    let [myAnswer,setMyAnswer]=useState("")

    let answerQuestion = (answer) => {
        if (answer == questions[numberOfQuestion].answer){
            setMessage("Right answer")
            setPoints(points+1)
            //msg
        }else{
            if(questions[numberOfQuestion].options.length>0)
                setMessage("Wrong answer.Correct answer: "+questions[numberOfQuestion].options[questions[numberOfQuestion].answer])
            else
                setMessage("Wrong answer.Correct answer: "+questions[numberOfQuestion].answer)
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

            {questions[numberOfQuestion].options.length>0 && 
            <ul className="options">
                {questions[numberOfQuestion].options.map((option,i)=>
                  <li key ={option}><button onClick={()=>{answerQuestion(i)}}>{option}</button></li>  
                )}
            </ul>
            }

            {questions[numberOfQuestion].options.length==0 &&
            <div>             
                <input type='text' placeholder='Your answer' onChange={(e)=>{setMyAnswer(e.currentTarget.value)}}/>
                <button onClick={()=>{answerQuestion(myAnswer)}}>Send</button>
            </div>
            }
        </div>
    )
}

export default QuestionComponent;
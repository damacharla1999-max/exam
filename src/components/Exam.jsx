import { useState, useEffect } from "react"
import { reactQuestions, javaQuestions, pythonQuestions } from "../data/questions"
import { getFromLocalStorage, STORAGE_KEYS } from '../utils/localStorage'

function Exam({user,subject,setResult,setPage}){

const [selections,setSelections]=useState([])
const [answers,setAnswers]=useState([])
const [questions, setQuestions] = useState([])

// Load questions on component mount and when subject changes
useEffect(() => {
    loadQuestions()
}, [subject])

function loadQuestions() {
    // Get default questions based on subject
    const defaultQuestions = subject === "react" ? reactQuestions : 
                           subject === "java" ? javaQuestions : 
                           pythonQuestions

    // Get bulk uploaded questions for this subject
    const bulkQuestionsData = getFromLocalStorage(STORAGE_KEYS.BULK_QUESTIONS) || {}
    const bulkQuestions = bulkQuestionsData[subject] || []

    // Merge default questions with bulk questions
    const allQuestions = [...defaultQuestions, ...bulkQuestions]
    
    // Shuffle the questions for randomization
    const shuffledQuestions = allQuestions.sort(() => Math.random() - 0.5)
    
    setQuestions(shuffledQuestions)
    setSelections(Array(shuffledQuestions.length).fill(""))
}

if(!user){
return (
<div className="card">
<h2>Please Login to Take the Exam</h2>
<button className="primary" onClick={()=>setPage("loginexam")}>
Go to Login
</button>
</div>
)
}

function handleSelection(index, option) {
  const newSelections = [...selections];
  newSelections[index] = option;
  setSelections(newSelections);
}

function submit(){
  const newAnswers = questions.map((q, i) => ({
    correct: q.answer,
    selected: selections[i] || ""
  }))
  setResult(newAnswers)
  setPage("results")
}

return(

<div className="card exam">

{questions.map((q, index) => (

<div key={index} className="question">

<h4>Question {index+1}: {q.question}</h4>

{q.options.map((opt,i)=>(
<div key={i}>
<input
type="radio"
checked={selections[index]===opt}
onChange={()=>handleSelection(index, opt)}
/>
{opt}
</div>
))}

</div>

))}

<button className="primary"
onClick={submit}>
Submit
</button>

</div>

)

}

export default Exam
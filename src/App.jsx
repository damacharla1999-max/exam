import { useState } from "react"
import Sidebar from "./components/Sidebar"
import Home from "./components/Home"
import Registration from "./components/Registration"
import Students from "./components/Students"
import LoginExam from "./components/LoginExam"
import SubjectSelect from "./components/SubjectSelect"
import Exam from "./components/Exam"
import Results from "./components/Results"
import RankCard from "./components/RankCard"
import Certificate from "./components/Certificate"
import History from "./components/History"
import './App.css'

function App(){

const [page,setPage]=useState("home")
const [user,setUser]=useState(null)
const [result,setResult]=useState(null)
const [subject,setSubject]=useState("react")

function renderPage(){

switch(page){

case "home":
return <Home/>

case "registration":
return <Registration/>

case "students":
return <Students/>

case "loginexam":
return <LoginExam setUser={setUser} setPage={setPage}/>

case "subjectselect":
return <SubjectSelect setSubject={setSubject} setPage={setPage}/>

case "exam":
return <Exam user={user} subject={subject} setResult={setResult} setPage={setPage}/>

case "results":
return <Results result={result} user={user} subject={subject}/>

case "rank":
return <RankCard result={result} user={user} subject={subject}/>

case "certificate":
return <Certificate result={result} user={user} subject={subject}/>

case "history":
return <History user={user}/>

default:
return <Home/>

}

}

return(

<div className="layout">

<Sidebar setPage={setPage}/>

<div className="content">
{renderPage()}
</div>

</div>

)

}

export default App
import { useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
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

const [user,setUser]=useState(null)
const [result,setResult]=useState(null)
const [subject,setSubject]=useState("react")

return(

<Router>

<div className="layout">

<Sidebar/>

<div className="content">

<Routes>

<Route path="/" element={<Home/>} />

<Route path="/registration" element={<Registration/>} />

<Route path="/students" element={<Students/>} />

<Route path="/loginexam" element={<LoginExam setUser={setUser}/>} />

<Route path="/subjectselect" element={<SubjectSelect setSubject={setSubject}/>} />

<Route path="/exam" element={<Exam user={user} subject={subject} setResult={setResult}/>} />

<Route path="/results" element={<Results result={result} user={user} subject={subject}/>} />

<Route path="/rank" element={<RankCard result={result} user={user} subject={subject}/>} />

<Route path="/certificate" element={<Certificate result={result} user={user} subject={subject}/>} />

<Route path="/history" element={<History user={user}/>} />

</Routes>

</div>

</div>

</Router>

)

}

export default App
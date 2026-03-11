function Students(){

const students=
JSON.parse(localStorage.getItem("students")) || []

function remove(index){

const updatedStudents = [...students]

updatedStudents.splice(index,1)

localStorage.setItem("students",JSON.stringify(updatedStudents))

window.location.reload()

}

return(

<div className="card">

<h2>Registered Students</h2>

<table className="students-table">

<thead>

<tr>

<th>Name</th>

<th>Date</th>

<th>Email</th>

<th>Time</th>

<th>Action</th>

</tr>

</thead>

<tbody>

{students.map((s,i)=>(
<tr key={i}>

<td>{s.name}</td>

<td>{s.date}</td>

<td>{s.email}</td>

<td>{s.time}</td>

<td><button onClick={()=>remove(i)}>Remove</button></td>

</tr>
))}

</tbody>

</table>

</div>

)

}

export default Students
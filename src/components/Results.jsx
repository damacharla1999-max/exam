import { useEffect } from 'react';
import { saveExamResult } from '../utils/localStorage';

function Results({result, user, subject}){

useEffect(() => {
  if (result && user && subject) {
    saveExamResult(user.id || user.name, subject, result);
  }
}, [result, user, subject]);

if(!result) return <h2>No Result Yet</h2>

const correct = result.filter(r=>r.correct===r.selected).length
const total = result.length
const percentage = total > 0 ? Math.round((correct / total) * 100) : 0

const getSubjectName = (subject) => {
  switch(subject) {
    case 'react': return 'React'
    case 'java': return 'Java'
    case 'python': return 'Python'
    default: return subject
  }
}

return(

<div className="card">

<h2>Exam Results</h2>

<table className="results-table">
  <tbody>
    <tr>
      <td className="label">Name:</td>
      <td className="value">{user?.name || 'Unknown'}</td>
    </tr>
    <tr>
      <td className="label">Exam Type:</td>
      <td className="value">{getSubjectName(subject)}</td>
    </tr>
    <tr>
      <td className="label">Total Questions:</td>
      <td className="value">{total}</td>
    </tr>
    <tr>
      <td className="label">Correct Answers:</td>
      <td className="value">{correct}</td>
    </tr>
    <tr>
      <td className="label">Percentage:</td>
      <td className="value">{percentage}%</td>
    </tr>
  </tbody>
</table>

</div>

)

}

export default Results
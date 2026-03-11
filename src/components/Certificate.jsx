import { useEffect } from 'react';
import { saveCertificate } from '../utils/localStorage';

function Certificate({result, user, subject}){

useEffect(() => {
  if (result && user && subject) {
    const correct = result.filter(r => r.correct === r.selected).length;
    const percentage = (correct / result.length) * 100;
    
    const certificateData = {
      studentName: user?.name || 'Student Name',
      subject: subject,
      score: percentage,
      correctAnswers: correct,
      totalQuestions: result.length,
      completionDate: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      instructor: 'Vamsikrishna Chekuri',
      coordinator: 'Anooshbabu'
    };
    
    saveCertificate(user.id || user.name, subject, certificateData);
  }
}, [result, user, subject]);

if(!result) return <h2>No Certificate</h2>

const correct=result.filter(
r=>r.correct===r.selected
).length

const percent=(correct/result.length)*100

if(percent<60)
return <h2>Certificate Not Eligible</h2>

const getSubjectName = (subject) => {
  switch(subject) {
    case 'react': return 'React Development'
    case 'java': return 'Java Programming'
    case 'python': return 'Python Programming'
    default: return subject
  }
}

const currentDate = new Date().toLocaleDateString('en-US', { 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})

return(

<div className="certificate-container">
  <div className="certificate">
    {/* Header */}
    <div className="certificate-header">
      <div className="certificate-left">
        <div className="medal-ribbon">
          <div className="medal">🏆</div>
          <div className="ribbon"></div>
        </div>
        <div className="logo">
          <div className="logo-text"></div>
          <div className="logo-sub"></div>
        </div>
      </div>
      <div className="certificate-right">
        <div className="qr-code">
          <div className="qr-placeholder">
            <div className="qr-pattern"></div>
          </div>
          <div className="scan-text">Scan Here</div>
        </div>
      </div>
    </div>

    {/* Certificate Title */}
    <div className="certificate-title">
      <div className="certificate-org">Talent Exam</div>
      <h1>CERTIFICATE OF COMPLETION</h1>
    </div>

    {/* Recipient Information */}
    <div className="certificate-body">
      <div className="intro-text">
        This certificate is proudly presented to
      </div>
      <div className="recipient-name">
        {user?.name || 'Student Name'}
      </div>
      <div className="course-info">
        for successfully completing the <span className="course-name">{getSubjectName(subject)}</span> on {currentDate}
      </div>
      <div className="score-info">
        with a score of <span className="score-percentage">{percent.toFixed(1)}%</span>
      </div>
    </div>

    {/* Decorative Elements */}
    <div className="certificate-decoration">
      <div className="corner-decoration top-left"></div>
      <div className="corner-decoration top-right"></div>
      <div className="corner-decoration bottom-left"></div>
      <div className="corner-decoration bottom-right"></div>
    </div>

    {/* Signatures */}
    <div className="certificate-footer">
      <div className="signature-section">
        <div className="signature">
          <div className="signature-visual vamsi-signature"></div>
          <div className="signature-name">Vamsikrishna Chekuri</div>
          <div className="signature-title">Instructor</div>
        </div>
        <div className="signature">
          <div className="signature-visual anoosh-signature"></div>
          <div className="signature-name">Anooshbabu</div>
          <div className="signature-title">Training Coordinator</div>
        </div>
      </div>
    </div>
  </div>
</div>

)

}

export default Certificate
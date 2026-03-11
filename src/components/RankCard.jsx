import { useEffect } from 'react';
import { saveRankCard } from '../utils/localStorage';

function RankCard({result, user, subject}){

if(!result) return <h2>No Rank Yet</h2>

const correct=result.filter(
r=>r.correct===r.selected
).length

const percent=(correct/result.length)*100

let rank="Fail"
let rankColor="#dc3545"
let rankBg="#f8d7da"
let rankIcon="📝"

if(percent>=90) {
  rank="S"
  rankColor="#ffc107"
  rankBg="#fff3cd"
  rankIcon="🏆"
}
else if(percent>=80) {
  rank="A"
  rankColor="#28a745"
  rankBg="#d4edda"
  rankIcon="⭐"
}
else if(percent>=70) {
  rank="B"
  rankColor="#17a2b8"
  rankBg="#d1ecf1"
  rankIcon="👍"
}
else if(percent>=60) {
  rank="C"
  rankColor="#fd7e14"
  rankBg="#ffe8d6"
  rankIcon="✅"
}

// Save rank card data to local storage
useEffect(() => {
  if (user && subject) {
    const rankData = {
      correct,
      total: result.length,
      percentage: percent,
      grade: rank,
      gradeColor: rankColor,
      gradeBackground: rankBg,
      icon: rankIcon
    };
    saveRankCard(user.id || user.name, subject, rankData);
  }
}, [result, user, subject, correct, percent, rank, rankColor, rankBg, rankIcon]);

return(

<div className="rank-card">
  <div className="rank-header">
    <h2 className="rank-title">Rank Card</h2>
    <div className="rank-icon-large">{rankIcon}</div>
  </div>

  <div className="rank-content">
    <div className="score-section">
      <div className="score-circle">
        <div className="score-percentage">{percent.toFixed(1)}%</div>
        <div className="score-label">Score</div>
      </div>
    </div>

    <div className="rank-section">
      <div className="rank-display" style={{ backgroundColor: rankBg, color: rankColor }}>
        <span className="rank-grade">{rank}</span>
        <span className="rank-text">Grade</span>
      </div>
    </div>

    <div className="stats-section">
      <div className="stat-item">
        <div className="stat-value">{result.length}</div>
        <div className="stat-label">Total</div>
      </div>
      <div className="stat-item">
        <div className="stat-value correct">{correct}</div>
        <div className="stat-label">Correct</div>
      </div>
      <div className="stat-item">
        <div className="stat-value wrong">{result.length - correct}</div>
        <div className="stat-label">Wrong</div>
      </div>
    </div>
  </div>

  <div className="rank-footer">
    <div className="performance-message">
      {percent >= 90 && "🎉 Outstanding Performance!"}
      {percent >= 80 && percent < 90 && "👏 Excellent Work!"}
      {percent >= 70 && percent < 80 && "👍 Good Job!"}
      {percent >= 60 && percent < 70 && "✅ Passed!"}
      {percent < 60 && "📚 Keep Practicing!"}
    </div>
  </div>
</div>

)

}

export default RankCard
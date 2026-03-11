import { useState, useEffect } from 'react';
import { getExamResults, getRankCards, getCertificates, STORAGE_KEYS } from '../utils/localStorage';

function History({ user }) {
  const [examResults, setExamResults] = useState({});
  const [rankCards, setRankCards] = useState({});
  const [certificates, setCertificates] = useState({});
  const [activeTab, setActiveTab] = useState('results');
  const [viewingCertificate, setViewingCertificate] = useState(null);

  useEffect(() => {
    if (user) {
      const userId = user.id || user.name;
      setExamResults(getExamResults(userId) || {});
      setRankCards(getRankCards(userId) || {});
      setCertificates(getCertificates(userId) || {});
    }
  }, [user]);

  const handleViewCertificate = (subject, certificateData) => {
    setViewingCertificate({ subject, ...certificateData });
  };

  const handleCloseCertificate = () => {
    setViewingCertificate(null);
  };

  if (!user) {
    return (
      <div className="card">
        <h2>Please Login to View History</h2>
        <p>You need to be logged in to view your exam history.</p>
      </div>
    );
  }

  const getSubjectName = (subject) => {
    switch(subject) {
      case 'react': return 'React Development';
      case 'java': return 'Java Programming';
      case 'python': return 'Python Programming';
      default: return subject;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="history-container">
      <h2>Exam History</h2>

      <div className="history-tabs">
        <button
          className={`tab-button ${activeTab === 'results' ? 'active' : ''}`}
          onClick={() => setActiveTab('results')}
        >
          Exam Results ({Object.keys(examResults).length})
        </button>
        <button
          className={`tab-button ${activeTab === 'rankcards' ? 'active' : ''}`}
          onClick={() => setActiveTab('rankcards')}
        >
          Rank Cards ({Object.keys(rankCards).length})
        </button>
        <button
          className={`tab-button ${activeTab === 'certificates' ? 'active' : ''}`}
          onClick={() => setActiveTab('certificates')}
        >
          Certificates ({Object.keys(certificates).length})
        </button>
      </div>

      <div className="history-content">
        {activeTab === 'results' && (
          <div className="history-section">
            <h3>Exam Results History</h3>
            {Object.keys(examResults).length === 0 ? (
              <p>No exam results saved yet.</p>
            ) : (
              Object.entries(examResults).map(([subject, data]) => {
                const result = data.result; // Access the result array
                const correct = result.filter(r => r.correct === r.selected).length;
                const total = result.length;
                const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

                return (
                  <div key={subject} className="history-item">
                    <div className="history-header">
                      <h4>{getSubjectName(subject)}</h4>
                      <span className="history-date">
                        {data.timestamp ? formatDate(data.timestamp) : 'Date not available'}
                      </span>
                    </div>
                    <div className="history-stats">
                      <div className="stat">
                        <span className="stat-label">Total Questions:</span>
                        <span className="stat-value">{total}</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">Correct:</span>
                        <span className="stat-value correct">{correct}</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">Percentage:</span>
                        <span className="stat-value">{percentage}%</span>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        )}

        {activeTab === 'rankcards' && (
          <div className="history-section">
            <h3>Rank Cards History</h3>
            {Object.keys(rankCards).length === 0 ? (
              <p>No rank cards saved yet.</p>
            ) : (
              Object.entries(rankCards).map(([subject, rankData]) => (
                <div key={subject} className="history-item rank-card-item">
                  <div className="history-header">
                    <h4>{getSubjectName(subject)}</h4>
                    <span className="rank-badge" style={{
                      backgroundColor: rankData.gradeBackground,
                      color: rankData.gradeColor
                    }}>
                      {rankData.icon} {rankData.grade}
                    </span>
                  </div>
                  <div className="history-stats">
                    <div className="stat">
                      <span className="stat-label">Score:</span>
                      <span className="stat-value">{rankData.percentage.toFixed(1)}%</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Correct:</span>
                      <span className="stat-value correct">{rankData.correct}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Total:</span>
                      <span className="stat-value">{rankData.total}</span>
                    </div>
                  </div>
                  <div className="rank-date">
                    {rankData.timestamp ? formatDate(rankData.timestamp) : 'Date not available'}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === 'certificates' && (
          <div className="history-section">
            <h3>Certificates History</h3>
            {Object.keys(certificates).length === 0 ? (
              <p>No certificates earned yet.</p>
            ) : (
              <div className="certificates-table-container">
                <table className="certificates-table">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Exam Type</th>
                      <th>Percentage</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(certificates).map(([subject, certData]) => (
                      <tr key={subject}>
                        <td className="student-name">{certData.studentName}</td>
                        <td className="exam-type">{getSubjectName(subject)}</td>
                        <td className="percentage">{certData.score.toFixed(1)}%</td>
                        <td className="action-cell">
                          <button
                            className="view-certificate-btn"
                            onClick={() => handleViewCertificate(subject, certData)}
                          >
                            Click to View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Certificate View Modal */}
      {viewingCertificate && (
        <div className="certificate-modal-overlay" onClick={handleCloseCertificate}>
          <div className="certificate-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="certificate-modal-header">
              <h3>Certificate - {getSubjectName(viewingCertificate.subject)}</h3>
              <button className="close-modal-btn" onClick={handleCloseCertificate}>×</button>
            </div>
            <div className="certificate-modal-body">
              <div className="certificate-preview">
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
                          <div className="logo-text">Talent</div>
                          <div className="logo-sub">Exam</div>
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
                        {viewingCertificate.studentName}
                      </div>
                      <div className="course-info">
                        for successfully completing the <span className="course-name">{getSubjectName(viewingCertificate.subject)}</span> on {viewingCertificate.completionDate}
                      </div>
                      <div className="score-info">
                        with a score of <span className="score-percentage">{viewingCertificate.score.toFixed(1)}%</span>
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
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default History;

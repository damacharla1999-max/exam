function Home(){

return(

<div className="home-container">

    {/* Welcome Section */}
    <div className="welcome-section">
        <div className="welcome-content">
            <div className="welcome-text">
                <h1 className="main-title">Welcome to</h1>
                <h2 className="brand-title"> Exam Portal</h2>
                <p className="welcome-description">
                    Your gateway to professional certification and skill development.
                    Take exams, track progress, and earn recognized certificates.
                </p>
            </div>
            <div className="welcome-actions">
                <button className="btn-primary">Get Started</button>
                <button className="btn-secondary">Learn More</button>
            </div>
        </div>
    </div>

    {/* Quick Stats */}
    <div className="stats-section">
        <div className="stats-container">
            <div className="stat-card">
                <div className="stat-icon">📚</div>
                <div className="stat-number">3</div>
                <div className="stat-label">Subjects</div>
            </div>
            <div className="stat-card">
                <div className="stat-icon">👥</div>
                <div className="stat-number">500+</div>
                <div className="stat-label">Students</div>
            </div>
            <div className="stat-card">
                <div className="stat-icon">🎯</div>
                <div className="stat-number">98%</div>
                <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-card">
                <div className="stat-icon">🏆</div>
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support</div>
            </div>
        </div>
    </div>

    {/* Features Overview */}
    <div className="features-overview">
        <div className="features-container">
            <h3 className="features-title">What You Can Do</h3>
            <div className="features-list">
                <div className="feature-item">
                    <div className="feature-step">1</div>
                    <div className="feature-content">
                        <h4>Register & Login</h4>
                        <p>Create your account and access personalized exam experiences</p>
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-step">2</div>
                    <div className="feature-content">
                        <h4>Choose Your Subject</h4>
                        <p>Select from React, Java, or Python and take customized exams</p>
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-step">3</div>
                    <div className="feature-content">
                        <h4>Take Exams</h4>
                        <p>Answer multiple choice questions with real-time progress tracking</p>
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-step">4</div>
                    <div className="feature-content">
                        <h4>Get Results</h4>
                        <p>View detailed results, performance analytics, and improvement suggestions</p>
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-step">5</div>
                    <div className="feature-content">
                        <h4>Earn Certificates</h4>
                        <p>Receive professional certificates for successful exam completion</p>
                    </div>
                </div>
                <div className="feature-item">
                    <div className="feature-step">6</div>
                    <div className="feature-content">
                        <h4>Track Progress</h4>
                        <p>Monitor your learning journey and skill development over time</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Call to Action */}
    <div className="cta-section">
        <div className="cta-container">
            <h3>Ready to Start Your Journey?</h3>
            <p>Join thousands of learners who have advanced their careers with Talent Exam</p>
            <div className="cta-buttons">
                <button className="btn-primary-large">Start Your Exam</button>
                <button className="btn-outline">View Sample</button>
            </div>
        </div>
    </div>

</div>

)

}

export default Home
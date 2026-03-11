import { useState } from "react"

function LoginExam({setUser,setPage}){

const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [isLoading, setIsLoading] = useState(false)
const [loginError, setLoginError] = useState("")

function login(){
    if (!email.trim() || !password.trim()) {
        setLoginError("Please enter both email and password")
        return
    }

    setIsLoading(true)
    setLoginError("")

    // Simulate loading time for better UX
    setTimeout(() => {
        const students = JSON.parse(localStorage.getItem("students")) || []

        const user = students.find(
            s => s.email === email && s.password === password
        )

        if(user){
            setUser(user)
            setPage("subjectselect")
        } else {
            setLoginError("Invalid email or password. Please try again.")
            setIsLoading(false)
        }
    }, 1000)
}

return(

<div className="login-container">

    {/* Background Elements */}
    <div className="bg-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
    </div>

    {/* Main Login Form */}
    <div className="login-wrapper">

        {/* Header Section */}
        <div className="login-header">
            <div className="logo-section">
                <div className="logo-icon">🔐</div>
                <div className="logo-text">
                    <h1>Talent Exam</h1>
                    <p>Welcome Back</p>
                </div>
            </div>
            <div className="welcome-message">
                <h2>Sign In to Your Account</h2>
                <p>Continue your learning journey</p>
            </div>
        </div>

        {/* Login Form */}
        <div className="login-form">

            <form onSubmit={(e) => { e.preventDefault(); login(); }}>

                {/* Email Field */}
                <div className="form-group">
                    <label htmlFor="login-email" className="form-label">
                        <span className="label-icon">📧</span>
                        Email Address
                    </label>
                    <div className="input-wrapper">
                        <input
                            id="login-email"
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={e => { setEmail(e.target.value); setLoginError(""); }}
                            className="form-input"
                            required
                            disabled={isLoading}
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div className="form-group">
                    <label htmlFor="login-password" className="form-label">
                        <span className="label-icon">🔒</span>
                        Password
                    </label>
                    <div className="input-wrapper">
                        <input
                            id="login-password"
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={e => { setPassword(e.target.value); setLoginError(""); }}
                            className="form-input"
                            required
                            disabled={isLoading}
                        />
                    </div>
                </div>

                {/* Error Message */}
                {loginError && (
                    <div className="error-message">
                        <span className="error-icon">⚠️</span>
                        {loginError}
                    </div>
                )}

                {/* Submit Button */}
                <button
                    type="submit"
                    className={`login-btn ${isLoading ? 'loading' : ''}`}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <span className="spinner"></span>
                            Signing In...
                        </>
                    ) : (
                        <>
                            <span className="btn-icon">🚀</span>
                            Start Exam
                        </>
                    )}
                </button>

            </form>

            {/* Additional Info */}
            <div className="form-footer">
                <p className="register-link">
                    Don't have an account?
                    <a href="#" onClick={(e) => { e.preventDefault(); setPage('registration'); }}>
                        Register Here
                    </a>
                </p>
                <div className="features-preview">
                    <div className="feature-item">
                        <span className="feature-icon">📚</span>
                        <span>Take Exams</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">📊</span>
                        <span>View Results</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">🏆</span>
                        <span>Earn Certificates</span>
                    </div>
                </div>
            </div>

        </div>

    </div>

</div>

)

}

export default LoginExam
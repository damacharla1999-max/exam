import { useState } from "react"

function Registration(){

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [password,setPassword]=useState("")
const [confirmPassword,setConfirmPassword]=useState("")
const [isLoading, setIsLoading] = useState(false)

function register(){
    if (!name.trim() || !email.trim() || !password.trim()) {
        alert("Please fill in all required fields")
        return
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match")
        return
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long")
        return
    }

    setIsLoading(true)

    const students = JSON.parse(localStorage.getItem("students")) || []

    // Check if email already exists
    const existingStudent = students.find(student => student.email === email)
    if (existingStudent) {
        alert("Email already registered. Please use a different email.")
        setIsLoading(false)
        return
    }

    const date = new Date().toLocaleDateString()
    const time = new Date().toLocaleTimeString()

    students.push({name,email,password,date,time})

    localStorage.setItem("students",JSON.stringify(students))

    alert("🎉 Registration Successful! Welcome to Talent Exam!")

    setName("")
    setEmail("")
    setPassword("")
    setConfirmPassword("")
    setIsLoading(false)
}

return(

<div className="registration-container">

    {/* Background Elements */}
    <div className="bg-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
    </div>

    {/* Main Registration Form */}
    <div className="registration-wrapper">

        {/* Header Section */}
        <div className="registration-header">
            <div className="logo-section">
                <div className="logo-icon">🎓</div>
                <div className="logo-text">
                    <h1>Talent Exam</h1>
                    <p>Join Our Learning Community</p>
                </div>
            </div>
            <div className="welcome-message">
                <h2>Create Your Account</h2>
                <p>Start your journey towards professional certification</p>
            </div>
        </div>

        {/* Registration Form */}
        <div className="registration-form">

            <form onSubmit={(e) => { e.preventDefault(); register(); }}>

                {/* Name Field */}
                <div className="form-group">
                    <label htmlFor="name" className="form-label">
                        <span className="label-icon">👤</span>
                        Full Name
                    </label>
                    <div className="input-wrapper">
                        <input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={name}
                            onChange={e=>setName(e.target.value)}
                            className="form-input"
                            required
                        />
                    </div>
                </div>

                {/* Email Field */}
                <div className="form-group">
                    <label htmlFor="email" className="form-label">
                        <span className="label-icon">📧</span>
                        Email Address
                    </label>
                    <div className="input-wrapper">
                        <input
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                            className="form-input"
                            required
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div className="form-group">
                    <label htmlFor="password" className="form-label">
                        <span className="label-icon">🔒</span>
                        Password
                    </label>
                    <div className="input-wrapper">
                        <input
                            id="password"
                            type="password"
                            placeholder="Create a strong password"
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                            className="form-input"
                            required
                            minLength="6"
                        />
                    </div>
                </div>

                {/* Confirm Password Field */}
                <div className="form-group">
                    <label htmlFor="confirmPassword" className="form-label">
                        <span className="label-icon">🔐</span>
                        Confirm Password
                    </label>
                    <div className="input-wrapper">
                        <input
                            id="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                            value={confirmPassword}
                            onChange={e=>setConfirmPassword(e.target.value)}
                            className="form-input"
                            required
                        />
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className={`register-btn ${isLoading ? 'loading' : ''}`}
                    disabled={isLoading}
                >
                    {isLoading ? (
                        <>
                            <span className="spinner"></span>
                            Creating Account...
                        </>
                    ) : (
                        <>
                            <span className="btn-icon">🚀</span>
                            Register Now
                        </>
                    )}
                </button>

            </form>

            {/* Additional Info */}
            <div className="form-footer">
                <p className="login-link">
                    Already have an account?
                    <a href="#" onClick={(e) => { e.preventDefault(); /* Navigate to login */ }}>
                        Sign In Here
                    </a>
                </p>
                <div className="features-preview">
                    <div className="feature-item">
                        <span className="feature-icon">📚</span>
                        <span>Multiple Subjects</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">🏆</span>
                        <span>Certificates</span>
                    </div>
                    <div className="feature-item">
                        <span className="feature-icon">📊</span>
                        <span>Progress Tracking</span>
                    </div>
                </div>
            </div>

        </div>

    </div>

</div>

)

}

export default Registration
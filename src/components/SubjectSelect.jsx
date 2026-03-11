import { useState } from "react"
import { saveToLocalStorage, getFromLocalStorage, STORAGE_KEYS } from '../utils/localStorage'

function SubjectSelect({setSubject,setPage}){

const [selected,setSelected]=useState("react")
const [csvFile, setCsvFile] = useState(null)
const [isUploading, setIsUploading] = useState(false)
const [uploadMessage, setUploadMessage] = useState("")
const [showBulkUpload, setShowBulkUpload] = useState(false)

function startExam(){
    setSubject(selected)
    setPage("exam")
}

function handleFileChange(e) {
    const file = e.target.files[0]
    if (file) {
        // Check if it's a CSV file
        const validExtensions = ['.csv']
        const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf('.'))
        
        if (!validExtensions.includes(fileExtension)) {
            setUploadMessage("Please select a valid CSV file (.csv)")
            setCsvFile(null)
            return
        }
        
        setCsvFile(file)
        setUploadMessage("")
    }
}

function processCsvFile() {
    if (!csvFile) {
        setUploadMessage("Please select a CSV file first")
        return
    }

    setIsUploading(true)
    setUploadMessage("Processing CSV file...")

    const reader = new FileReader()
    reader.onload = (e) => {
        try {
            const csvText = e.target.result
            const questions = processCsvData(csvText)
            
            if (questions.length === 0) {
                setUploadMessage("No valid questions found in the CSV file. Please check the format.")
                setIsUploading(false)
                return
            }
            
            // Save bulk questions to localStorage
            saveBulkQuestions(selected, questions)
            
            setUploadMessage(`Successfully uploaded ${questions.length} questions for ${selected}!`)
            setIsUploading(false)
            setCsvFile(null)
            
            // Reset file input
            const fileInput = document.getElementById('csv-file-input')
            if (fileInput) fileInput.value = ''
            
        } catch (error) {
            console.error('Error processing CSV file:', error)
            setUploadMessage("Error processing CSV file. Please check the format and try again.")
            setIsUploading(false)
        }
    }
    
    reader.readAsText(csvFile)
}

function processCsvData(csvText) {
    const lines = csvText.split('\n').map(line => line.trim()).filter(line => line)
    const questions = []
    
    // Skip header row (assuming first row is headers)
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i]
        
        // Parse CSV line (handle quoted values)
        const values = parseCsvLine(line)
        
        // Expected format: Question, Option1, Option2, Option3, Option4, CorrectAnswer
        if (values.length >= 6) {
            const question = values[0]?.trim()
            const option1 = values[1]?.trim()
            const option2 = values[2]?.trim()
            const option3 = values[3]?.trim()
            const option4 = values[4]?.trim()
            const correctAnswer = values[5]?.trim()
            
            if (question && option1 && option2 && option3 && option4 && correctAnswer) {
                questions.push({
                    question: question,
                    options: [option1, option2, option3, option4],
                    answer: correctAnswer
                })
            }
        }
    }
    
    return questions
}

function parseCsvLine(line) {
    const values = []
    let current = ''
    let inQuotes = false
    
    for (let i = 0; i < line.length; i++) {
        const char = line[i]
        
        if (char === '"') {
            inQuotes = !inQuotes
        } else if (char === ',' && !inQuotes) {
            values.push(current)
            current = ''
        } else {
            current += char
        }
    }
    
    values.push(current)
    return values
}

function saveBulkQuestions(subject, questions) {
    const existingBulkQuestions = getFromLocalStorage(STORAGE_KEYS.BULK_QUESTIONS) || {}
    const subjectQuestions = existingBulkQuestions[subject] || []
    
    // Merge with existing questions
    const mergedQuestions = [...subjectQuestions, ...questions]
    
    existingBulkQuestions[subject] = mergedQuestions
    saveToLocalStorage(STORAGE_KEYS.BULK_QUESTIONS, existingBulkQuestions)
}

return(

<div className="card">

<h2>Select Programming Subject</h2>

<select onChange={e=>setSelected(e.target.value)} value={selected}>

<option value="react">React js</option>

<option value="java">Java</option>

<option value="python">Python</option>

</select>

<br/>
<br/>

<button className="primary" onClick={startExam}>Start Exam</button>

<br/>
<br/>

<button 
    className="secondary" 
    onClick={() => setShowBulkUpload(!showBulkUpload)}
    style={{ marginBottom: '15px' }}
>
    {showBulkUpload ? 'Hide' : 'Show'} Bulk Questions Upload
</button>

{showBulkUpload && (
    <div className="bulk-upload-section" style={{ 
        border: '1px solid #4ae810', 
        padding: '15px', 
        borderRadius: '8px', 
        backgroundColor: '#0ec3e7',
        marginTop: '10px'
    }}>
        <h3 style={{ marginTop: '0', color: '#2c3e50' }}>Upload Bulk Questions</h3>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '15px' }}>
            Upload a CSV file (.csv) with questions.<br/>
            Format: Question,Option1,Option2,Option3,Option4,CorrectAnswer<br/>
            <small style={{ color: '#888' }}>Note: Use quotes around values containing commas</small>
        </p>
        
        <input
            id="csv-file-input"
            type="file"
            accept=".csv"
            onChange={handleFileChange}
            style={{ 
                marginBottom: '10px',
                padding: '8px',
                border: '1px solid #4ae810',
                borderRadius: '4px',
                width: '100%',
                boxSizing: 'border-box'
            }}
        />
        
        <button 
            className="primary" 
            onClick={processCsvFile}
            disabled={isUploading || !csvFile}
            style={{ 
                opacity: (isUploading || !csvFile) ? 0.6 : 1,
                cursor: (isUploading || !csvFile) ? 'not-allowed' : 'pointer'
            }}
        >
            {isUploading ? 'Uploading...' : 'Upload Questions'}
        </button>
        
        {uploadMessage && (
            <div style={{ 
                marginTop: '10px', 
                padding: '10px', 
                borderRadius: '4px',
                backgroundColor: uploadMessage.includes('Error') || uploadMessage.includes('Please') ? '#f8d7da' : '#d4edda',
                color: uploadMessage.includes('Error') || uploadMessage.includes('Please') ? '#721c24' : '#155724',
                border: `1px solid ${uploadMessage.includes('Error') || uploadMessage.includes('Please') ? '#f5c6cb' : '#c3e6cb'}`
            }}>
                {uploadMessage}
            </div>
        )}
    </div>
)}

</div>

)

}

export default SubjectSelect

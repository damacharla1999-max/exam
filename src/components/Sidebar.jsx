import { useState } from 'react';
import { FiHome, FiUser, FiUsers, FiLogIn, FiFileText, FiAward, FiBook, FiBarChart2, FiCalendar, FiGithub, FiChevronLeft, FiChevronRight, FiSun, FiMoon } from 'react-icons/fi';

function Sidebar({ setPage }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const dashboardItems = [
    { icon: FiHome, label: 'Home', page: 'home' },
    { icon: FiUser, label: 'Registration', page: 'registration' },
    { icon: FiUsers, label: 'Registered Students', page: 'students' },
    { icon: FiLogIn, label: 'Login Exam', page: 'loginexam' },
    { icon: FiFileText, label: 'Exam', page: 'exam' },
    { icon: FiBarChart2, label: 'Results', page: 'results' },
    { icon: FiAward, label: 'Rank Card', page: 'rank' },
    { icon: FiBook, label: 'Certifications', page: 'certificate' },
    { icon: FiCalendar, label: 'History', page: 'history' }
  ];

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''} ${isDarkTheme ? 'dark-theme' : ''}`}>
      <div className="sidebar-header">
        <div className="logo">
          <FiFileText className="logo-icon" />
          {!isCollapsed && <span className="logo-text"> Exam Portal</span>}
        </div>
        <div className="header-actions">
          <button 
            className="theme-toggle-btn"
            onClick={() => setIsDarkTheme(!isDarkTheme)}
          >
            {isDarkTheme ? <FiSun /> : <FiMoon />}
          </button>
          <button 
            className="toggle-btn"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
          </button>
        </div>
      </div>

      <div className="sidebar-content">
        {dashboardItems.map((item, index) => (
          <button
            key={index}
            className="menu-item"
            onClick={() => setPage(item.page)}
          >
            <item.icon className="menu-icon" />
            {!isCollapsed && <span className="menu-label">{item.label}</span>}
          </button>
        ))}
      </div>

      <div className="sidebar-footer">
        {!isCollapsed && (
          <div className="footer-content">
            <div className="version-info">
              <div className="version-title">Exam Portal</div>
              <div className="version-text">V 3.2.0-alpha.9</div>
            </div>
           
          </div>
        )}
       
      </div>
    </div>
  );
}

export default Sidebar;
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Players from './pages/Players';
import Groups from './pages/Groups';
import Sessions from './pages/Sessions';
import Assessments from './pages/Assessments';
import DrillsLibrary from './pages/DrillsLibrary';
import Finance from './pages/Finance';
import Announcements from './pages/Announcements';
import Events from './pages/Events';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : true;
  });

  const toggleDarkMode = (newMode: boolean) => {
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode));
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'students':
        return <Players />;
      case 'groups':
        return <Groups />;
      case 'sessions':
        return <Sessions />;
      case 'assessments':
        return <Assessments />;
      case 'drills':
        return <DrillsLibrary />;
      case 'finance':
        return <Finance />;
      case 'announcements':
        return <Announcements />;
      case 'events':
        return <Events />;
      case 'reports':
        return <Reports />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header isDarkMode={isDarkMode} setIsDarkMode={toggleDarkMode} />
          <main className="flex-1 overflow-y-auto">
            {renderPage()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
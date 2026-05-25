'use client';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import { translations } from '@/utils/translations';
import './globals.css';

export default function RootLayout({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const [language, setLanguage] = useState('en');
  const t = translations[language];
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
  };
  const handleLogin = (role) => {
    setUserRole(role);
    setIsAuthenticated(true);
  };
  if (!isAuthenticated) {
    return (
      <html lang={language}>
        <body className="bg-[#F9F6EE]">
          <LoginPage onLogin={handleLogin} language={language} setLanguage={setLanguage} />
        </body>
      </html>
    );
  }
  return (
    <html lang={language}>
      <body className="bg-[#F9F6EE]">
        <div className="flex">
          <Sidebar userRole={userRole} language={language} setLanguage={setLanguage} onLogout={handleLogout} />
          <main className="ml-64 w-full min-h-screen p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}

function LoginPage({ onLogin, language, setLanguage }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const t = translations[language];
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F9F6EE] to-[#E8E0D2] flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Language Switcher */}
        <div className="flex justify-end mb-8 gap-2">
          {['en', 'uz', 'ru'].map((lang) => (
            <button
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-4 py-2 rounded font-semibold transition-colors ${language === lang ? 'bg-[#0E3B22] text-white' : 'bg-white text-[#0E3B22] border border-[#0E3B22]'}`}
            >
              {lang.toUpperCase()}
            </button>
          ))}
        </div>
        {/* Login Card */}
        <div className="bg-white rounded-lg shadow-2xl p-8 border-t-4 border-[#0E3B22]">
          <h1 className="text-4xl font-bold text-[#0E3B22] mb-2 text-center">Jadid Academy</h1>
          <p className="text-center text-[#D4AF37] font-semibold text-sm mb-8">{t.enlightenment}</p>
          <form
            onSubmit={(e) => {e.preventDefault();}}
            className="space-y-4 mb-6"
          >
            <div>
              <label className="block text-sm font-semibold text-[#0E3B22] mb-2">{t.username}</label>
              <input type="text" value={username} onChange={e => setUsername(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="demo" />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#0E3B22] mb-2">{t.password}</label>
              <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#D4AF37]" placeholder="demo" />
            </div>
            <button type="submit" className="w-full bg-[#0E3B22] hover:bg-[#0a2817] text-white font-bold py-2 rounded-md transition-colors">{t.sign_in}</button>
          </form>
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">{t.or}</span>
            </div>
          </div>
          <div className="space-y-3">
            <button onClick={() => onLogin('admin')} className="w-full bg-[#D4AF37] hover:bg-yellow-500 text-[#0E3B22] font-bold py-2 rounded-md transition-colors">{t.loginAsAdmin}</button>
            <button onClick={() => onLogin('teacher')} className="w-full bg-green-700 hover:bg-green-800 text-white font-bold py-2 rounded-md transition-colors">{t.loginAsTeacher}</button>
            <button onClick={() => onLogin('student')} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md transition-colors">{t.loginAsStudent}</button>
            <button onClick={() => onLogin('parent')} className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-md transition-colors">{t.loginAsParent}</button>
          </div>
          <p className="text-center text-xs text-gray-500 mt-6">{t.changePassword}</p>
        </div>
      </div>
    </div>
  );
}

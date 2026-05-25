'use client';

import { useState } from 'react';
import Link from 'next/link';
import { translations } from '@/utils/translations';

export default function Sidebar({ userRole = 'student', onLogout }) {
  const [language, setLanguage] = useState('en');
  const t = translations[language];

  const navigationLinks = {
    admin: [
      { name: t.financials, href: '/admin#financials' },
      { name: t.userManagement, href: '/admin#users' },
      { name: t.systemIntegrations, href: '/admin#integrations' },
    ],
    teacher: [
      { name: t.attendance, href: '/teacher#attendance' },
      { name: t.lessonManagement, href: '/teacher#lessons' },
    ],
    student: [
      { name: t.classroomHub, href: '/student' },
    ],
    parent: [
      { name: t.childProfile, href: '/parent#profile' },
      { name: t.financialStatus, href: '/parent#finances' },
    ],
  };

  const links = navigationLinks[userRole] || [];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-[#0E3B22] text-white flex flex-col shadow-lg">
      {/* Header */}
      <div className="p-6 border-b border-green-900">
        <h1 className="text-2xl font-bold text-[#D4AF37]">Jadid Academy</h1>
        <p className="text-xs text-green-200 mt-2">{t.enlightenment}</p>
      </div>

      {/* Role Badge */}
      <div className="px-6 py-4 bg-green-900 bg-opacity-50">
        <p className="text-xs text-green-200 uppercase tracking-wide">{t.language}</p>
        <p className="text-lg font-semibold capitalize">{userRole}</p>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="block px-4 py-3 rounded-md text-sm font-medium text-green-100 hover:bg-green-700 hover:text-[#D4AF37] transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Language Switcher & Logout */}
      <div className="border-t border-green-900 p-4 space-y-4">
        {/* Language Selector */}
        <div>
          <label className="text-xs font-semibold text-green-200 uppercase block mb-2">
            {t.language}
          </label>
          <div className="flex gap-2">
            {['en', 'uz', 'ru'].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`flex-1 py-2 px-2 rounded text-xs font-bold transition-colors ${
                  language === lang
                    ? 'bg-[#D4AF37] text-[#0E3B22]'
                    : 'bg-green-700 text-white hover:bg-green-600'
                }`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="w-full py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-md transition-colors duration-200"
        >
          {t.logout}
        </button>
      </div>
    </aside>
  );
}

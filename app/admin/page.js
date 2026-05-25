"use client";
import { useState } from "react";
import { translations } from "@/utils/translations";

export default function AdminDashboard({ language = "en" }) {
  const t = translations[language];
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="space-y-10">
      {/* Financials */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#0E3B22] mb-4">{t.financials}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg bg-white shadow p-6 border-t-4 border-[#0E3B22]">
            <p className="text-sm uppercase text-gray-500 font-semibold mb-3">{t.totalIncome}</p>
            <p className="text-3xl font-extrabold text-[#0E3B22]">15 450 000 <span className="text-[#D4AF37] text-lg font-bold">UZS</span></p>
          </div>
          <div className="rounded-lg bg-white shadow p-6 border-t-4 border-[#0E3B22]">
            <p className="text-sm uppercase text-gray-500 font-semibold mb-3">{t.totalOutcome}</p>
            <p className="text-3xl font-extrabold text-[#0E3B22]">4 200 000 <span className="text-[#D4AF37] text-lg font-bold">UZS</span></p>
          </div>
          <div className="rounded-lg bg-white shadow p-6 border-t-4 border-[#0E3B22]">
            <p className="text-sm uppercase text-gray-500 font-semibold mb-3">{t.pendingFees}</p>
            <p className="text-3xl font-extrabold text-[#0E3B22]">2 100 000 <span className="text-[#D4AF37] text-lg font-bold">UZS</span></p>
          </div>
        </div>
      </section>
      {/* User Management */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#0E3B22] mb-4">{t.userManagement}</h2>
        <form className="bg-white rounded-lg shadow-lg p-6 flex gap-4 flex-col md:flex-row">
          <div className="flex flex-col flex-1">
            <label className="text-sm text-[#0E3B22] font-semibold mb-2">{t.selectRole}</label>
            <select className="border px-3 py-2 rounded" value={role} onChange={e => setRole(e.target.value)}>
              <option value="">-</option>
              <option value="admin">{t.admin}</option>
              <option value="teacher">{t.teacher}</option>
              <option value="student">{t.student}</option>
              <option value="parent">{t.parent}</option>
            </select>
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-sm text-[#0E3B22] font-semibold mb-2">{t.fullName}</label>
            <input type="text" className="border px-3 py-2 rounded" value={name} onChange={e=>setName(e.target.value)} placeholder="Full Name" />
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-sm text-[#0E3B22] font-semibold mb-2">{t.setPassword}</label>
            <input type="text" className="border px-3 py-2 rounded" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Initial Password" />
          </div>
          <div className="flex items-end">
            <button type="button" className="bg-[#D4AF37] px-6 py-2 rounded text-[#0E3B22] font-bold hover:bg-[#c6a04c]">{t.addUser}</button>
          </div>
        </form>
      </section>
      {/* System Integrations */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#0E3B22] mb-4">{t.telegramBotMarketing}</h2>
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col gap-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-[#D4AF37] mr-2"></span>
            <span className="font-semibold text-gray-700">{t.status}: <span className="text-[#D4AF37]">{t.pending}</span></span>
          </div>
          <button className="bg-blue-600 text-white p-2 rounded w-max hover:bg-blue-700">{t.sendAbsentNotifications}</button>
          <button className="bg-green-700 text-white p-2 rounded w-max hover:bg-green-800">{t.sendMarketingAds}</button>
          <button className="bg-[#0E3B22] text-white p-2 rounded w-max hover:bg-green-900">{t.configure}</button>
        </div>
      </section>
    </div>
  );
}

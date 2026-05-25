"use client";
import { useState } from "react";
import { translations } from "@/utils/translations";

export default function TeacherDashboard({ language = "en" }) {
  const t = translations[language];
  const [classList, setClassList] = useState([
    { name: "Ali Valiyev", present: true },
    { name: "Maryam Karimova", present: false },
    { name: "Nozim Rahimov", present: true },
  ]);
  const [lesson, setLesson] = useState({ title: '', description: '', file: null });
  const [homework, setHomework] = useState({ title: '', description: '', file: null });

  return (
    <div className="space-y-10">
      {/* Attendance Module */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#0E3B22] mb-4">{t.attendance}</h2>
        <form className="bg-white rounded-lg shadow p-6 mb-4">
          <table className="w-full text-left">
            <thead>
              <tr>
                <th className="pb-2">Student</th>
                <th className="pb-2">{t.present}</th>
                <th className="pb-2">{t.absent}</th>
              </tr>
            </thead>
            <tbody>
              {classList.map((student, idx) => (
                <tr key={idx} className="border-t">
                  <td className="py-2 pr-4 font-medium">{student.name}</td>
                  <td className="py-2">
                    <input type="checkbox" checked={student.present} onChange={() => {
                      setClassList(list => list.map((s,i) => i===idx ? { ...s, present: !s.present } : s));
                    }} />
                  </td>
                  <td className="py-2">
                    <input type="checkbox" checked={!student.present} readOnly />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </form>
      </section>
      {/* Lesson Management */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#0E3B22] mb-4">{t.lessonManagement}</h2>
        <form className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="mb-4">
            <label className="block font-semibold mb-2">{t.lessonTitle}</label>
            <input type="text" className="border px-3 py-2 rounded w-full" value={lesson.title} onChange={e=>setLesson(l=>({...l,title:e.target.value}))} />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">{t.lessonDescription}</label>
            <textarea className="border px-3 py-2 rounded w-full" value={lesson.description} onChange={e=>setLesson(l=>({...l,description:e.target.value}))} />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">{t.uploadFile}</label>
            <input type="file" accept="application/pdf" className="block" onChange={e=>setLesson(l=>({...l,file:e.target.files?.[0]||null}))} />
          </div>
          <button type="button" className="bg-[#D4AF37] rounded px-4 py-2 text-[#0E3B22] font-bold hover:bg-[#c9b25d]">{t.uploadLesson}</button>
        </form>
        {/* Homework Upload Form */}
        <form className="bg-white rounded-lg shadow p-6">
          <div className="mb-4">
            <label className="block font-semibold mb-2">{t.homeworkTitle}</label>
            <input type="text" className="border px-3 py-2 rounded w-full" value={homework.title} onChange={e=>setHomework(h=>({...h,title:e.target.value}))} />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">{t.homeworkDescription}</label>
            <textarea className="border px-3 py-2 rounded w-full" value={homework.description} onChange={e=>setHomework(h=>({...h,description:e.target.value}))} />
          </div>
          <div className="mb-4">
            <label className="block font-semibold mb-2">{t.uploadFile}</label>
            <input type="file" accept="application/pdf" className="block" onChange={e=>setHomework(h=>({...h,file:e.target.files?.[0]||null}))} />
          </div>
          <button type="button" className="bg-[#0E3B22] rounded px-4 py-2 text-white font-bold hover:bg-green-900">{t.assignHomework}</button>
        </form>
      </section>
    </div>
  );
}

"use client";
import { translations } from "@/utils/translations";

const mockLessons = [
  { title: 'Algebra Lesson 1', description: 'Introduction to Algebra', fileUrl: '#', homework: 'Practice problems 1-5 (PDF)' },
  { title: 'Biology Lesson 1', description: 'Cell Structure', fileUrl: '#', homework: 'Read chapter and answer PDF questions.' },
];

export default function StudentDashboard({ language = "en" }) {
  const t = translations[language];
  return (
    <div className="space-y-10">
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#0E3B22] mb-6">{t.classroomHub}</h2>
        {mockLessons.length === 0 ? (
          <div className="bg-white p-8 rounded-lg shadow text-gray-600">{t.noLessons}</div>
        ) : (
          <div className="space-y-6">
            {mockLessons.map((lesson, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow p-6 border-l-4 border-[#D4AF37]">
                <h3 className="text-xl font-bold text-[#0E3B22]">{lesson.title}</h3>
                <p className="text-gray-700 mb-2">{lesson.description}</p>
                <div className="flex gap-4 items-center mt-2">
                  <span className="text-sm text-[#0E3B22] font-semibold">{t.assignedHomework}:</span>
                  <span>{lesson.homework}</span>
                  <a href={lesson.fileUrl} className="ml-auto bg-[#D4AF37] text-[#0E3B22] px-4 py-2 rounded font-bold hover:bg-[#edcf7a]" download>{t.downloadPDF}</a>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

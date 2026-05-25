"use client";
import { translations } from "@/utils/translations";

const absences = [
  { date: '2026-05-23' },
  { date: '2026-05-24' },
];

export default function ParentDashboard({ language = "en" }) {
  const t = translations[language];
  return (
    <div className="space-y-10">
      {/* Child Attendance */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#0E3B22] mb-4">{t.childAttendance}</h2>
        <div className="bg-white p-6 rounded-lg shadow flex flex-col mb-6">
          <h3 className="font-semibold mb-2 text-[#0E3B22]">{t.recentAbsences}</h3>
          {absences.length ? (
            <ul className="list-disc ml-8">
              {absences.map((a, i) => (
                <li key={i}>{a.date}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-sm">{t.noAbsences}</p>
          )}
        </div>
      </section>
      {/* Financial Status */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-[#0E3B22] mb-4">{t.financialStatus}</h2>
        <div className="bg-white p-6 rounded-lg shadow flex flex-col gap-3">
          <span className="text-lg text-[#D4AF37] font-bold">{t.duePayments}: 1 000 000 UZS</span>
          <span className="text-green-700 font-semibold">{t.tuitionStatus}: {t.due}</span>
        </div>
      </section>
    </div>
  );
}

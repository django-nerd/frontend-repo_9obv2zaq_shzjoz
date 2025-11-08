import { Rocket, GraduationCap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/20 via-transparent to-transparent pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-sm text-indigo-300">
          <GraduationCap size={16} />
          Открытый университет будущего
        </div>
        <h1 className="mt-6 font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl text-slate-900 dark:text-slate-50">
          Свободный университет для тех, кто меняет мир
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          Бесплатное обучение от лучших разработчиков и экспертных практиков. Отбор по потенциалу, а не по кошельку. Наставники, реальные проекты и сильное сообщество.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#selection"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition"
          >
            <Rocket size={18} /> Подать заявку
          </a>
          <a
            href="#features"
            className="inline-flex items-center gap-2 rounded-lg bg-white/70 dark:bg-white/10 px-5 py-3 font-medium text-slate-900 dark:text-white ring-1 ring-slate-900/10 dark:ring-white/10 hover:bg-white/90 dark:hover:bg-white/5 transition"
          >
            Как это работает
          </a>
        </div>
      </div>
    </section>
  );
}

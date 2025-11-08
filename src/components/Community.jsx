import { Users2, MessageSquare, Sparkles } from "lucide-react";

export default function Community() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Мощное сообщество
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">
              У нас учатся и преподают инженеры, дизайнеры, учёные и менеджеры.
              Команды формируются под реальные задачи: от стартапов до open-source.
            </p>
            <ul className="mt-6 space-y-3 text-slate-700 dark:text-slate-200">
              <li className="flex items-center gap-2"><Sparkles size={18} className="text-indigo-500"/> Наставники — практики с реальными кейсами</li>
              <li className="flex items-center gap-2"><Users2 size={18} className="text-indigo-500"/> Воркшопы, митапы и сообщества по интересам</li>
              <li className="flex items-center gap-2"><MessageSquare size={18} className="text-indigo-500"/> Поддержка карьерного роста и портфолио</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-400/20 to-cyan-400/20 p-1">
            <div className="rounded-2xl bg-white dark:bg-slate-950 p-8 ring-1 ring-slate-900/5 dark:ring-white/10">
              <div className="grid grid-cols-3 gap-4">
                {["Разработчики","Дизайнеры","Данные","Продукт","DevOps","Исследователи","Предприниматели","Аналитики","Менторы"].map((tag) => (
                  <div key={tag} className="rounded-lg bg-slate-100 dark:bg-slate-900 px-3 py-2 text-sm text-slate-800 dark:text-slate-200 text-center">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

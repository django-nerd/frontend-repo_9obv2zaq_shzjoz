import { Users, Shield, Layers, BookOpen } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Практическое обучение",
    desc: "Курсы от ведущих специалистов, реальные проекты, разбор кейсов и код-ревью.",
  },
  {
    icon: Users,
    title: "Сильное сообщество",
    desc: "Команды, митапы, совместные проекты и карьерная поддержка.",
  },
  {
    icon: Layers,
    title: "Междисциплинарность",
    desc: "IT, дизайн, продукт, наука — учимся на стыке направлений.",
  },
  {
    icon: Shield,
    title: "Честный отбор",
    desc: "Поступление бесплатно: главное — мотивация, потенциал и готовность учиться.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-slate-50 dark:bg-slate-900 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center">
          Принципы и формат
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 text-center max-w-2xl mx-auto">
          Мы собираем лучших наставников и мотивированных студентов, чтобы расти вместе.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl bg-white dark:bg-slate-800 p-6 ring-1 ring-slate-900/5 dark:ring-white/10 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600/10 text-indigo-600 mb-4">
                <Icon size={20} />
              </div>
              <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

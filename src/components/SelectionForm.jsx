import { useState } from "react";
import { Send } from "lucide-react";

export default function SelectionForm() {
  const [form, setForm] = useState({ name: "", email: "", track: "development", motivation: "" });
  const [submitted, setSubmitted] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // На данном этапе просто имитируем отправку. В реальном продукте отправим на бэкенд.
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="selection" className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
            Заявка отправлена!
          </h3>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            Мы свяжемся с вами по e-mail после первичного отбора. Держим кулаки!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section id="selection" className="py-16 bg-white dark:bg-slate-950">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white text-center">
          Бесплатный отбор
        </h2>
        <p className="mt-3 text-slate-600 dark:text-slate-300 text-center max-w-2xl mx-auto">
          Отправьте краткую заявку: мы смотрим на мотивацию, азарт и готовность вкалывать.
        </p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-6 bg-slate-50 dark:bg-slate-900 p-6 rounded-xl ring-1 ring-slate-900/5 dark:ring-white/10">
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Имя и фамилия</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                required
                className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Направление</label>
            <select
              name="track"
              value={form.track}
              onChange={onChange}
              className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="development">Разработка</option>
              <option value="design">Дизайн</option>
              <option value="product">Продукт</option>
              <option value="data">Data/ML</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">Почему именно вы?</label>
            <textarea
              name="motivation"
              rows={5}
              value={form.motivation}
              onChange={onChange}
              placeholder="Коротко опишите мотивацию, опыт и цели"
              className="mt-1 w-full rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-3 py-2 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-500 transition"
          >
            <Send size={18} /> Отправить заявку
          </button>
        </form>
      </div>
    </section>
  );
}

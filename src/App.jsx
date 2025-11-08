import Hero from './components/Hero';
import Features from './components/Features';
import SelectionForm from './components/SelectionForm';
import Community from './components/Community';

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <header className="sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur border-b border-slate-900/10 dark:border-white/10">
        <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-indigo-600" />
            <span className="font-semibold text-slate-900 dark:text-white">Открытый Университет</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-300">
            <a href="#features" className="hover:text-indigo-600">Формат</a>
            <a href="#selection" className="hover:text-indigo-600">Отбор</a>
            <a href="#community" className="hover:text-indigo-600">Сообщество</a>
          </nav>
          <a href="#selection" className="rounded-lg bg-indigo-600 px-4 py-2 text-white text-sm font-medium hover:bg-indigo-500">Подать заявку</a>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <SelectionForm />
        <section id="community">
          <Community />
        </section>
      </main>

      <footer className="border-t border-slate-900/10 dark:border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-300">
          <p>© {new Date().getFullYear()} Открытый Университет. Бесплатно. Открыто. Для всех.</p>
          <div className="flex items-center gap-4">
            <a href="#features" className="hover:text-indigo-600">О программе</a>
            <a href="#selection" className="hover:text-indigo-600">Поступить</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

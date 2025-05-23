export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-full">
      <header className="w-full bg-white border-b border-2 p-2 border-slate-400">
        <h1 className="text-3xl font-bold animate-pulse">Montink</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}

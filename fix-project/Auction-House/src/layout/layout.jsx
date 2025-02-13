export function Layout({ children }) {
  return (
    <>
      <header className="flex gap-4 bg-neutral-400">
        <a href="/" className="hover:cursor-pointer hover:text-amber-300">
          Home
        </a>
      </header>
      <main className="grow">{children}</main>
      <footer>© 2025 FED Oslo</footer>
    </>
  );
}

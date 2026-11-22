import { HeadContent, Link, Outlet, createRootRoute } from "@tanstack/react-router"

export const Route = createRootRoute({
  head: () => ({ meta: [{ title: "Kissena Baked Goods" }] }),
  component: RootLayout,
})

function RootLayout() {
  return (
    <>
      <HeadContent />
      <div className="min-h-screen flex flex-col">
        <header className="border-b border-edge bg-surface">
          <div className="max-w-4xl mx-auto px-6 py-5 flex flex-wrap items-center justify-between gap-4">
            <Link to="/" className="font-display text-xl">
              Kissena Baked Goods
            </Link>
            <nav className="flex flex-wrap gap-6">
              <Link
                to="/"
                className="text-ink-soft hover:text-ink"
                activeProps={{ className: "font-semibold underline decoration-brand underline-offset-8" }}
                activeOptions={{ exact: true }}
              >
                Home
              </Link>
              <Link
                to="/income-statement"
                className="text-ink-soft hover:text-ink"
                activeProps={{ className: "font-semibold underline decoration-brand underline-offset-8" }}
                activeOptions={{ exact: true }}
              >
                Income Statement
              </Link>
              <Link
                to="/balance-sheet"
                className="text-ink-soft hover:text-ink"
                activeProps={{ className: "font-semibold underline decoration-brand underline-offset-8" }}
                activeOptions={{ exact: true }}
              >
                Balance Sheet
              </Link>
            <Link to="/disclosures" className="text-ink-soft hover:text-ink" activeProps={{ className: "font-semibold underline decoration-brand underline-offset-8" }} activeOptions={{ exact: true }}>Disclosures</Link>
            </nav>
          </div>
        </header>
        <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-10">
          <Outlet />
        </main>
        <footer className="border-t border-edge bg-surface">
          <div className="max-w-4xl mx-auto px-6 py-6 text-sm text-ink-soft space-y-1">
            <p>Kissena Baked Goods Inc., Astoria, Queens, New York</p>
            <p>©️ 20X5 Kissena Baked Goods Inc.</p>
            <p>A fictional company used for accounting examples.</p>
          </div>
        </footer>
      </div>
    </>
  )
}

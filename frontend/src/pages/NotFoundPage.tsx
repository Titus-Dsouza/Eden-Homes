import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-16">
      <h1 className="text-3xl font-semibold text-slate-950">Page not found</h1>
      <Link className="mt-4 text-slate-700 underline" to="/">
        Return to Eden Homes
      </Link>
    </main>
  )
}

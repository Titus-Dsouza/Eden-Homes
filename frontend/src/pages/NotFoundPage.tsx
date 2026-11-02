import { Link } from 'react-router-dom'
import { PageContainer } from '../components/PageContainer'

export function NotFoundPage() {
  return (
    <PageContainer className="flex min-h-screen flex-col justify-center">
      <h1 className="text-3xl font-semibold text-slate-950">Page not found</h1>
      <Link className="mt-4 text-slate-700 underline" to="/">
        Return to Eden Homes
      </Link>
    </PageContainer>
  )
}

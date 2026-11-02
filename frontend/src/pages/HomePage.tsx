import { PageContainer } from '../components/PageContainer'

export function HomePage() {
  return (
    <PageContainer className="flex min-h-screen flex-col justify-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
        Eden Homes
      </p>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
        Project foundation
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
        The website for Eden Homes in Honnavar is being prepared. Customer
        features and business details will be added after they are confirmed.
      </p>
      <p className="mt-8 border-l-2 border-slate-300 pl-4 text-sm leading-6 text-slate-600">
        Accommodation and boating requests will be enquiries only; arrangements
        require confirmation from the owner.
      </p>
    </PageContainer>
  )
}

import type { ReactNode } from 'react'

type PageContainerProps = {
  children: ReactNode
  className?: string
}

export function PageContainer({ children, className = '' }: PageContainerProps) {
  const classes = [
    'mx-auto w-full max-w-3xl px-6 py-16',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return <main className={classes}>{children}</main>
}

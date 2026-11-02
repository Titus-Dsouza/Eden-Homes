import type { ReactNode } from 'react'

type PageContainerProps = {
  children: ReactNode
  className?: string
  id?: string
  size?: 'narrow' | 'wide' | 'full'
}

const sizes = {
  narrow: 'max-w-3xl',
  wide: 'max-w-7xl',
  full: 'max-w-none',
}

export function PageContainer({
  children,
  className = '',
  id,
  size = 'narrow',
}: PageContainerProps) {
  const classes = [
    'mx-auto w-full px-6 py-16',
    sizes[size],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <main className={classes} id={id}>
      {children}
    </main>
  )
}

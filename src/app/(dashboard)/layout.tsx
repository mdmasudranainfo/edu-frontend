import { ThemeProvider } from '@/provider/theme-provider'
import { i_children } from '@/types/ReactTypes'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Education || Dashboard',
  description: 'Education || Dashboard',
}

export default function RootLayout({ children }: i_children) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <main className="ms-main">{children}</main>
    </ThemeProvider>
  )
}

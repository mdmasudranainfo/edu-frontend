import Footer from '@/components/website/footer/Footer'
import Navbar from '@/components/website/navbar/Navbar'
import { i_children } from '@/types/ReactTypes'

export default function RootLayout({ children }: i_children) {
  return (
    <main className="">
      <div className="ms-main-frontend">
        <Navbar />
        {children}
        <Footer />
      </div>
    </main>
  )
}

import AboutUs from '@/components/website/aboutUs/AboutUs'
import Banner from '@/components/website/banner/Banner'
import Category from '@/components/website/category/Category'
import Finding from '@/components/website/Finding/Finding'
import Instructors from '@/components/website/Instructors/Instructors'
import LatestBlog from '@/components/website/LatestBlog/LatestBlog'

import Platform from '@/components/website/Platform/Platform'
import TopCourse from '@/components/website/topCourse/TopCourse'
import TrustedCompany from '@/components/website/TrustedCompany/TrustedCompany'
import WhyChooseUs from '@/components/website/whyChoose/WhyChooseUs'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Education',
  description: 'Education',
}
export default function Home() {
  return (
    <div>
      <header className="bg-center bg-no-repeat bg-cover bg-[url('/image/HeroBG.png')]">
        <Banner />
      </header>
      <main>
        <AboutUs />
        <TrustedCompany />
        <Category />
        <TopCourse />
        <Platform />
        <WhyChooseUs />
        <Instructors />
        <Finding />
        <LatestBlog />
      </main>
    </div>
  )
}

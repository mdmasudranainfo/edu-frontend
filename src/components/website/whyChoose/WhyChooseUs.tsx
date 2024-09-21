'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles

import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const WhyChooseUs = () => {
  return (
    <div className="footer1">
      <div className="container mx-auto mt-[120px] py-[120px]">
        <h1 className="font-bold text-sm uppercase text-primary">WHY CHOOSE US</h1>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="">
            <h2 className="font-bold text-[48px] leading-none mt-4">
              Creating A Community Of <br />
              Life Long Learners
            </h2>
            <p className="my-6 text-sm">
              Donec bibendum, dui id ultrices molestie, neque neque porta felis,
              <br />
              id viverra ligula justo interdum mi. Nunc malesuada, risus consec
              <br />
              maximus consequat, purus enim ultricies nisi,
            </p>
          </div>
          <div className="grid grid-cols-2">
            <div className="">
              <h2 className="text-[48px] font-semibold">52k+</h2>
              <p className="font-bold text-sm text-primary uppercase">Enrolled Students</p>
            </div>
            <div className="">
              <h2 className="text-[48px] font-semibold">348+</h2>
              <p className="font-bold text-sm text-primary uppercase">Academic Programs</p>
            </div>
            <div className="">
              <h2 className="text-[48px] font-semibold">125+</h2>
              <p className="font-bold text-sm text-primary uppercase">Winning Award</p>
            </div>
            <div className="">
              <h2 className="text-[48px] font-semibold">37k+</h2>
              <p className="font-bold text-sm text-primary uppercase">Certified Students</p>
            </div>
          </div>
        </div>

        <div className="mt-[150px]">
          <div className="max-w-full flex justify-end">
            <div className="w-[870px] relative max-w-full">
              <div className="absolute left-[-300px] top-[-200px]">
                <img src="/image/ri_double-quotes-l.png" alt="" />
              </div>

              <div className="Review">
                <Swiper
                  loop={true}
                  autoplay={{
                    delay: 500,
                    disableOnInteraction: false,
                  }}
                  slidesPerView={1}
                  spaceBetween={10}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[Pagination]}
                  className="CategorySlider  ">
                  <SwiperSlide>
                    <div className="">
                      <p className="md:text-[40px] text-3xl">
                        You might he raised on a .rm. sommimes <br />
                        languages are difficult and difficult to the right <br />
                        the adjective to go with noun.
                      </p>
                      <div className="flex gap-4 items-center mt-[120px]">
                        <img src="/image/Ellipse footer.png" alt="" />
                        <div className="">
                          <h2 className="font-bold">Felipe M.</h2>
                          <p className="font-light">UI/UX Designer</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="">
                      <p className="md:text-[40px] text-3xl">
                        You might he raised on a .rm. sommimes <br />
                        languages are difficult and difficult to the right <br />
                        the adjective to go with noun.
                      </p>
                      <div className="flex gap-4 items-center mt-[120px]">
                        <img src="/image/Ellipse footer.png" alt="" />
                        <div className="">
                          <h2 className="font-bold">Felipe M.</h2>
                          <p className="font-light">UI/UX Designer</p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs

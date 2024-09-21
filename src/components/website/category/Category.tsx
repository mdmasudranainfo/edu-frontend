'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'

const Category = () => {
  return (
    <div className="my-12 ">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1224: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="CategorySlider  ">
        <SwiperSlide>
          <div className="flex justify-center bg-[#F5F0EE] sliderBox rounded-xl m-0">
            <div className="py-10 px-6     max-w-full  ">
              <Image width={70} height={70} layout="" src="/image/Category/Icon.png" alt="" />
              <h2 className="text-xl font-bold mt-[50px]">Graphics Design</h2>
              <p className="">
                Donec bibendum, dui id <br />
                ultrices molestie, neque.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center bg-[#F5F0EE] sliderBox rounded-xl">
            <div className="py-10 px-6     max-w-full  ">
              <Image width={70} height={70} layout="" src="/image/Category/Icon-1.png" alt="" />
              <h2 className="text-xl font-bold mt-[50px]">Web Development</h2>
              <p className="">
                Donec bibendum, dui id <br />
                ultrices molestie, neque.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center bg-[#F5F0EE] sliderBox rounded-xl">
            <div className="py-10 px-6     max-w-full  ">
              <Image width={70} height={70} layout="" src="/image/Category/Icon-2.png" alt="" />
              <h2 className="text-xl font-bold mt-[50px]">Digital Painting</h2>
              <p className="">
                Donec bibendum, dui id <br />
                ultrices molestie, neque.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center bg-[#F5F0EE] sliderBox rounded-xl">
            <div className="py-10 px-6     max-w-full  ">
              <Image width={70} height={70} layout="" src="/image/Category/Icon-3.png" alt="" />
              <h2 className="text-xl font-bold mt-[50px]">Data Science</h2>
              <p className="">
                Donec bibendum, dui id <br />
                ultrices molestie, neque.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center bg-[#F5F0EE] sliderBox rounded-xl">
            <div className="py-10 px-6     max-w-full  ">
              <Image width={70} height={70} layout="" src="/image/Category/Icon.png" alt="" />
              <h2 className="text-xl font-bold mt-[50px]">Graphics Design</h2>
              <p className="">
                Donec bibendum, dui id <br />
                ultrices molestie, neque.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center bg-[#F5F0EE] sliderBox rounded-xl">
            <div className="py-10 px-6     max-w-full  ">
              <Image width={70} height={70} layout="" src="/image/Category/Icon-1.png" alt="" />
              <h2 className="text-xl font-bold mt-[50px]">Web Development</h2>
              <p className="">
                Donec bibendum, dui id <br />
                ultrices molestie, neque.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center bg-[#F5F0EE] sliderBox rounded-xl">
            <div className="py-10 px-6     max-w-full  ">
              <Image width={70} height={70} layout="" src="/image/Category/Icon-2.png" alt="" />
              <h2 className="text-xl font-bold mt-[50px]">Digital Painting</h2>
              <p className="">
                Donec bibendum, dui id <br />
                ultrices molestie, neque.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center bg-[#F5F0EE] sliderBox rounded-xl">
            <div className="py-10 px-6     max-w-full  ">
              <Image width={70} height={70} layout="" src="/image/Category/Icon-2.png" alt="" />
              <h2 className="text-xl font-bold mt-[50px]">Data Science</h2>
              <p className="">
                Donec bibendum, dui id <br />
                ultrices molestie, neque.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Category

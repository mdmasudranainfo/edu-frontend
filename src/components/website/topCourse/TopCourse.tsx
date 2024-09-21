import Image from 'next/image'
import React from 'react'

const TopCourse = () => {
  return (
    <div className="courses">
      <div className="container mx-auto mt-[120px] py-[120px]">
        <div className="flex md:flex-row flex-col gap-8 justify-between items-center">
          <div className="">
            <h1 className="font-bold text-sm uppercase text-primary">Popular Courses</h1>
            <div className="flex lg:flex-row flex-col items-center gap-7">
              <h2 className="text-[48px] font-bold">Our top courses</h2>
              <div className="flex gap-4">
                <button
                  id="btn1"
                  type="button"
                  className="cursor-pointer font-bold hover:text-[#FF6158] ease-in duration-150 text-primary relative">
                  ALL
                  <span className="absolute top-[-15px] right-[-7px] text-sm">8</span>
                </button>
                <button
                  id="btn2"
                  type="button"
                  className="cursor-pointer font-bold hover:text-[#FF6158] ease-in duration-150">
                  Trending
                </button>
                <button id="btn3" className="cursor-pointer font-bold hover:text-[#FF6158] ease-in duration-150">
                  Featured
                </button>
                <button id="btn4" className="cursor-pointer font-bold hover:text-[#FF6158] ease-in duration-150">
                  Popular
                </button>
              </div>
            </div>
          </div>

          <button className="bg-black text-white w-[116px] py-3 rounded inline-block">View all</button>
        </div>

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8 my-12 mixupCont">
          <div className="relative CourseBox rounded-xl" id="box1">
            <div className="bg-white absolute top-8 left-8 h-8 w-8 flex items-center justify-center rounded-full bookmarkIcone">
              <i className="fa-solid fa-bookmark"></i>
            </div>
            <Image
              width={300}
              height={200}
              layout="responsive"
              className="w-full courseImg"
              src="/image/Course/Img.png"
              alt=""
            />
            <div className="bg-white p-8 courseText rounded-b-3xl hover:rounded-t-3xl">
              <div className="flex justify-between items-center">
                <h1 className="text-primary font-bold text-sm uppercase">English</h1>
                <div className="flex items-center gap-4">
                  <p>
                    <i className="fa-regular fa-user"></i> <span>17</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-folder-open"></i> <span>10</span>
                  </p>
                </div>
              </div>

              <h2 className="text-xl font-bold mt-4">
                Basic fundamentals of interior & <br />
                graphics design
              </h2>
              <p className="cursePragruf hidden mt-8">
                Appropriately myocardinate 24/365 schemas vis-a-vis an expanded array of testing procedures.
              </p>

              <div className="flex justify-between items-center mt-8">
                <div className="flex gap-3">
                  <Image width={100} height={100} className="h-10 w-10" src="/image/Course/user/Avatar-1.png" alt="" />
                  <div className="">
                    <h4 className="font-bold">Esther Howard</h4>
                    <span>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                    </span>
                  </div>
                </div>
                <div className="">
                  <span className="text-xl font-bold">$15</span>
                </div>
              </div>

              <button className="bg-primary button hidden text-white w-full py-3 rounded mt-8">Enroll now</button>
            </div>
          </div>

          <div className="relative CourseBox rounded-xl" id="box2">
            <div className="bg-white absolute top-8 left-8 h-8 w-8 flex items-center justify-center rounded-full bookmarkIcone">
              <i className="fa-solid fa-bookmark"></i>
            </div>
            <Image
              width={300}
              height={200}
              layout="responsive"
              className="w-full courseImg"
              src="/image/Course/Img-1.png"
              alt=""
            />
            <div className="bg-white p-8 courseText rounded-b-3xl hover:rounded-t-3xl">
              <div className="flex justify-between items-center">
                <h1 className="text-primary font-bold text-sm uppercase">English</h1>
                <div className="flex items-center gap-4">
                  <p>
                    <i className="fa-regular fa-user"></i> <span>17</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-folder-open"></i> <span>10</span>
                  </p>
                </div>
              </div>

              <h2 className="text-xl font-bold mt-4">
                Basic fundamentals of interior & <br />
                graphics design
              </h2>
              <p className="cursePragruf hidden mt-8">
                Appropriately myocardinate 24/365 schemas vis-a-vis an expanded array of testing procedures.
              </p>

              <div className="flex justify-between items-center mt-8">
                <div className="flex gap-3">
                  <Image width={100} height={100} className="h-10 w-10" src="/image/Course/user/Avatar-1.png" alt="" />
                  <div className="">
                    <h4 className="font-bold">Esther Howard</h4>
                    <span>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                    </span>
                  </div>
                </div>
                <div className="">
                  <span className="text-xl font-bold">$15</span>
                </div>
              </div>

              <button className="bg-primary button hidden text-white w-full py-3 rounded mt-8">Enroll now</button>
            </div>
          </div>

          <div className="relative CourseBox rounded-xl" id="box3">
            <div className="bg-white absolute top-8 left-8 h-8 w-8 flex items-center justify-center rounded-full bookmarkIcone">
              <i className="fa-solid fa-bookmark"></i>
            </div>
            <Image
              width={300}
              height={200}
              layout="responsive"
              className="w-full courseImg"
              src="/image/Course/Img-2.png"
              alt=""
            />
            <div className="bg-white p-8 courseText rounded-b-3xl hover:rounded-t-3xl">
              <div className="flex justify-between items-center">
                <h1 className="text-primary font-bold text-sm uppercase">English</h1>
                <div className="flex items-center gap-4">
                  <p>
                    <i className="fa-regular fa-user"></i> <span>17</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-folder-open"></i> <span>10</span>
                  </p>
                </div>
              </div>

              <h2 className="text-xl font-bold mt-4">
                Basic fundamentals of interior & <br />
                graphics design
              </h2>
              <p className="cursePragruf hidden mt-8">
                Appropriately myocardinate 24/365 schemas vis-a-vis an expanded array of testing procedures.
              </p>

              <div className="flex justify-between items-center mt-8">
                <div className="flex gap-3">
                  <Image width={100} height={100} className="h-10 w-10" src="/image/Course/user/Avatar-1.png" alt="" />
                  <div className="">
                    <h4 className="font-bold">Esther Howard</h4>
                    <span>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                    </span>
                  </div>
                </div>
                <div className="">
                  <span className="text-xl font-bold">$15</span>
                </div>
              </div>

              <button className="bg-primary button hidden text-white w-full py-3 rounded mt-8">Enroll now</button>
            </div>
          </div>

          <div className="relative CourseBox rounded-xl" id="box4">
            <div className="bg-white absolute top-8 left-8 h-8 w-8 flex items-center justify-center rounded-full bookmarkIcone">
              <i className="fa-solid fa-bookmark"></i>
            </div>
            <Image
              width={300}
              height={200}
              layout="responsive"
              className="w-full courseImg"
              src="/image/Course/Img-3.png"
              alt=""
            />
            <div className="bg-white p-8 courseText rounded-b-3xl hover:rounded-t-3xl">
              <div className="flex justify-between items-center">
                <h1 className="text-primary font-bold text-sm uppercase">English</h1>
                <div className="flex items-center gap-4">
                  <p>
                    <i className="fa-regular fa-user"></i> <span>17</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-folder-open"></i> <span>10</span>
                  </p>
                </div>
              </div>

              <h2 className="text-xl font-bold mt-4">
                Basic fundamentals of interior & <br />
                graphics design
              </h2>
              <p className="cursePragruf hidden mt-8">
                Appropriately myocardinate 24/365 schemas vis-a-vis an expanded array of testing procedures.
              </p>

              <div className="flex justify-between items-center mt-8">
                <div className="flex gap-3">
                  <Image width={100} height={100} className="h-10 w-10" src="/image/Course/user/Avatar-1.png" alt="" />
                  <div className="">
                    <h4 className="font-bold">Esther Howard</h4>
                    <span>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                    </span>
                  </div>
                </div>
                <div className="">
                  <span className="text-xl font-bold">$15</span>
                </div>
              </div>

              <button className="bg-primary button hidden text-white w-full py-3 rounded mt-8">Enroll now</button>
            </div>
          </div>

          <div className="relative CourseBox rounded-xl" id="box5">
            <div className="bg-white absolute top-8 left-8 h-8 w-8 flex items-center justify-center rounded-full bookmarkIcone">
              <i className="fa-solid fa-bookmark"></i>
            </div>
            <Image
              width={300}
              height={200}
              layout="responsive"
              className="w-full courseImg"
              src="/image/Course/Img-4.png"
              alt=""
            />
            <div className="bg-white p-8 courseText rounded-b-3xl hover:rounded-t-3xl">
              <div className="flex justify-between items-center">
                <h1 className="text-primary font-bold text-sm uppercase">English</h1>
                <div className="flex items-center gap-4">
                  <p>
                    <i className="fa-regular fa-user"></i> <span>17</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-folder-open"></i> <span>10</span>
                  </p>
                </div>
              </div>

              <h2 className="text-xl font-bold mt-4">
                Basic fundamentals of interior & <br />
                graphics design
              </h2>
              <p className="cursePragruf hidden mt-8">
                Appropriately myocardinate 24/365 schemas vis-a-vis an expanded array of testing procedures.
              </p>

              <div className="flex justify-between items-center mt-8">
                <div className="flex gap-3">
                  <Image width={100} height={100} className="h-10 w-10" src="/image/Course/user/Avatar-1.png" alt="" />
                  <div className="">
                    <h4 className="font-bold">Esther Howard</h4>
                    <span>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                    </span>
                  </div>
                </div>
                <div className="">
                  <span className="text-xl font-bold">$15</span>
                </div>
              </div>

              <button className="bg-primary button hidden text-white w-full py-3 rounded mt-8">Enroll now</button>
            </div>
          </div>

          <div className="relative CourseBox rounded-xl" id="box6">
            <div className="bg-white absolute top-8 left-8 h-8 w-8 flex items-center justify-center rounded-full bookmarkIcone">
              <i className="fa-solid fa-bookmark"></i>
            </div>
            <Image
              width={300}
              height={200}
              layout="responsive"
              className="w-full courseImg"
              src="/image/Course/Img.png"
              alt=""
            />
            <div className="bg-white p-8 courseText rounded-b-3xl hover:rounded-t-3xl">
              <div className="flex justify-between items-center">
                <h1 className="text-primary font-bold text-sm uppercase">English</h1>
                <div className="flex items-center gap-4">
                  <p>
                    <i className="fa-regular fa-user"></i> <span>17</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-folder-open"></i> <span>10</span>
                  </p>
                </div>
              </div>

              <h2 className="text-xl font-bold mt-4">
                Basic fundamentals of interior & <br />
                graphics design
              </h2>
              <p className="cursePragruf hidden mt-8">
                Appropriately myocardinate 24/365 schemas vis-a-vis an expanded array of testing procedures.
              </p>

              <div className="flex justify-between items-center mt-8">
                <div className="flex gap-3">
                  <Image width={100} height={100} className="h-10 w-10" src="/image/Course/user/Avatar-1.png" alt="" />
                  <div className="">
                    <h4 className="font-bold">Esther Howard</h4>
                    <span>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                      <i className="fa-solid fa-star text-sm text-[#FFB60A]"></i>
                    </span>
                  </div>
                </div>
                <div className="">
                  <span className="text-xl font-bold">$15</span>
                </div>
              </div>

              <button className="bg-primary button hidden text-white w-full py-3 rounded mt-8">Enroll now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopCourse

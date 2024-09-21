import React from 'react'

const page = () => {
  return (
    <>
      <header className="bg-[url('https://i.ibb.co/JC8pY0K/aboutBg.png')] bg-no-repeat bg-cover bg-center">
        <div className="flex flex-col justify-center items-center">
          <div className="my-24 mt-40">
            <h1 className="text-5xl font-bold">Courses</h1>
            <div className="flex gap-6 justify-center mt-2">
              <p>Home</p>
              <p className="flex items-center gap-1 text-primary">
                <i className="fa-solid fa-circle text-[8px]"></i>
                <span>Courses List</span>
              </p>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="container mx-auto">
          <div className="py-[120px]">
            <div className="mb-[48px] flex flex-wrap gap-[30px] justify-between items-end">
              <div className="flex gap-[12px] items-center">
                <div className="p-[15px] rounded-[6px] bg-primary">
                  <img src="https://i.ibb.co/hKN5RLt/category-2.png" alt="" />
                </div>
                <div className="p-[15px] rounded-[6px] bg-[#F5F0EE]">
                  <img src="https://i.ibb.co/GQx4qJq/Vector-1.png" alt="" />
                </div>
                <div className="ml-[16px]">
                  <p className="font-medium">Showing 1-9 of 16 results</p>
                </div>
              </div>
              <div className="flex gap-[10px] items-center justify-end">
                <div className="ml-[16px]">
                  <p className="font-medium">Sort by:</p>
                </div>
                <div className="">
                  <select className="text-[16px] bg-slate-100 px-[20px] py-[12px] rounded-[6px]" name="" id="">
                    <option value="">Most popular</option>
                    <option value="">Most popular</option>
                    <option value="">Most popular</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-8 my-12 mixupCont">
              <div className="relative CourseBox rounded-xl" id="box1">
                <div className="bg-white absolute top-8 left-8 h-8 w-8 flex items-center justify-center rounded-full bookmarkIcone">
                  <i className="fa-solid fa-bookmark"></i>
                </div>
                <img className="w-full courseImg" src="/image/Course/Img.png" alt="" />
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
                      <img className="h-10 w-10" src="/image/Course/user/Avatar-1.png" alt="" />
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
                <img className="w-full courseImg" src="/image/Course/Img-1.png" alt="" />
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
                      <img className="h-10 w-10" src="/image/Course/user/Avatar-1.png" alt="" />
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
                <img className="w-full courseImg" src="/image/Course/Img-2.png" alt="" />
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
                      <img className="h-10 w-10" src="/image/Course/user/Avatar-1.png" alt="" />
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
                <img className="w-full courseImg" src="/image/Course/Img-3.png" alt="" />
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
                      <img className="h-10 w-10" src="/image/Course/user/Avatar-1.png" alt="" />
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
                <img className="w-full courseImg" src="/image/Course/Img-4.png" alt="" />
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
                      <img className="h-10 w-10" src="/image/Course/user/Avatar-1.png" alt="" />
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
                <img className="w-full courseImg" src="/image/Course/Img.png" alt="" />
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
                      <img className="h-10 w-10" src="/image/Course/user/Avatar-1.png" alt="" />
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

            <div className="mt-[48px] flex gap-[8px] justify-center py-[24px] border-b border-t">
              <div className="px-[20px] hover:bg-[#FF6158] cursor-pointer hover:text-white ease-in duration-500 py-[10px] border rounded-full">
                <i className="fa-solid fa-chevron-left"></i>
              </div>
              <div className="px-[20px] hover:bg-[#FF6158] cursor-pointer hover:text-white ease-in duration-500 py-[10px] border rounded-full">
                1
              </div>
              <div className="px-[20px] hover:bg-[#FF6158] cursor-pointer hover:text-white ease-in duration-500 py-[10px] border rounded-full">
                2
              </div>
              <div className="px-[20px] hover:bg-[#FF6158] cursor-pointer hover:text-white ease-in duration-500 py-[10px] border rounded-full">
                3
              </div>
              <div className="px-[20px] hover:bg-[#FF6158] cursor-pointer hover:text-white ease-in duration-500 py-[10px] border rounded-full">
                <i className="fa-solid fa-chevron-right"></i>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default page

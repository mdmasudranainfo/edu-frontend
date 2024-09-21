import React from 'react'

const LatestBlog = () => {
  return (
    <div className="container mx-auto mt-[120px]">
      <h2 className="text-primary font-sm uppercase text-sm font-bold">News & Update</h2>
      <div className="flex md:flex-row flex-col gap-4 justify-between items-center">
        <h1 className="text-[48px] font-bold">Our Latest Blogs</h1>
        <div className="">
          <button className="bg-black text-white font-semibold w-[200px] py-3 rounded inline-block">
            View all post
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-12">
        <div className="">
          <div className="">
            <img className="w-full" src="/image/blog/Img.png" alt="" />
          </div>
          <div className="mt-6">
            <ul className="list-disc flex gap-10 ml-5 mb-2">
              <li>05 Feb, 2022</li>
              <li>5 min</li>
            </ul>
            <h1 className="text-xl font-bold mb-4">
              New Features Enhance Virtual <br />
              Teaching Learning
            </h1>
            <button className="underline text-primary font-bold">Read more</button>
          </div>
          <div className=""></div>
        </div>

        <div className="">
          <div className="">
            <img className="w-full" src="/image/blog/Img-1.png" alt="" />
          </div>
          <div className="mt-6">
            <ul className="list-disc flex gap-10 ml-5 mb-2">
              <li>05 Feb, 2022</li>
              <li>5 min</li>
            </ul>
            <h1 className="text-xl font-bold mb-4">
              New Features Enhance Virtual <br />
              Teaching Learning
            </h1>
            <button className="underline text-primary font-bold">Read more</button>
          </div>
          <div className=""></div>
        </div>

        <div className="">
          <div className="">
            <img className="w-full" src="/image/blog/Img-2.png" alt="" />
          </div>
          <div className="mt-6">
            <ul className="list-disc flex gap-10 ml-5 mb-2">
              <li>05 Feb, 2022</li>
              <li>5 min</li>
            </ul>
            <h1 className="text-xl font-bold mb-4">
              New Features Enhance Virtual <br />
              Teaching Learning
            </h1>
            <button className="underline text-primary font-bold">Read more</button>
          </div>
          <div className=""></div>
        </div>
      </div>
    </div>
  )
}

export default LatestBlog

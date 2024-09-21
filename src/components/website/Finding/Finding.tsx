import React from 'react'

const Finding = () => {
  return (
    <div className="container mx-auto mt-[120px] Finding bg-[url('/image/find.png')] rounded-3xl text-white">
      <div className="lg:px-[155px] px-[50px] py-[82px] flex gap-4 md:flex-row flex-col justify-between items-center">
        <div className="">
          <h1 className="text-sm font-bold text-primary uppercase">Let us help</h1>
          <h2 className="text-4xl font-bold">Finding your right courses</h2>
        </div>
        <div className="flex sm:flex-row flex-col gap-4">
          <button className="bg-white text-black font-semibold w-[200px] py-3 rounded inline-block">
            View all members
          </button>
          <button className="bg-primary text-white w-[200px] py-3 rounded flex items-center justify-center gap-2">
            <i className="fa-solid fa-phone"></i>
            <span> +9655 654 4496</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Finding

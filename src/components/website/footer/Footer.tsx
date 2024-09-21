import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container px-4 mx-auto bg-[url('/image/footer1.1bg.png')] bg-cover bg-no-repeat  bg-center rounded-3xl mt-[120px] py-[120px] text-white">
        <div className="grid lg:grid-cols-5 gap-5 sm:grid-cols-3 lg:justify-items-center w-full">
          <div className=" ">
            <h1 className="text-xl font-bold italic">Educarso.</h1>
            <p className="mt-4 text-white">
              Donec bibendum, dui id ultrices <br />
              molestie, neque neque porta felis,
            </p>
          </div>

          <div className="">
            <h2 className="text-primary text-sm font-bold uppercase mb-4">Services</h2>
            <p className="mb-4 text-white">Email Marketing</p>
            <p className="mb-4 text-white">Campaigns</p>
            <p className="mb-4 text-white">Branding</p>
            <p className="mb-4 text-white">Offline</p>
          </div>

          <div className="">
            <h2 className="text-primary text-sm font-bold uppercase mb-4">About</h2>
            <p className="mb-4 text-white">Our Story</p>
            <p className="mb-4 text-white">Benefits</p>
            <p className="mb-4 text-white">Team</p>
            <p className="mb-4 text-white">Careers</p>
          </div>

          <div className="">
            <h2 className="text-primary text-sm font-bold uppercase mb-4">Help</h2>
            <p className="mb-4 text-white">FAQs</p>
            <p className="mb-4 text-white">Contact Us</p>
          </div>

          <div className="">
            <h2 className="text-2xl font-bold mb-4">Subscribe to our newsletter</h2>

            <div className="flex items-center max-w-full relative">
              <span className="absolute h-full left-2 top-0 flex items-center">
                <i className="fa-regular fa-envelope text-black"></i>
              </span>
              <input
                className="w-full focus:outline-none p-3 rounded pl-8"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>

            <button className="bg-primary text-white rounded w-[144px] py-3 rounded-l-none mt-4">Get started</button>
          </div>
        </div>
      </div>

      <div className="flex container mx-auto py-10 justify-between">
        <p>©2023- Educarso.</p>
        <div className="flex gap-4">
          <i className="fa-brands fa-twitter text-2xl text-[#BAA299]"></i>
          <i className="fa-brands fa-linkedin text-2xl text-[#BAA299]"></i>
          <i className="fa-brands fa-facebook text-2xl text-[#BAA299]"></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer

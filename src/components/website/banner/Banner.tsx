import Image from 'next/image'

const Banner = () => {
  return (
    <div>
      <div className="container mx-auto justify-items-center pt-28">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-14">
          <div className="">
            <h1 className="sm:text-[64px] text-5xl font-extrabold leading-none">
              Committed to <br />
              learn excellence <br />
              <span className="text-primary">in education</span>
            </h1>
            <p className="mb-10 mt-6">
              It is long established that a reader will be distracted by <br />
              thereadable popular and best content.
            </p>
            {/* <!-- input  --> */}
            <div className="flex items-center w-[470px] max-w-full relative">
              {/* <!-- email Icon --> */}
              <span className="absolute h-full left-2 top-0 flex items-center">
                <i className="fa-regular fa-envelope"></i>
              </span>
              <input
                className="w-full focus:outline-none p-3 rounded pl-8"
                type="email"
                placeholder="Enter Your Email"
              />
              <button className="bg-primary text-white rounded w-[144px] py-3 ml-[-20px] rounded-l-none">
                Get started
              </button>
            </div>

            <div className="flex items-center gap-2 mt-28">
              <span>
                <i className="fa-solid fa-star text-[#00B67A] text-3xl"></i>
              </span>
              <span>
                {/* <img className="" src="/image/Vector.png" alt="" /> */}
                <Image src={'/image/Vector.png'} width={200} height={100} alt="" layout="responsive" />
              </span>
              <div className="">
                <i className="fa-solid fa-star text-[#F59E0B] text-xl"></i>
                <i className="fa-solid fa-star text-[#F59E0B] text-xl"></i>
                <i className="fa-solid fa-star text-[#F59E0B] text-xl"></i>
                <i className="fa-solid fa-star text-[#F59E0B] text-xl"></i>
                <i className="fa-solid fa-star text-[#F59E0B] text-xl"></i>
                <span>4900+ 5 Stars</span>
              </div>
            </div>
          </div>

          <div className="flex items-end">
            <Image
              src="/image/headerImg.png" // Path to your image in the public directory
              alt="Description of the image" // Add a descriptive alt text
              width={600} // Specify the width of the image
              height={600} // Specify the height of the image
              layout="responsive" // Makes the image responsive
              className="max-w-full w-[600px]" // Tailwind CSS classes for styling
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner

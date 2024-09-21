const AboutUs = () => {
  return (
    <div className="container mx-auto mt-[120px]">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-24">
        <div className="">
          <img src="/image/about.png" alt="" />
        </div>
        <div className="">
          <h3 className="text-sm font-semibold text-primary uppercase">About us</h3>
          <h1 className="text-[48px] font-bold leading-[48px] my-9">
            The highest result <br />
            of education is <br />
            tolerance
          </h1>
          <p className="border-b pb-8">
            Donec bibendum, dui id ultrices molestie, neque neque porta felis, id viverra ligula justo interdum mi.
          </p>

          <div className="mt-8">
            <div className="flex items-center gap-5">
              <img src="/image/icone/Ic-Simple.png" alt="" />
              <div className="">
                <h2 className="text-xl font-bold">Flexible Classes</h2>
                <p>Created by our talented designer</p>
              </div>
            </div>
            <div className="flex items-center gap-5 mt-8">
              <img src="/image/icone/Ic-Simple-1.png" alt="" />
              <div className="">
                <h2 className="text-xl font-bold">Educator Support</h2>
                <p>We are not tolerant about taste</p>
              </div>
            </div>
          </div>

          <button className="bg-primary text-white w-[144px] py-3 rounded mt-8">Get started</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs

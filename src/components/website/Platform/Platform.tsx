const Platform = () => {
  return (
    <div className="container mx-auto mt-[120px]">
      <div className="grid lg:grid-cols-2 gap-32 justify-items-center">
        <div className="">
          <h1 className="text-sm text-primary uppercase font-bold">Best Online Learning Platform</h1>
          <h2 className="text-[48px] font-bold leading-tight my-4">
            One Platfrom & Many <br />
            Courses For You
          </h2>
          <p className="border-b pb-4">
            Donec bibendum, dui id ultrices molestie, neque neque porta felis,
            <br />
            id viverra ligula justo interdum mi. Monotonectally negotiate
            <br />
            leveraged imperatives vis-a-vis standardized users. <br />
          </p>

          <div className="mt-8">
            <p className="flex items-center gap-4">
              <i className="fa-solid fa-circle-check"></i>
              <span className="font-bold">9/10 Average Satisfaction Rate</span>
            </p>
            <p className="flex items-center gap-4 mt-3">
              <i className="fa-solid fa-circle-check"></i>
              <span className="font-bold">96% Completitation Rate</span>
            </p>
            <p className="flex items-center gap-4 mt-3">
              <i className="fa-solid fa-circle-check"></i>
              <span className="font-bold">Friendly Environment & Expert Teacher</span>
            </p>

            <button className="bg-primary text-white w-[200px] py-3 rounded inline-block mt-12">
              Explore our courses
            </button>
          </div>
        </div>
        <div className="">
          <img src="/image/platfram.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Platform

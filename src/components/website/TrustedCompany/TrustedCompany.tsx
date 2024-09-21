import Image from 'next/image'
import React from 'react'

const TrustedCompany = () => {
  return (
    <div className="container mx-auto mt-[120px]">
      <div className="text-center mb-10">
        <h2 className="text-sm font-bold uppercase text-primary">Trusted By 1k+ Company Arround The World!</h2>
        <div className="flex flex-wrap justify-evenly mt-10">
          <Image width={150} height={100} layout="" src="/image/company/Logo-5.png" alt="" />
          <Image width={150} height={100} layout="" src="/image/company/Logo-1.png" alt="" />
          <Image width={150} height={100} layout="" src="/image/company/Logo-2.png" alt="" />
          <Image width={150} height={100} layout="" src="/image/company/Logo-3.png" alt="" />
          <Image width={150} height={100} layout="" src="/image/company/Logo-4.png" alt="" />
          <Image width={150} height={100} layout="" src="/image/company/Logo-5.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default TrustedCompany

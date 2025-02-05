import Image from 'next/image'
import React from 'react'

const WelcomeBanner = () => {
  return (
    <div className="flex gap-5 items-center bg-white rounded-xl p-5">
      <Image src="/studying.png" alt="boy studying" width={150} height={150} />
      <div>
        <h2 className="font-black text-3xl">Welcome to <span className="text-primary">Tech Wizzards</span> Academy</h2>
        <h2 className="text-gray-500">Explore, Learn and Build all real life projects</h2>
      </div>
    </div>
  )
}

export default WelcomeBanner
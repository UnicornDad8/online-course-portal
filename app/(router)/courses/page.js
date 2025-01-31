import React from 'react'

const Courses = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3">
      {/* Left Container */}
      <div className="col-span-2">
        Banner
      </div>
      {/* Right Container */}
      <div>
        Right Section
      </div>
    </div>
  )
}

export default Courses
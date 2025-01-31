import { BadgeIcon, BookOpen, GraduationCapIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

const SideNav = () => {
  const menu = [
    {
      id: 1,
      name: "All Courses",
      icon: BookOpen
    },
    {
      id: 2,
      name: "Membership",
      icon: BadgeIcon
    },
    {
      id: 3,
      name: "Instructor",
      icon: GraduationCapIcon
    }
  ];

  return (
    <div className="p-5 bg-white shadow-sm border h-screen">
      <div className="flex gap-2 items-center">
        <Image src="/logo.svg" alt="logo" width={40} height={40} />
        <h2 className="text-2xl font-bold">Logo</h2>
      </div>
      <hr className="mt-7" />
      <ul className="mt-5">
        {menu.map((item, index) => (
          <li key={item.id} className="group flex gap-3 mt-1 p-3 text-[16px] text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-75">
           <div className="flex items-center gap-3 group-hover:animate-pulse">
            <item.icon />
            <h2>{item.name}</h2>
           </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideNav
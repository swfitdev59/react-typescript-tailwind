import React, { useState } from 'react'

import LogoSvg from 'assets/logo.svg'
import MenuSvg from 'assets/menu.svg'
import CloseSvg from 'assets/close.svg'
import FacebookSvg from 'assets/facebook.svg'
import InstagramSvg from 'assets/instagram.svg'
import { navbarItems } from 'config'

export const Header: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false)

  const styleBgColor = showMenu ? 'z-10 max-xl:bg-black' : ''
  const styleShowMenu = showMenu ? '' : 'max-xl:hidden'

  return (
    <div className="relative">
      <div
        className={`absolute top-0 right-0 w-full pb-7 min-h-screen ${styleBgColor}`}
      >
        <div
          className="flex justify-between items-center py-5 px-12.5 
      max-xl:flex-col max-xl:h-167 max-xs:py-5 max-xs:px-4"
        >
          <div className="flex justify-between items-center max-xl:w-full">
            <div className="w-27.5 h-20.5 max-xs:w-18 max-xs:h-13.5 hover:cursor-pointer hover:opacity-70">
              <img src={LogoSvg} alt="Logo" />
            </div>
            <div
              className="xl:hidden hover:cursor-pointer hover:opacity-70"
              onClick={() => setShowMenu(!showMenu)}
            >
              <img src={showMenu ? CloseSvg : MenuSvg} alt="Menu Icon" />
            </div>
          </div>

          <div className={`flex gap-7.5 max-xl:flex-col ${styleShowMenu}`}>
            {navbarItems.map((item, index: number) => (
              <div
                className="text-white text-center hover:cursor-pointer hover:opacity-70"
                key={index}
              >
                {item.name}
              </div>
            ))}
          </div>

          <div className={`flex gap-8 ${styleShowMenu}`}>
            <div className="w-6 h-6 hover:cursor-pointer hover:opacity-70">
              <img src={FacebookSvg} alt="Facebook" />
            </div>
            <div className="w-6 h-6 hover:cursor-pointer hover:opacity-70">
              <img src={InstagramSvg} alt="Instagram" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

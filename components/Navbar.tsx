"use client"

import Image from "next/image"
import { useState } from "react"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <header>
      <nav>
        <div className="hidden justify-between bg-gradient-to-r from-[#3E9EC2] to-[#00A3FF] px-20 py-2 text-sm text-white xl:flex">
          <div className="flex gap-4">
            <div>info@portconakry.com</div>
            <div>(+224) 655 80 00 80</div>
          </div>
          <div className="flex gap-4">
            <div>Carte</div>
            <div>Salle de Presse</div>
            <div>Emplois</div>
            <div>Français</div>
          </div>
        </div>

        <div className="flex items-center justify-between bg-white px-20 font-medium uppercase">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt={""} width={87} height={92}></Image>
            <div className="w-52 text-xl font-black text-[#3E9EC2]">
              Port Autonome de Conakry
            </div>
          </div>
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMenu}
            className="rounded bg-gray-200 p-2 xl:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>

          {/* Main Navigation Links */}
          <div className={`gap-4 xl:flex ${showMenu ? "block" : "hidden"}`}>
            <div>QUI SOMMES-NOUS ?</div>
            <div>NOS INSTALLATIONS</div>
            <div>Concessions</div>
            <div>Infos Pratiques</div>
            <div>Actualités</div>
            <div>Transit Malien</div>
            <div>Annuire Usagers</div>
            <div>Médiathèque</div>
          </div>
          {/* <input className="rounded-lg border-2 border-blue-500" type="text" /> */}
        </div>
      </nav>
    </header>
  )
}

export default Navbar

import Navbar from "@/components/Navbar"
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <Navbar />
      <div
        className="bg-center bg-no-repeat bg-cover w-full h-screen"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <div className="flex justify-center gap-4 items-center text-white pt-32 w-2/3 mx-auto">
          <div className="uppercase text-5xl font-black basis-5/12 border-t-4 pt-5  border-white">
            Bienvenue au Port Autonome de Conakry
          </div>
          <div className="">
            <div className="bg-gradient-to-r from-[#3E9EC2] to-[#00A3FF] p-8 rounded-3xl">
              <div className="text-lg">Comment pouvons-nous vous aider ?</div>
              <input type="text" className="w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

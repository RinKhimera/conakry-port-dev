import Hero from "@/components/Hero"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <div>
        <div className="w-1/2 mx-auto flex justify-center items-center rounded-full h-60 bg-gradient-to-r from-[#3E9EC2] to-[#00A3FF] -mt-28 text-white">
          <div className="w-full px-28">
            <div className="text-3xl text-start pb-5">Plus visités</div>
            <div className="grid grid-cols-3 gap-3">
              <Link href={""} className="font-bold text-xl underline">
                Lien page
              </Link>
              <Link
                href={""}
                className="font-bold text-xl underline place-self-center"
              >
                Lien page
              </Link>
              <Link
                href={""}
                className="font-bold text-xl underline place-self-end"
              >
                Lien page
              </Link>
              <Link href={""} className="font-bold text-xl underline">
                Lien page
              </Link>
              <Link
                href={""}
                className="font-bold text-xl underline place-self-center"
              >
                Lien page
              </Link>
              <Link
                href={""}
                className="font-bold text-xl underline place-self-end"
              >
                Lien page
              </Link>
              <Link href={""} className="font-bold text-xl underline">
                Lien page
              </Link>
              <Link
                href={""}
                className="font-bold text-xl underline place-self-center"
              >
                Lien page
              </Link>
              <Link
                href={""}
                className="font-bold text-xl underline place-self-end"
              >
                Lien page
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-20 py-20">
          <Image src="/visual2.png" alt={""} width={600} height={600} />
          <div className="text-black flex flex-col text-lg gap-10 mt-20 w-1/3">
            <p className="font-bold leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. deserunt mollit anim id est laborum.
            </p>
            <p className="leading-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

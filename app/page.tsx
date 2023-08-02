import Hero from "@/components/Hero"
import HeroCard, { heroCardData } from "@/components/HeroCard"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />

      <div>
        <div className="mx-auto -mt-28 flex h-60 w-1/2 items-center justify-center rounded-full bg-gradient-to-r from-[#3E9EC2] to-[#00A3FF] text-white">
          <div className="w-full px-28">
            <div className="pb-5 text-start text-3xl">Plus visités</div>
            <div className="grid grid-cols-3 gap-3">
              <Link href={""} className="text-xl font-bold underline">
                Lien page
              </Link>
              <Link
                href={""}
                className="place-self-center text-xl font-bold underline"
              >
                Lien page
              </Link>
              <Link
                href={""}
                className="place-self-end text-xl font-bold underline"
              >
                Lien page
              </Link>
              <Link href={""} className="text-xl font-bold underline">
                Lien page
              </Link>
              <Link
                href={""}
                className="place-self-center text-xl font-bold underline"
              >
                Lien page
              </Link>
              <Link
                href={""}
                className="place-self-end text-xl font-bold underline"
              >
                Lien page
              </Link>
              <Link href={""} className="text-xl font-bold underline">
                Lien page
              </Link>
              <Link
                href={""}
                className="place-self-center text-xl font-bold underline"
              >
                Lien page
              </Link>
              <Link
                href={""}
                className="place-self-end text-xl font-bold underline"
              >
                Lien page
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-20 py-20">
          <Image src="/visual2.png" alt={""} width={600} height={600} />
          <div className="mt-20 flex w-1/3 flex-col gap-10 text-lg text-black">
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

      <div className="mx-auto my-5 grid max-w-7xl grid-cols-6 items-stretch gap-4">
        {heroCardData.map((title, index) => (
          <HeroCard key={index} title={title} isWide={index >= 6} />
        ))}
      </div>
    </div>
  )
}

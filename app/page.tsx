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

      <div className="mx-auto my-20 flex w-10/12">
        <div className="basis-1/2 bg-[#C1EEFF] px-20 py-10">
          <h5 className="pb-6 text-6xl font-black uppercase text-[#0693CA]">
            Dernier projet en cours
          </h5>
          <p className="text-base leading-9 text-[#222]">
            We are committed to increasing port efficiency and improving trade
            flows based on the strategic pillars of sustainability, digitisation
            and innovation. We want to create a ‘cleaner and greener’ port and
            contribute to a healthier living environment for everyone, both now
            and in the future. Needless to say, we never lose sight of our core
            task: keeping shipping running smoothly and safely.
          </p>
          <div className="flex justify-end">
            <button className="mt-10 rounded-3xl bg-gradient-to-r from-[#3E9EC2] to-[#00A3FF] px-10 py-2 text-2xl font-bold uppercase text-white transition hover:opacity-80">
              Lire plus
            </button>
          </div>
        </div>
        <div className="basis-1/2 bg-[#D9D9D9]"></div>
      </div>

      <div className="mx-auto mb-20 w-2/3">
        <p className="rounded-lg border-y-[10px] border-[#00A3FF] px-4 py-8 text-center text-3xl font-bold text-[#3D3D3D]">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.&quot;
        </p>
        <p className="pt-8 text-end text-2xl font-black uppercase">
          MAMADOU BIRO DIALLO,{" "}
          <span className="font-medium">Directeur Général</span>
        </p>
      </div>

      <div className="mb-20 h-[500px] bg-[#C1EEFF]">
        <div className="mx-auto w-4/5">
          <h5 className="pt-20 text-6xl font-black uppercase text-[#0693CA] ">
            Port de Conakry <br />
            Services / Compétences
          </h5>
          <div className="flex gap-14 pl-4 pt-14">
            <div className="h-[310px] w-[325px] bg-[#D9D9D9]"></div>
            <div className="h-[310px] w-[325px] bg-[#D9D9D9]"></div>
            <div className="h-[310px] w-[325px] bg-[#D9D9D9]"></div>
            <div className="h-[310px] w-[325px] bg-[#D9D9D9]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

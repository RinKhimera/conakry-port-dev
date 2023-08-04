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
        <div className="mx-auto -mt-28 hidden h-60 w-10/12 items-center justify-center rounded-full bg-gradient-to-r from-[#3E9EC2] to-[#00A3FF] text-white md:flex md:w-4/5 xl:w-3/5">
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

        <div className="mx-auto flex w-10/12 flex-col items-center justify-center gap-20 py-20 lg:flex-row">
          <Image src="/visual2.png" alt={""} width={600} height={600} />
          <div className="flex w-full flex-col gap-10 text-lg text-black lg:w-1/3">
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

      <div className="mx-auto my-5 grid w-4/5 max-w-7xl grid-cols-2 items-stretch gap-4 lg:grid-cols-6">
        {heroCardData.map((title, index) => (
          <HeroCard key={index} title={title} isWide={index >= 6} />
        ))}
      </div>

      <div className="mx-auto my-20 flex w-10/12">
        <div className="basis-1/2 bg-[#C1EEFF] px-20 py-10">
          <h5 className="pb-6 text-3xl font-black uppercase text-[#0693CA] lg:text-6xl">
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

      <div className="mx-auto mb-20 w-10/12 md:w-2/3">
        <p className="rounded-lg border-y-[10px] border-[#00A3FF] px-4 py-8 text-center text-3xl font-bold text-[#3D3D3D]">
          &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.&quot;
        </p>
        <p className="pt-8 text-center text-2xl font-black uppercase md:text-end">
          MAMADOU BIRO DIALLO,{" "}
          <span className="font-medium">Directeur Général</span>
        </p>
      </div>

      <div className="relative mb-20 bg-[#C1EEFF] lg:h-[500px]">
        <div className="mx-auto w-4/5">
          <h5 className="pt-20 text-3xl font-black uppercase text-[#0693CA] lg:text-6xl ">
            Port de Conakry <br />
            Services / Compétences
          </h5>
          <div className="flex flex-col items-center justify-center gap-5 pb-10 pl-4 pt-14 lg:flex-row lg:gap-14">
            <div className="h-[310px] w-full bg-[#D9D9D9] lg:flex-1"></div>
            <div className="h-[310px] w-full bg-[#D9D9D9] lg:flex-1"></div>
            <div className="h-[310px] w-full bg-[#D9D9D9] lg:flex-1"></div>
            <div className="h-[310px] w-full bg-[#D9D9D9] lg:flex-1"></div>
          </div>
        </div>
      </div>

      <div className="mx-auto mb-20 mt-52 w-4/5">
        <h4 className="pb-5 text-3xl font-black uppercase text-[#3D3D3D] underline decoration-[#D9D9D9] underline-offset-[15px] lg:text-6xl lg:underline-offset-[30px]">
          Impact du port en chiffres :
        </h4>
        <Image src="/illustration.png" alt={""} width={1572} height={505} />
      </div>

      <div className="mx-auto my-20 w-4/5">
        <h4 className="pb-5 text-3xl font-black uppercase text-[#3D3D3D] underline decoration-[#D9D9D9] underline-offset-[15px] lg:text-6xl lg:underline-offset-[30px]">
          Partenariat / Concessions
        </h4>
        <div className="flex flex-col items-center justify-center gap-8 pt-16 lg:flex-row">
          <div className="h-[450px] w-full bg-[#D9D9D9] lg:flex-1"></div>
          <div className="h-[450px] w-full bg-[#D9D9D9] lg:flex-1"></div>
          <div className="h-[450px] w-full bg-[#D9D9D9] lg:flex-1"></div>
        </div>
      </div>

      <div className="mx-auto my-20 flex w-11/12 flex-col lg:flex-row">
        <div className="flex-1 bg-[#C1EEFF] py-20">
          <h5 className="pb-5 text-center text-6xl font-black uppercase text-[#0693CA]">
            Contactez-nous
          </h5>
          <form action="submit" className="mx-auto flex w-4/5 flex-col gap-1">
            <label htmlFor="full_name" className="text-start text-[#222]">
              Votre nom
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="block w-full px-4 py-4"
              name="full_name"
              id="full_name"
            />

            <label htmlFor="email" className="pt-2 text-start text-[#222]">
              Votre adresse de messagerie
            </label>
            <input
              type="text"
              placeholder="email@domain.com"
              className="block w-full px-4 py-4"
              name="email"
              id="email"
            />

            <label htmlFor="message" className="pt-2 text-start text-[#222]">
              Votre message
            </label>
            <textarea
              placeholder="Veuillez entrer votre message"
              className="block h-40 w-full px-4 py-4"
              name="message"
              id="message"
            />

            <div className="flex justify-end">
              <button className="mt-5 rounded-3xl bg-gradient-to-r from-[#3E9EC2] to-[#00A3FF] px-10 py-2 text-2xl font-bold uppercase text-white transition hover:opacity-80">
                Envoyer
              </button>
            </div>
          </form>
        </div>
        <div className="flex-1 bg-[#D9D9D9]"></div>
      </div>
    </div>
  )
}

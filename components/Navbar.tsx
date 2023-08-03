import Image from "next/image"

const Navbar = () => {
  return (
    <header className="">
      <nav>
        <div className="flex justify-between bg-gradient-to-r from-[#3E9EC2] to-[#00A3FF] px-20 py-2 text-sm text-white">
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
          <div>QUI SOMMES-NOUS ?</div>
          <div>NOS INSTALLATIONS</div>
          <div>Concessions</div>
          <div>Infos Pratiques</div>
          <div>Actualités</div>
          <div>Transit Malien</div>
          <div>Annuire Usagers</div>
          <div>Médiathèque</div>
          {/* <input className="rounded-lg border-2 border-blue-500" type="text" /> */}
        </div>
      </nav>
    </header>
  )
}

export default Navbar

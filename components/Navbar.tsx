import Image from "next/image"

const Navbar = () => {
  return (
    <header className="">
      <nav>
        <div className="flex justify-between bg-gradient-to-r from-[#3E9EC2] to-[#00A3FF] text-white text-sm py-2 px-20">
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

        <div className="flex font-medium items-center justify-between bg-white px-20 uppercase">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt={""} width={87} height={92}></Image>
            <div className="text-[#3E9EC2] font-black text-xl w-52">
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

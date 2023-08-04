import Link from "next/link"

export const heroCardData = [
  "Le Terminal à Conteneur",
  "Le Terminal Conventionnel",
  "L'Appointement Pétrolier",
  "Trafic Navires Arrivé/Départ",
  "Les Statistiques du PAC",
  "Le Plan du Port de Conakry",
  "Infos aux usagers",
  "Météo et Marée",
]

type Props = {
  title: string
  isWide: boolean
}

const HeroCard = ({ title, isWide }: Props) => {
  return (
    <Link
      href="#"
      className={`block w-full border border-gray-200 bg-[#DEDEDE] p-6 transition hover:bg-gray-100 ${
        isWide
          ? "col-span-2 flex h-40 flex-col justify-center lg:col-span-3 lg:mt-16"
          : "col-span-2 flex h-40 flex-col justify-center lg:h-80 lg:justify-end"
      }`}
    >
      <h5 className="text-center text-2xl font-bold uppercase tracking-tight text-gray-900">
        {title}
      </h5>
    </Link>
  )
}

export default HeroCard

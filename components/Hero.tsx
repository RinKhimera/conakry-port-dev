const Hero = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/bg.png')" }}
    >
      <div className="mx-auto flex w-2/3 items-center justify-center gap-4 pt-32">
        <div className="basis-5/12 border-t-4 border-white pt-5 text-5xl font-black uppercase  text-white">
          Bienvenue au Port Autonome de Conakry
        </div>
        <div className="">
          <div className="rounded-3xl bg-gradient-to-r from-[#3E9EC2] to-[#00A3FF] p-8">
            <div className="text-lg text-white">
              Comment pouvons-nous vous aider ?
            </div>
            <input
              type="text"
              placeholder="Mots-clés"
              className="w-full rounded-lg px-4 py-1.5"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

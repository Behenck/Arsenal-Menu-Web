export function Hero() {
  return (
    <div className="space-y-5">
      {/* <Image src={nlwLogo} alt="nlw spacetime" /> */}

      <div className="max-w-[420px] space-y-1">
        <h1 className="text-5xl font-bold leading-tight text-gray-50">
          LIGA RS HANDEBOL
        </h1>
        <p className="text-lg leading-relaxed text-gray-200">
          Colecione momentos marcantes da sua jornada e compartilhe (se quiser)
          com o mundo!
        </p>
      </div>

      {/* <Link
        href="/memories/new"
        className="inline-block rounded-full bg-orange-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black transition-colors hover:bg-orange-600"
      >
        CADASTRAR LEMBRANÇA
      </Link> */}
    </div>
  )
}

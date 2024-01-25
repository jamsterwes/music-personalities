import Link from "next/link"

export default function ResultsPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-6xl font-black sm:text-8xl bg-[#FF6347] text-center px-5 rounded-md text-white">SPLS</h1>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#FF4500] dark:text-[#FF4500]">
              Synthetic Positive Lethargic Sounds
            </h2>
            <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-300 text-center">
              This personality type is characterized by a love for synthetic sounds, a positive outlook, a tendency
              towards slower tempos, and a preference for complex soundscapes. You likely enjoy electronic music,
              ambient soundscapes, and anything that pushes the boundaries of traditional music.
            </p>
          </div>
        </div>
      </section>
      <section className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-[#FF4500] dark:text-[#FF4500]">
          Explore the Other Personalities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          <Link className="bg-[#FF6347] dark:bg-[#FF6347] p-4 rounded-lg" href="#">
            <h3 className="text-white font-black">SNLW</h3>
          </Link>
          <Link className="bg-[#FF4500] p-4 rounded-lg" href="#">
            <h3 className="text-white font-black">SNES</h3>
          </Link>
          <Link className="bg-[#FFD700] p-4 rounded-lg" href="#">
            <h3 className="text-white font-black">SNEW</h3>
          </Link>
          <Link className="bg-[#a3e73d] p-4 rounded-lg" href="#">
            <h3 className="text-white font-black">SNLS</h3>
          </Link>
          <Link className="bg-[#00FFFF] p-4 rounded-lg" href="#">
            <h3 className="text-white font-black">SPLW</h3>
          </Link>
          <Link className="bg-[#1E90FF] p-4 rounded-lg" href="#">
            <h3 className="text-white font-black">SPES</h3>
          </Link>
          <Link className="bg-[#9370DB] p-4 rounded-lg" href="#">
            <h3 className="text-white font-black">SPEW</h3>
          </Link>
          <Link className="bg-[#FF69B4] p-4 rounded-lg" href="#">
            <h3 className="text-white font-black">SPLS</h3>
          </Link>
          <Link className="bg-[#FF1493] p-4 rounded-lg" href="#">
            <h3 className="text-white font-black">ANLW</h3>
          </Link>
          <Link className="bg-[#BA55D3] p-4 rounded-lg" href="#">
            <h3 className="text-white font-black">ANES</h3>
          </Link>
          <Link className="bg-[#00BFFF] p-4 rounded-lg" href="#">
            <h3 className="text-white font-black">ANEW</h3>
          </Link>
          <Link className="bg-[#40E0D0] p-4 rounded-lg" href="#">
            <h3 className="text-white font-black">ANLS</h3>
          </Link>
          <Link className="bg-[#7CFC00] p-4 rounded-lg" href="#">
            <h3 className="text-white font-black">APLW</h3>
          </Link>
          <Link className="bg-[#FFA500] p-4 rounded-lg" href="#">
            <h3 className="text-white font-black">APES</h3>
          </Link>
          <Link className="bg-[#FF8C00] p-4 rounded-lg" href="#">
            <h3 className="text-white font-black">APEW</h3>
          </Link>
          <Link className="bg-[#FF4500] p-4 rounded-lg" href="#">
            <h3 className="text-white font-black">APLS</h3>
          </Link>
        </div>
      </section>
    </>
  )
}

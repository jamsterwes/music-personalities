import PersonalityTypeLink, { getColor } from "@/components/PersonalityTypeLink"
import Link from "next/link"

export default function ResultsPage() {
  return (
    <>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-6xl mb-6 font-black sm:text-8xl bg-[#51ed51] text-center px-5 rounded-md text-white">SPLS</h1>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#51ed51]">
            Synthetic Positive Lethargic Sounds
          </h2>
          <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center">
            This personality type is characterized by a love for synthetic sounds, a positive outlook, a tendency
            towards slower tempos, and a preference for complex soundscapes. You likely enjoy electronic music,
            ambient soundscapes, and anything that pushes the boundaries of traditional music.
          </p>
        </div>
      </section>
      <section className="w-full px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 text-white">
          Explore the Other Personalities
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-24">
          <PersonalityTypeLink type="SPLW" />
          <PersonalityTypeLink type="SPLS" />
          <PersonalityTypeLink type="SPEW" />
          <PersonalityTypeLink type="SPES" />
          <PersonalityTypeLink type="SNLW" />
          <PersonalityTypeLink type="SNLS" />
          <PersonalityTypeLink type="SNEW" />
          <PersonalityTypeLink type="SNES" />
          <PersonalityTypeLink type="APLW" />
          <PersonalityTypeLink type="APLS" />
          <PersonalityTypeLink type="APEW" />
          <PersonalityTypeLink type="APES" />
          <PersonalityTypeLink type="ANLW" />
          <PersonalityTypeLink type="ANLS" />
          <PersonalityTypeLink type="ANEW" />
          <PersonalityTypeLink type="ANES" />
        </div>
      </section>
    </>
  )
}

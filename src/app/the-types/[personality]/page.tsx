import { typeData } from "@/lib/personalityData";

export default async function ResultsPage({ params }: {
  params: {personality: string}
}) {
  // Unpack that type's data
  const name = typeData[params.personality].name;
  const desc = typeData[params.personality].description;
  const color = typeData[params.personality].color;

  // Render
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-white text-6xl font-black p-2 rounded-md mb-2" style={{backgroundColor: color}}>{params.personality}</h1>
      <h2 className="text-white text-2xl sm:text-3xl font-light lowercase mb-4" style={{color: color}}>({name})</h2>
      <p className="text-stone-300 text-md sm:text-lg w-3/4">{desc}</p>
    </div>
  )
}
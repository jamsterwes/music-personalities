import { typeData } from "@/lib/personalityData";
import Link from "next/link";

export default function TypesPage() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-16">
      {Object.keys(typeData).map(typeName => (
        <Link href={"/the-types/" + typeName} key={typeName} className="text-white text-6xl font-black px-2 py-8 text-center rounded-md mb-2" style={{backgroundColor: typeData[typeName].color}}>
          {typeName}
        </Link>
      ))}
    </div>
  )
}
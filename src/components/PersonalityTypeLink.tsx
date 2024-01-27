import Link from "next/link";

export const getColor = (type: string) => {
    if (type.startsWith("SP")) return "#51ed51";
    if (type.startsWith("SN")) return "#FF6347";
    if (type.startsWith("AP")) return "#FFD700";
    if (type.startsWith("AN")) return "#3355D3";
    return "#ffffff";
};

export default function PersonalityTypeLink({type}: {
    type: string
}) {
    return (
        <Link className="px-1 py-6 rounded-lg" href="#" style={{backgroundColor: getColor(type)}}>
            <h3 className="text-white text-3xl text-center font-black">{type}</h3>
        </Link>
    );
}
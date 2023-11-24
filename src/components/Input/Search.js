import Image from "next/image";

export default function InputSearch() {
    return (
        <div className="relative">
            <div className="flex w-full items-center justify-end">
                <input placeholder="Search" className="w-full py-1.5 pl-20 pr-28 border border-primary-gray focus:outline-none focus:border-primary-black rounded-md placeholder:text-primary-gray text-primary-black" />
                <Image src={require("@/assets/icons/search_black.svg")} className="w-4 h-4 absolute mr-20" alt="search_blank" />
            </div>
        </div>
    )
}
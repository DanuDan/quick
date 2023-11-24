import Image from "next/image";

export default function Navbar() {
    return (
        <>
            <nav className=" w-full py-4 px-5 bg-primary-black">
                <Image src={require("@/assets/icons/search.svg")} className="w-4 h-4" alt="search" />
            </nav>
        </>
    )
}
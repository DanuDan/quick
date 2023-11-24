import Image from "next/image";

export default function FlashButton({ click }) {
    return (
        <div className="w-auto h-24 flex space-y-2 justify-center items-end ">
            <div onClick={click} className="py-[14px] px-[14px] flex justify-center items-center cursor-pointer bg-primary rounded-full">
                <Image src={require("@/assets/icons/flash.svg")} className="h-[26px] w-[26px]" alt="flash" />
            </div>
        </div >
    )
}
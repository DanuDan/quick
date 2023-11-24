import Image from "next/image";
import InputSearch from "../Input/Search";
import { useState } from "react";
import InputText from "../Input/Text";
import SendButton from "../Button/SendButton";

export default function FrameChat() {

    const [detail, setDetail] = useState(false)

    const chatsContent = [
        
    ]

    return (
        <>
            {!detail &&
                <div className="p-[24px]">
                    <InputSearch />
                    <div className="flex justify-between w-full  p-[22px] space-x-4 border-b border-primary-gray">
                        <div className="flex space-x-4">
                            <Image src={require("@/assets/icons/account_chat.svg")} className="w-[51px] h-[34px]" alt="account_chat" />
                            <div>
                                <div className="flex space-x-4">
                                    <div onClick={() => setDetail(!detail)} className="text-primary font-semibold text-base max-w-[420px] tracking-tight leading-tight line-clamp-2 hover:underline cursor-pointer">
                                        Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]
                                    </div>
                                    <div className="text-primary-black font-medium text-base whitespace-nowrap">
                                        January 1,2021 19:10
                                    </div>
                                </div>
                                <div className="-space-y-1">
                                    <div className="text-primary-black font-semibold text-base">
                                        Cameron Phillips :
                                    </div>
                                    <div className=" text-primary-black font-medium text-base">
                                        Please check out!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center pt-10">
                            <div className="w-[10px] h-[10px] items-end bg-indicator-red rounded-full">

                            </div>
                        </div>
                    </div >
                    <div className="flex justify-between w-full p-[22px] space-x-4 border-b border-primary-gray">
                        <div className="flex space-x-4">
                            <Image src={require("@/assets/icons/account_chat.svg")} className="w-[51px] h-[34px]" alt="search" />
                            <div>
                                <div className="flex space-x-4">
                                    <div className="text-primary font-semibold text-base">
                                        109220-Naturalization
                                    </div>
                                    <div className="text-primary-black font-medium text-base">
                                        January 1,2021 19:10
                                    </div>
                                </div>
                                <div className="-space-y-1">
                                    <div className="text-primary-black font-semibold text-base">
                                        Cameron Phillips :
                                    </div>
                                    <div className=" text-primary-black font-medium text-base">
                                        Please check out!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center pt-10">
                            <div className="w-[10px] h-[10px] items-end bg-indicator-red rounded-full">

                            </div>
                        </div>
                    </div >
                    <div className="flex justify-between w-full p-[22px] space-x-4 border-b border-primary-gray">
                        <div className="flex space-x-4">
                            <Image src={require("@/assets/icons/account_chat.svg")} className="w-[51px] h-[34px]" alt="account_chat" />
                            <div>
                                <div className="flex space-x-4">
                                    <div className="text-primary font-semibold text-base">
                                        109220-Naturalization
                                    </div>
                                    <div className="text-primary-black font-medium text-base">
                                        January 1,2021 19:10
                                    </div>
                                </div>
                                <div className="-space-y-1">
                                    <div className="text-primary-black font-semibold text-base">
                                        Cameron Phillips :
                                    </div>
                                    <div className=" text-primary-black font-medium text-base">
                                        Please check out!
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center pt-10">
                            <div className="w-[10px] h-[10px] items-end bg-indicator-red rounded-full">

                            </div>
                        </div>
                    </div >
                </div>
            }
            {detail &&
                <div>
                    <div className="w-full p-[24px] space-x-4 flex items-center bg-white border-b border-b-[#BDBDBD] rounded-t-full">
                        <Image onClick={() => setDetail(!detail)} src={require("@/assets/icons/arrow_back.svg")} className="w-4 h-4 cursor-pointer" alt="arrow_back" />
                        <div className="">
                            <div className="text-primary font-semibold text-base max-w-[700px] line-clamp-1">
                                Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]
                            </div>
                            <div className="text-[#333333] font-semibold text-xs">
                                3 Participants
                            </div>
                        </div>
                    </div>
                    <div className=" max-h-[350px] 3xl:max-h-[580px] overflow-x-auto">
                        <div className="px-4 flex-row-reverse justify-start flex">
                            <div className="space-y-1.5 p-2">
                                <div className="text-chats-purple font-semibold text-end text-sm">
                                    You
                                </div>
                                <div>
                                    <div className="flex min-w-[312px] flex-row-reverse justify-between">
                                        <div className="bg-chats-purpleLight space-y-2 p-2 max-w-[518px] rounded">
                                            <div className=" font-medium text-sm text-primary-black">
                                                No worries. It will be completed ASAP. I’ve asked him yesterday.
                                            </div>
                                            <div className="font-medium text-primary-black text-xs">
                                                19:03
                                            </div>
                                        </div>
                                        <Image src={require("@/assets/icons/edit_chat.svg")} className="w-4 h-4 mx-2 cursor-pointer" alt="edit_chat" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-6">
                            <div className="flex relative pb-2 pt-5 justify-center items-center">
                                <div className="border-b absolute w-full border-primary-black" />
                                <div className="bg-white px-5 py-1 absolute text-primary-black text-base font-semibold">
                                    Today June 09, 2021
                                </div>
                            </div>
                        </div>
                        <div className="px-4  justify-start flex">
                            <div className="space-y-1.5 p-2">
                                <div className="text-chats-orange font-semibold text-sm">
                                    Mary Milda
                                </div>
                                <div>
                                    <div className="flex min-w-[312px] justify-between">
                                        <div className="bg-chats-orangeLight space-y-2 p-2 max-w-[518px] rounded">
                                            <div className="font-medium text-sm text-primary-black">
                                                Hello Obaidullah, I will be your case advisor for case #029290. I have assigned some homework for you to fill. Please keep up with the due dates. Should you have any questions, you can message me anytime. Thanks.
                                            </div>
                                            <div className="font-medium text-primary-black text-xs">
                                                19:03
                                            </div>
                                        </div>
                                        <Image src={require("@/assets/icons/edit_chat.svg")} className="w-4 h-4 mx-2 cursor-pointer" alt="edit_chat" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4 flex-row-reverse justify-start flex">
                            <div className="space-y-1.5 p-2">
                                <div className="text-chats-purple font-semibold text-end text-sm">
                                    You
                                </div>
                                <div>
                                    <div className="flex min-w-[312px] flex-row-reverse justify-between">
                                        <div className="bg-chats-purpleLight space-y-2 p-2 max-w-[518px] rounded">
                                            <div className=" font-medium text-sm text-primary-black">
                                                Please contact Mary for questions regarding the case bcs she will be managing your forms from now on! Thanks Mary.
                                            </div>
                                            <div className="font-medium text-primary-black text-xs">
                                                19:03
                                            </div>
                                        </div>
                                        <Image src={require("@/assets/icons/edit_chat.svg")} className="w-4 h-4 mx-2 cursor-pointer" alt="edit_chat" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4  justify-start flex">
                            <div className="space-y-1.5 p-2">
                                <div className="text-chats-orange font-semibold text-sm">
                                    Mary Milda
                                </div>
                                <div>
                                    <div className="flex min-w-[312px] justify-between">
                                        <div className="bg-chats-orangeLight space-y-2 p-2 max-w-[518px] rounded">
                                            <div className="font-medium text-sm text-primary-black">
                                                Sure Thing, Claren
                                            </div>
                                            <div className="font-medium text-primary-black text-xs">
                                                19:03
                                            </div>
                                        </div>
                                        <Image src={require("@/assets/icons/edit_chat.svg")} className="w-4 h-4 mx-2 cursor-pointer" alt="edit_chat" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-6">
                            <div className="flex relative pb-2 pt-5 justify-center items-center">
                                <div className="border-b absolute w-full border-indicator-red" />
                                <div className="bg-white px-5 py-1 absolute text-indicator-red text-base font-semibold">
                                    New Message
                                </div>
                            </div>
                        </div>
                        <div className="px-4  justify-start flex">
                            <div className="space-y-1.5 p-2">
                                <div className="text-chats-orange font-semibold text-sm">
                                    Mary Milda
                                </div>
                                <div>
                                    <div className="flex min-w-[312px] justify-between">
                                        <div className="bg-chats-orangeLight space-y-2 p-2 max-w-[518px] rounded">
                                            <div className="font-medium text-sm text-primary-black">
                                                Sure Thing, Claren
                                            </div>
                                            <div className="font-medium text-primary-black text-xs">
                                                19:03
                                            </div>
                                        </div>
                                        <Image src={require("@/assets/icons/edit_chat.svg")} className="w-4 h-4 mx-2 cursor-pointer" alt="edit_chat" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="px-4  justify-start flex">
                            <div className="space-y-1.5 p-2">
                                <div className="text-chats-orange font-semibold text-sm">
                                    Mary Milda
                                </div>
                                <div>
                                    <div className="flex min-w-[312px] justify-between">
                                        <div className="bg-chats-orangeLight space-y-2 p-2 max-w-[518px] rounded">
                                            <div className="font-medium text-sm text-primary-black">
                                                Sure Thing, Claren
                                            </div>
                                            <div className="font-medium text-primary-black text-xs">
                                                19:03
                                            </div>
                                        </div>
                                        <Image src={require("@/assets/icons/edit_chat.svg")} className="w-4 h-4 mx-2 cursor-pointer" alt="edit_chat" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="py-2 px-4 w-full flex space-x-3">
                        <InputText />
                        <SendButton />
                    </div>
                </div>
            }
        </>
    )
}
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function InboxButton({ click, hoverOff }) {

    const [isHovered, setIsHovered] = useState(false);
    const onMouseEnter = () => setIsHovered(true);
    const onMouseLeave = () => setIsHovered(false);

    useEffect(() => {
        if (hoverOff) {
            setIsHovered(false)
        }
    }, [hoverOff])

    return (

        <div className="w-auto h-24 flex flex-col relative space-y-2 justify-end items-center ">
            {!hoverOff &&
                <div className="text-white text-base">
                    Inbox
                </div>
            }
            <AnimatePresence>
                {hoverOff &&
                    <motion.div className="!w-[54px] !h-[54px] mr-5 rounded-full bg-primary-black"
                        initial={{
                            opacity: 0.2,
                            x: 20,
                        }}
                        transition={{
                            duration: 0.5
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                        }}
                        exit={{
                            opacity: 0,
                            x: 0,
                        }} />
                }
            </AnimatePresence>
            <div onClick={click} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className={`${isHovered && !hoverOff ? " bg-[#F2F2F2] " : " bg-indicator-purple "} + ${hoverOff && " absolute "} + " py-[12px] px-[12px]  flex justify-center items-center cursor-pointer rounded-full "`}>
                {
                    isHovered && !hoverOff ?
                        <Image src={require("@/assets/icons/chat.svg")} className="h-[26px] w-[26px]" alt="chat" />
                        :
                        <Image src={require("@/assets/icons/chat_blank.svg")} className={`${hoverOff ? " h-[30px] w-[30px] " : " h-[26px] w-[26px] "}`} alt="chat" />
                }
            </div>
        </div>
    )
}
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export default function MyTaskButton() {

    const [toggle, setToggle] = useState(false)
    return (
        <div className="w-[289px] flex flex-col justify-center items-center">
            <div onClick={() => setToggle(!toggle)} className="w-[118px] px-2 py-2 mb-2 bg-white rounded-md cursor-pointer border border-primary-black flex justify-between items-center">
                <div className="mb-1.5 text-primary-black font-semibold text-base ">
                    My Tasks
                </div>
                <Image src={require("@/assets/icons/arrow_toggle.svg")} className="w-4 h-4" alt="arrow_togle" />
            </div>
            <AnimatePresence>
                {
                    toggle && (
                        <motion.div
                            initial={{
                                top: 25,
                                opacity: 0
                            }}
                            transition={{
                                duration: 0.2
                            }}
                            animate={{
                                top: 50,
                                opacity: 1
                            }}
                            exit={{
                                opacity: 0
                            }}
                            className="w-full z-10">
                            <div className="relative w-full">
                                <div className="absolute w-full bg-white border border-primary-gray rounded-md">
                                    <div className="text-primary-black text-lg px-4 hover:bg-slate-200 py-1.5 font-semibold cursor-pointer">
                                        Personal Errands
                                    </div>
                                    <div className="border-b border-primary-gray "></div>
                                    <div className="text-primary-black text-lg px-4 hover:bg-slate-200 py-1.5 font-semibold cursor-pointer">
                                        Urgent To Do
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </div>
    )
}
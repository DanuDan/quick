import Image from "next/image";
import { useEffect, useState } from "react";
import InputDate from "../Input/Date";
import InputDescription from "../Input/Description";
import { AnimatePresence, motion } from "framer-motion";

export default function TaskList({ titles, date, dateLeft, dateLine, desc }) {


    const [accordion, setAccordion] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [title, setTitle] = useState('');

    const handleInputChange = (e) => {
        setTitle(e.target.value);
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    const [check, setCheck] = useState(false)
    return (
        <>
            <div className="w-full py-[22px] border-b border-primary-black ">
                <div className="flex spax justify-between">
                    <div className="w-[400px] max-w-[400px]">
                        <div className="flex items-start space-x-3">
                            <div className="mt-1.5">
                                {check == true ?
                                    <Image src={require("@/assets/icons/checkbox_checked.svg")} onClick={() => setCheck(false)} className="w-[18px] h-[18px] cursor-pointer" alt="checkbox" />
                                    :
                                    <Image src={require("@/assets/icons/checkbox.svg")} onClick={() => setCheck(true)} className="w-[18px] h-[18px] cursor-pointer" alt="checkbox" />
                                }
                            </div>
                            <textarea className={`${check ? "text-primary-gray text-base font-bold line-through " : " text-primary-black text-lg font-bold   "} + " w-[400px] max-w-[400px] h-[30px] max-h-[50px] px-1 resize-none overflow-hidden "`}
                                onChange={handleInputChange}
                                defaultValue={titles} />
                        </div>
                    </div>
                    <div className="flex items-start space-x-3">
                        <div className="text-indicator-red font-medium text-base">
                            {dateLeft}
                        </div>
                        <div className="text-primary-black font-medium text-base">
                            {date}
                        </div>
                        <Image onClick={() => setAccordion(!accordion)} src={require("@/assets/icons/arrow_toggle.svg")} className={`${accordion == true ? " rotate-180 " : "rotate-0"} + " w-4 h-4 mt-1 cursor-pointer  " `} alt="arrow" />
                        <div className="relative">
                            <Image onClick={() => setToggle(!toggle)} src={require("@/assets/icons/edit_chat.svg")} className="w-4 h-4 mt-1 cursor-pointer" alt="edit_chat" />
                            <AnimatePresence>
                                {
                                    toggle && (
                                        <motion.div
                                            initial={{
                                                top: 0,
                                                opacity: 0
                                            }}
                                            transition={{
                                                duration: 0.2
                                            }}
                                            animate={{
                                                top: 30,
                                                opacity: 1
                                            }}
                                            exit={{
                                                opacity: 0
                                            }}
                                            className="w-full absolute z-10 -left-20 -top-20">
                                            <div className=" absolute w-24 bg-white border border-primary-gray rounded-md text-indicator-red text-lg px-4 py-1.5 font-semibold cursor-pointer">
                                                Delete
                                            </div>
                                        </motion.div>
                                    )
                                }
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
                {accordion &&
                    <div className="px-20">
                        <div className="pt-2 space-y-3">
                            <InputDate dateValue={dateLine} />
                            <InputDescription defaultValue={desc} />
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
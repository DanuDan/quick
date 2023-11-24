import Image from "next/image";
import { useEffect, useState } from "react";
import InputDate from "../Input/Date";
import InputDescription from "../Input/Description";
import InputText from "../Input/Text";

export default function TaskInput() {
    const [accordion, setAccordion] = useState(false)
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
                            <InputText />
                        </div>
                    </div>
                    <div className="flex items-start space-x-3">
                        <Image onClick={() => setAccordion(!accordion)} src={require("@/assets/icons/arrow_toggle.svg")} className={`${accordion == true ? " rotate-180 " : "rotate-0"} + " w-4 h-4 mt-1 cursor-pointer  " `} alt="arrow" />
                        <Image src={require("@/assets/icons/edit_chat.svg")} className="w-4 h-4 mt-1 cursor-pointer" alt="edit_chat" />
                    </div>
                </div>
                {accordion &&
                    <div className="px-20">
                        <div className="pt-2 space-y-3">
                            <InputDate/>
                            <InputDescription/>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}
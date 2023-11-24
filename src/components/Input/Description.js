import Image from "next/image";
import { useState } from "react";

export default function InputDescription({ defaultValue }) {
    const [description, setDescription] = useState('')
    const [value, setValue] = useState(null);


    const handleInputChange = (e) => {
        setDescription(e.target.value);
        setValue(e);
        e.target.style.height = `${e.target.scrollHeight}px`;
    };

    return (
        <div className="w-full flex items-start space-x-3">
            {value ?
                <Image src={require("@/assets/icons/pen.svg")} className="w-5 h-5 mt-2" alt="time" />
                :
                <Image src={require("@/assets/icons/pen_primary.svg")} className="w-5 h-5 mt-2" alt="time" />
            }
            <textarea className=" w-full h-[80px] px-1 resize-none overflow-hidden font-medium text-base text-black "
                onChange={handleInputChange}
                defaultValue={defaultValue} />
        </div>
    )
}
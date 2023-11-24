import Image from "next/image";
import { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export default function InputDate({ dateValue }) {

    const [value, setValue] = useState(null);
    const [trigger, setTrigger] = useState(null)


    const handleValueChange = (newValue) => {
        setValue(newValue);
        setTrigger(newValue)
    }

    useEffect(() => {
        if (dateValue) {
            setValue({
                startDate: dateValue,
                endDate: dateValue
            })

        } else {
            dateValue === "" && (setValue({
                startDate: null,
                endDate: null
            }))
        }
    }, [])

    return (

        <div className="w-[193px] flex items-center space-x-3">
            {trigger ?
                <Image src={require("@/assets/icons/time_primary.svg")} className="w-5 h-5" alt="time" />
                :
                <Image src={require("@/assets/icons/time.svg")} className="w-5 h-5" alt="time" />
            }
            <Datepicker
                showShortcuts={false}
                useRange={false}
                asSingle={true}
                value={value}
                primaryColor="primary"
                displayFormat="DD/MM/YYYY"
                classNames="bg-white !dark:bg-white w-[193px] h-[40px]"
                inputClassName="bg-white !dark:bg-white text-primary-black border border-primary-black rounded p-2 placeholder:text-primary-gray w-[193px] h-[40px]"
                onChange={handleValueChange}
            />
        </div>
    )
}
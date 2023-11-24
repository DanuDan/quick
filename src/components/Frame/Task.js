import Image from "next/image";
import InputSearch from "../Input/Search";
import NewTaskButton from "../Button/NewTaskButton";
import MyTaskButton from "../Button/MyTaskButton";
import TaskList from "../Task/TaskList";
import TaskInput from "../Task/TaskInput";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTask } from "@/app/store/slice/taskSlice";

export default function FrameTask() {

    const taskMaster = useSelector((state) => state.task.source)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTask())
    }, []);

    // useEffect(() => {
    //     console.log(taskMaster)
    // }, [taskMaster])



    const dataSubset = taskMaster.slice(0, 10)




    return (
        <>
            <div className="py-[24px] px-[32px]">
                <div className="w-full flex justify-between">
                    <MyTaskButton />
                    <NewTaskButton />
                </div>
                <div className="w-full max-h-[350px] 3xl:max-h-[620px] overflow-y-auto ">

                    {dataSubset.map((item, i) => (
                        <TaskList key={i} titles={item.title} desc={item.body} date={"23/11/2023"} dateLeft={"1 Days Left"} dateLine={"2023-11-23"} />
                    ))
                    }
                    <TaskInput />
                </div>
            </div>
        </>
    )
}
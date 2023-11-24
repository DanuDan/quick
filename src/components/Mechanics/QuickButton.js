"use client"

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FlashButton from "../Button/FlashButton";
import InboxButton from "../Button/InboxButton";
import TaskButton from "../Button/TaskButton";
import FrameChat from "../Frame/Chat";
import FrameTask from "../Frame/Task";

export default function QuickButton() {

    const [open, setOpen] = useState(false)
    const [chat, setChat] = useState(false)
    const [task, setTask] = useState(false)

    const handleChatButtonClick = () => {
        setChat(!chat);
        setTask(false);
    };

    const handleTaskButtonClick = () => {
        setTask(!task);
        setChat(false);
    };

    return (
        <div className="absolute w-full h-full py-5 px-10 flex flex-col justify-end items-end">
            {chat && open &&
                <div className="bg-white w-[734px] h-[500px] min-h-[500px] max-h-[500px] 3xl:w-[734px] 3xl:h-[734px] 3xl:!min-h-[734px] 3xl:!max-h-[734px] rounded-md">
                    <FrameChat />
                </div>
            }
            {task && open &&
                <div className="bg-white w-[734px] h-[500px] min-h-[500px] max-h-[500px] 3xl:w-[734px] 3xl:h-[734px] 3xl:!min-h-[734px] 3xl:!max-h-[734px] rounded-md">
                    <FrameTask />
                </div>
            }
            <div className="w-auto h-auto flex justify-end items-end space-x-4">
                <AnimatePresence>
                    {open && (
                        <div className="flex space-x-4">
                            {task == false ?
                                <motion.div
                                    initial={{
                                        opacity: 0.2,
                                        x: 50,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 30
                                    }}
                                    layout
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        x: 100,
                                    }}>
                                    < TaskButton click={handleTaskButtonClick} />
                                </motion.div>
                                :
                                <>

                                </>
                            }
                            {chat == false ?
                                <motion.div
                                    initial={{
                                        opacity: 0.2,
                                        x: 50,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 30
                                    }}
                                    layout
                                    animate={{
                                        opacity: 1,
                                        x: 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        x: 100,
                                    }}
                                >
                                    <InboxButton click={handleChatButtonClick} />
                                </motion.div>
                                :
                                <>

                                </>
                            }
                        </div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {task || chat && open ?
                        <AnimatePresence>
                            <motion.div
                                initial={{
                                    opacity: 0.2,
                                    x: -100,
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
                                    x: -100,
                                }}>
                                {task && open &&
                                    < TaskButton hoverOff={true} click={() => setTask(!task)} />
                                }
                                {chat && open &&
                                    < InboxButton hoverOff click={() => setChat(!chat)} />
                                }
                            </motion.div>
                        </AnimatePresence>
                        :
                        <motion.div
                            initial={{
                                opacity: 0,
                                x: 0,
                            }}
                            transition={{
                                duration: 1,
                            }}
                            animate={{
                                opacity: 2,
                                x: 0,
                            }}
                            layout
                            exit={{
                                opacity: 0.5,
                                x: 0,
                            }}>
                            <FlashButton click={() => setOpen(!open)} />
                        </motion.div>
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}
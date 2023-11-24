import Navbar from "../Base/Navbar";
import Sidebar from "../Base/Sidebar";
import QuickButton from "../Mechanics/QuickButton";

export default function UserLayout({ children }) {
    return (
        <div className="w-full flex h-screen relative bg-[#333333]">
            <Sidebar />
            <div className="flex-grow h-screen overflow-y-auto ">
                <Navbar />
                <div className=" w-full p-2">
                    {children}
                </div>
            </div>
            <QuickButton />
        </div>
    )
}
import { FaThLarge, FaClipboardList, FaHeadphones } from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className="flex h-screen w-72 flex-col bg-white px-6 py-8 shadow-lg">

            {/* Logo */}
            <div className="mb-10">
                <h1 className="text-5xl font-extrabold text-gray-900 tracking-wide">
                    Sedap <span className="text-green-500">.</span>
                </h1>
                <p className="text-sm text-gray-400 mt-1">
                    Modern Admin Dashboard
                </p>
            </div>

            {/* Menu */}
            <div className="flex flex-col space-y-2">

                {/* Active Menu */}
                <div className="flex items-center space-x-3 px-4 py-3 rounded-xl font-semibold cursor-pointer">
                    <FaThLarge />
                    <span>Dashboard</span>
                </div>

                {/* Menu 2 */}
                <div className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-green-600 cursor-pointer transition">
                    <FaClipboardList />
                    <span>Orders</span>
                </div>

                {/* Menu 3 */}
                <div className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-green-600 cursor-pointer transition">
                    <FaHeadphones />
                    <span>Customers</span>
                </div>

            </div>

            {/* Footer Card */}
            <div className="mt-auto">
                <div className="bg-green-500 text-white p-4 rounded-xl shadow-md flex items-center justify-between">
                    <div>
                        <p className="text-sm leading-tight">
                            Please organize your menus through button below!
                        </p>

                        <button className="mt-3 bg-white text-gray-700 px-3 py-2 rounded-md text-sm flex items-center space-x-2">
                            <span>+</span>
                            <span>Add Menus</span>
                        </button>
                    </div>

                    <img
                        src="https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/7693/production/_133355303_jude_bellingham_real_madrid_away.jpg"
                        className="w-14 h-14 rounded-full"
                        alt="avatar"
                    />
                </div>

                {/* Footer Text */}
                <div className="mt-6 text-xs text-gray-400">
                    <p className="font-semibold">
                        Sedap Restaurant Admin Dashboard
                    </p>
                    <p>© 2025 All Right Reserved</p>
                </div>
            </div>

        </div>
    );
}
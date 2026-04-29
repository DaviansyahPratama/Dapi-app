import { FaShoppingCart, FaTruck, FaBan, FaDollarSign } from "react-icons/fa";
import PageHeader from "../components/PageHeader";

export default function Dashboard() {
    return (
        <div className="bg-gray-100 min-h-screen p-5">
            <PageHeader />

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5 mt-5">
                
                {/* Orders */}
                <div className="flex items-center bg-white p-5 rounded-xl shadow">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white">
                        <FaShoppingCart />
                    </div>
                    <div className="ml-4">
                        <h2 className="text-lg font-bold">75</h2>
                        <p className="text-gray-400 text-sm">Total Orders</p>
                    </div>
                </div>

                {/* Delivered */}
                <div className="flex items-center bg-white p-5 rounded-xl shadow">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white">
                        <FaTruck />
                    </div>
                    <div className="ml-4">
                        <h2 className="text-lg font-bold">175</h2>
                        <p className="text-gray-400 text-sm">Total Delivered</p>
                    </div>
                </div>

                {/* Canceled */}
                <div className="flex items-center bg-white p-5 rounded-xl shadow">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-red-500 text-white">
                        <FaBan />
                    </div>
                    <div className="ml-4">
                        <h2 className="text-lg font-bold">40</h2>
                        <p className="text-gray-400 text-sm">Total Canceled</p>
                    </div>
                </div>

                {/* Revenue */}
                <div className="flex items-center bg-white p-5 rounded-xl shadow">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-400 text-white">
                        <FaDollarSign />
                    </div>
                    <div className="ml-4">
                        <h2 className="text-lg font-bold">Rp.128</h2>
                        <p className="text-gray-400 text-sm">Total Revenue</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
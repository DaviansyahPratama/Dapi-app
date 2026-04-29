import PageHeader from "../components/PageHeader";
import orders from "../data/orders";

export default function Orders() {
    const data = orders.slice(0, 15);

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            {/* HEADER */}
            <PageHeader
                title="Orders"
                breadcrumb={["Dashboard", "Orders"]}
            >
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg">
                    Add Order
                </button>
            </PageHeader>

            {/* TABLE */}
            <div className="mt-6 bg-white rounded-xl shadow-sm border overflow-hidden">
                <table className="w-full text-sm text-left">

                    <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                        <tr>
                            <th className="p-4">Order ID</th>
                            <th>Customer</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className="border-t hover:bg-gray-50 transition">
                                <td className="p-4 font-medium">{item.id}</td>
                                <td>{item.customer}</td>

                                <td>
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium
                                        ${
                                            item.status === "Completed"
                                                ? "bg-green-100 text-green-700"
                                                : item.status === "Pending"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-red-100 text-red-700"
                                        }`}
                                    >
                                        {item.status}
                                    </span>
                                </td>

                                <td>${item.total}</td>
                                <td>{item.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}
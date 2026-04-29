import PageHeader from "../components/PageHeader";
import orders from "../data/orders";

export default function Orders() {
    const data = orders.slice(0, 15);

    return (
        <div className="min-h-screen bg-gray-50 p-6">

            {/* HEADER */}
            <PageHeader
                title="Orders"
                breadcrumb={["Dashboard", "Orders"]}
            >
                <button className="bg-emerald-500 hover:bg-emerald-600 transition text-white px-4 py-2 rounded-lg shadow-sm">
                    + Add Order
                </button>
            </PageHeader>

            {/* TABLE CARD */}
            <div className="mt-6 bg-white rounded-2xl shadow-sm border overflow-hidden">

                <table className="w-full text-sm text-left">

                    {/* HEADER */}
                    <thead className="bg-gray-50 text-gray-500 uppercase text-xs tracking-wider">
                        <tr>
                            <th className="p-4">Order ID</th>
                            <th>Customer</th>
                            <th>Status</th>
                            <th>Total</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    {/* BODY */}
                    <tbody className="divide-y divide-gray-100">

                        {data.map((item) => (
                            <tr
                                key={item.id}
                                className="hover:bg-gray-50 transition"
                            >

                                {/* ORDER ID */}
                                <td className="p-4 font-semibold text-gray-700">
                                    {item.id}
                                </td>

                                {/* CUSTOMER */}
                                <td className="text-gray-800 font-medium">
                                    {item.customer}
                                </td>

                                {/* STATUS */}
                                <td>
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold
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

                                {/* TOTAL */}
                                <td className="text-gray-700 font-medium">
                                    Rp {Number(item.total).toLocaleString()}
                                </td>

                                {/* DATE */}
                                <td className="text-gray-500">
                                    {item.date}
                                </td>

                            </tr>
                        ))}

                    </tbody>
                </table>

            </div>

        </div>
    );
}
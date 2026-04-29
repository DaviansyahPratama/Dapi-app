import PageHeader from "../components/PageHeader";
import customers from "../data/customers";

export default function Customer() {
    const data = customers.slice(0, 15);

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            {/* HEADER */}
            <PageHeader
                title="Customers"
                breadcrumb={["Dashboard", "Customers"]}
            >
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                    Add Customer
                </button>
            </PageHeader>

            {/* TABLE */}
            <div className="mt-6 bg-white rounded-xl shadow-sm border overflow-hidden">
                <table className="w-full text-sm text-left">

                    <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                        <tr>
                            <th className="p-4">ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Loyalty</th>
                        </tr>
                    </thead>

                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id} className="border-t hover:bg-gray-50 transition">
                                <td className="p-4 font-medium">{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>

                                <td>
                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-medium
                                        ${
                                            item.loyalty === "Gold"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : item.loyalty === "Silver"
                                                ? "bg-gray-200 text-gray-700"
                                                : "bg-orange-100 text-orange-700"
                                        }`}
                                    >
                                        {item.loyalty}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>

        </div>
    );
}
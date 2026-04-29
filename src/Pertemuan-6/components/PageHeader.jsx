export default function PageHeader() {
    return (
        <div
            id="pageheader-container"
            className="flex items-center justify-between p-4"
        >
            <div id="pageheader-left" className="flex flex-col">
                <span
                    id="page-title"
                    className="text-3xl font-semibold text-gray-900"
                >
                    Dashboard
                </span>

                <div
                    id="breadcrumb-links"
                    className="flex items-center space-x-2 text-sm text-gray-400 mt-1"
                >
                    <span id="breadcrumb-home">Dashboard</span>
                    <span id="breadcrumb-separator">/</span>
                    <span id="breadcrumb-current" className="text-gray-500">
                        Order List
                    </span>
                </div>
            </div>

            <div id="action-button">
                <button
                    id="add-button"
                    className="bg-hijau text-white px-4 py-2 rounded-lg"
                >
                    Add Button
                </button>
            </div>
        </div>
    );
}
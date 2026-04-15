// import frameworkData from "./framework.json";

export default function FrameworkList() {
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
        {frameworkData.map((item) => (
          <div key={item.id} className="border p-5 rounded-xl shadow-sm bg-white border-gray-200 flex flex-col justify-between">
            <div>
              {/* Nama Framework */}
              <h2 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h2>
              
              {/* Deskripsi */}
              <p className="text-gray-600 text-sm mb-3 italic">"{item.description}"</p>
              
              {/* Info Developer & Tahun (Akses ke item.details) */}
              <div className="text-gray-500 text-xs mb-1">
                <p>Developed by: <span className="font-semibold">{item.details.developer}</span></p>
                <p>Released: {item.details.releaseYear}</p>
              </div>

              {/* Link Website */}
              <a 
                href={item.details.officialWebsite} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 text-xs font-medium hover:underline inline-block mb-4"
              >
                Visit Official Website →
              </a>
            </div>

            {/* Bagian Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {item.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-blue-50 text-blue-600 border border-blue-100 px-2 py-1 text-[10px] font-bold rounded-md uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
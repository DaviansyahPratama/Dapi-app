import React, { useState } from "react";
import frameworkData from "./framework.json";

export default function FrameworkList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

  // Mengambil daftar tag unik untuk dropdown
  const allTags = [...new Set(frameworkData.flatMap((f) => f.tags))];

  const filteredFrameworks = frameworkData.filter((framework) => {
    const matchesSearch =
      framework.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      framework.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesTag = selectedTag ? framework.tags.includes(selectedTag) : true;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search framework..."
            className="flex-1 p-2 border border-gray-300 rounded shadow-sm outline-none focus:ring-2 focus:ring-blue-400"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <select
            className="w-full md:w-48 p-2 border border-gray-300 rounded shadow-sm outline-none"
            onChange={(e) => setSelectedTag(e.target.value)}
          >
            <option value="">All Tags</option>
            {allTags.map((tag, index) => (
              <option key={index} value={tag}>{tag}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFrameworks.length > 0 ? (
            filteredFrameworks.map((item) => (
              <div key={item.id} className="border p-5 rounded-xl shadow-md bg-white border-gray-100 flex flex-col justify-between">
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-1">{item.name}</h2>
                  <p className="text-gray-600 text-sm mb-3 italic">"{item.description}"</p>
                  <div className="text-gray-500 text-xs mb-1">
                    <p>Developed by: <span className="font-semibold text-gray-700">{item.details.developer}</span></p>
                    <p>Released: {item.details.releaseYear}</p>
                  </div>
                  <a href={item.details.officialWebsite} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs font-medium hover:underline inline-block mb-4">
                    Visit Official Website →
                  </a>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="bg-blue-50 text-blue-600 border border-blue-100 px-2 py-0.5 text-[10px] font-bold rounded-md uppercase">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-400 py-10">No frameworks found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
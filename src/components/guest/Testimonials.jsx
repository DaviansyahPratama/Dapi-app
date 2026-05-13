import testimonials from "../../data/testimonials";

export default function Testimonials() {
  return (
    <section
      id="review"
      className="py-24 px-10 bg-[#070B1A]"
    >
      
      {/* Title */}
      <div className="text-center mb-16">

        <h2 className="text-5xl font-bold text-white">
          Review Pelanggan
        </h2>

        <p className="text-gray-400 mt-4">
          Apa kata pelanggan tentang Foodies
        </p>

      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {testimonials.map((item) => (
          <div
            key={item.id}
            className="bg-[#111827] p-6 rounded-3xl border border-gray-800 hover:border-orange-400 hover:scale-105 transition-all duration-300 shadow-lg"
          >

            {/* User */}
            <div className="flex items-center gap-4 mb-5">

              <img
                src={item.avatar}
                alt={item.name}
                className="w-16 h-16 rounded-full border-2 border-orange-400"
              />

              <div>
                <h3 className="text-xl font-bold text-white">
                  {item.name}
                </h3>

                <p className="text-orange-400 text-sm">
                  Foodies Customer
                </p>
              </div>

            </div>

            {/* Review */}
            <p className="text-gray-300 leading-7">
              "{item.review}"
            </p>

          </div>
        ))}

      </div>
    </section>
  );
}
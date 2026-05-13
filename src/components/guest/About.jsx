export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-10 bg-[#0B1120]"
    >

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>

          <span className="text-orange-400 uppercase tracking-widest">
            About Foodies
          </span>

          <h2 className="text-5xl font-bold text-white mt-4 leading-tight">
            Nikmati Nasi Goreng Premium Dengan
            <span className="text-orange-400"> Cita Rasa Nusantara</span>
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Foodies adalah platform kuliner modern yang menghadirkan
            berbagai menu nasi goreng khas Indonesia dengan rasa autentik
            dan kualitas premium.
          </p>

          <p className="text-gray-400 mt-4 leading-8">
            Kami menyediakan layanan pemesanan makanan cepat,
            tampilan modern, serta pengalaman terbaik untuk
            pelanggan pecinta kuliner nusantara.
          </p>

          {/* Features */}
          <div className="mt-8 space-y-4">

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-orange-400"></div>

              <span className="text-white">
                Bahan premium & berkualitas
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-orange-400"></div>

              <span className="text-white">
                Pengiriman cepat & aman
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-orange-400"></div>

              <span className="text-white">
                Harga terjangkau
              </span>
            </div>

          </div>

        </div>

        {/* Right Image */}
        <div className="relative">

          {/* Blur Effect */}
          <div className="absolute inset-0 bg-orange-500 opacity-20 blur-3xl rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1512058564366-18510be2db19"
            alt="Nasi Goreng"
            className="relative rounded-3xl shadow-2xl object-cover w-full h-[500px]"
          />

        </div>

      </div>
    </section>
  );
}
export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center text-center px-5 relative overflow-hidden bg-[#070B1A]"
    >
      
      {/* Blur Background */}
      <div className="absolute w-[500px] h-[500px] bg-orange-500 opacity-20 blur-3xl rounded-full top-0 left-0"></div>

      <div className="absolute w-[500px] h-[500px] bg-red-500 opacity-20 blur-3xl rounded-full bottom-0 right-0"></div>

      <div className="relative z-10 max-w-3xl">
        
        <p className="text-orange-400 uppercase tracking-widest mb-4">
          Foodies Restaurant
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Nikmati
          <span className="text-orange-400"> Nasi Goreng </span>
          Terbaik
        </h1>

        <p className="text-gray-300 mt-6 text-lg">
          Nasi goreng khas nusantara dengan cita rasa premium
          dan tampilan modern.
        </p>

        <button className="mt-8 px-8 py-4 bg-orange-400 text-black rounded-xl font-bold hover:scale-105 transition">
          Pesan Sekarang
        </button>
      </div>
    </section>
  );
}
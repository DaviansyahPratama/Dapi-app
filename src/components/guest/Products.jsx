import products from "../../data/products";

export default function Products() {
  return (
    <section
      id="menu"
      className="py-20 px-10 bg-[#0B1120]"
    >
      
      <h2 className="text-4xl font-bold text-center text-orange-400 mb-14">
        Menu Favorit
      </h2>

      <div className="grid md:grid-cols-4 gap-8">
        
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-[#111827] rounded-2xl overflow-hidden hover:scale-105 transition"
          >
            
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-52 object-cover"
            />

            <div className="p-5">
              
              <h3 className="text-xl font-bold mb-2">
                {item.name}
              </h3>

              <p className="text-orange-400 font-semibold">
                {item.price}
              </p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
export default function ProductIngredientLayout() {
  const ingredients = [
    {
      id: "01",
      title: "Alum",
      image: "/Ingredient_1.webp",
      alt: "Close up of glowing skin",
      description:
        "A naturally occurring mineral crystal that forms the core of Dr. Deodrant's formula. Alum works by creating an invisible layer on the skin that stops odor-causing bacteria from thriving, keeping you feeling fresh and clean all day — without blocking your pores.",
    },
    {
      id: "02",
      title: "Acerola Extract",
      image: "/Ingredient_2.webp",
      alt: "Natural ingredient composition",
      description:
        "Derived from one of nature's richest sources of Vitamin C, Acerola Extract helps brighten and even out the delicate underarm skin. Its antioxidant properties refresh and nourish the skin, making it a powerful ally against dullness and dark underarms.",
    },
    {
      id: "03",
      title: "Kiwi Fruit Extract",
      image: "/Ingredient_3.webp",
      alt: "Kiwi fruit extract concept",
      description:
        "Packed with antioxidants, Kiwi Fruit Extract works to soothe, refresh, and deeply nourish the underarm area. It helps combat oxidative stress on the skin, leaving your underarms feeling soft, calm, and revitalized with every use.",
    },
    {
      id: "05",
      title: "Vitamin E",
      image: "/Ingredient_5.webp",
      alt: "Vitamin E skin care visual",
      description:
        "Known for its deeply moisturizing and protective properties, Vitamin E helps keep the underarm skin soft, supple, and healthy-looking. It acts as a skin barrier, locking in moisture and shielding the skin from daily wear — making it an essential part of our gentle, nourishing formula.",
    },
  ];

  return (
    // 1. Reduced lg:px-24 to xl:px-16 to free up screen edge space
    <section className="bg-[#F5FBFF] px-6 py-24 md:py-32 md:px-16 xl:px-16 font-sans w-full">
      {/* 2. Changed max-w-350 to an explicit wide max-width like max-w-[1600px] */}
      <div className="max-w-[1600px] mx-auto w-full">
        <h2 className="text-5xl md:text-[3rem] lg:text-[4rem] font-medium text-[#313131] mb-12 md:mb-16 tracking-tight">
          Ingredients
        </h2>

        {/* 3. Reduced gap on extra large screens slightly to allow wider cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10 xl:gap-8">
          {ingredients.map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-2xl md:rounded-[2rem] bg-[#F7FBFF]/75 backdrop-blur-sm border border-[#313131]/10 p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] group"
            >
              <div className="w-full aspect-4/5 md:aspect-square lg:aspect-4/5 overflow-hidden rounded-2xl md:rounded-[2rem] mb-6 md:mb-8 bg-[#e4e7dd]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>

              <div className="flex justify-between items-end pb-3 mb-4 border-b border-[#313131]/20">
                <h3 className="text-lg md:text-2xl font-medium text-[#313131]">{item.title}</h3>
                <span className="text-lg md:text-xl font-medium text-[#313131]">{item.id}</span>
              </div>

              <p className="text-sm md:text-base font-inter text-justify leading-relaxed text-[#4a4a4a]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
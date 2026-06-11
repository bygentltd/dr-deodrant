export default function IngredientsContent() {
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
      id: "04",
      title: "Vitamin C",
      image: "/Ingredient_4.webp",
      alt: "Vitamin C care visual",
      description:
        "A brightening powerhouse, Vitamin C helps visibly lighten dark underarms over time while protecting the skin from environmental damage. It promotes a more even skin tone and supports healthy, radiant-looking skin in the underarm area.",
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
    <section className="bg-[#F5FBFF] px-4 md:py-32 md:px-16 lg:px-24 font-sans w-full">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl md:text-[3rem] lg:text-[4rem] font-medium text-[#003286] mb-8 md:mb-16 tracking-tight text-center md:text-left">
          Ingredients
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-6 md:gap-8 lg:gap-12 xl:*:col-span-2 xl:[&>*:nth-child(4)]:col-start-2 xl:[&>*:nth-child(5)]:col-start-4">
          {ingredients.map((item) => (
            <div
              key={item.id}
              className="flex flex-col rounded-2xl md:rounded-[2rem] bg-[#F7FBFF]/75 backdrop-blur-sm border border-[#313131]/10 p-5 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] group"
            >
              <div className="w-full aspect-video sm:aspect-[4/3] md:aspect-square lg:aspect-4/5 overflow-hidden rounded-xl md:rounded-[2rem] mb-4 md:mb-8 bg-[#e4e7dd]">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>

              <div className="flex justify-between items-end pb-3 mb-3 md:mb-4 border-b border-[#313131]/20">
                <h3 className="text-base sm:text-lg md:text-2xl font-medium text-[#313131]">{item.title}</h3>
                <span className="text-base sm:text-lg md:text-xl font-medium text-[#313131]">{item.id}</span>
              </div>

              <p className="text-[14px] md:text-base font-inter text-left md:text-justify leading-relaxed text-[#4a4a4a]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

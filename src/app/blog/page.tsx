"use client";

import Link from "next/link";
import { useRevealOnScroll } from "@/hooks/use-reveal";

export default function BlogGrid() {
  useRevealOnScroll();
  const blogGridTopOffset = "pt-28 md:pt-32";

  const posts = [
    {
      id: "1",
      title: "Why fewer ingredients work better.",
      category: "Trends",
      date: "Mar 14, 2026",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=1600&q=80",
      featured: true,
    },
    {
      id: "2",
      title: "Skincare science vs. trend cycles.",
      category: "Trends",
      date: "Feb 8, 2026",
      image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?auto=format&fit=crop&w=1400&q=80",
      featured: false,
    },
    {
      id: "3",
      title: "The foundation of healthy skin.",
      category: "Insights",
      date: "Jan 3, 2026",
      image: "https://images.unsplash.com/photo-1526758097130-bab247274f58?auto=format&fit=crop&w=1400&q=80",
      featured: false,
    },
    {
      id: "4",
      title: "The truth about ingredient percentages.",
      category: "Insights",
      date: "Mar 14, 2026",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=80",
      featured: false,
    },
    {
      id: "5",
      title: "My skin transformed when I used less.",
      category: "Story",
      date: "Mar 14, 2026",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=80",
      featured: false,
    },
  ];

  return (
    <div className="w-full bg-[#EAF5FF]">
    <section className={`${blogGridTopOffset} pb-24 px-6 md:px-12 lg:px-16 max-w-350 mx-auto bg-[#EAF5FF]`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 reveal-on-scroll">
        <div className="max-w-2xl">
          <div className="inline-block px-3 py-1 bg-gray-200/50 rounded-full text-[10px] font-bold uppercase tracking-widest text-gray-700 mb-6">
            Our Journal
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-gray-900 leading-tight">
            Beyond your skin.
          </h1>
        </div>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {posts.map((post, index) => (
          <Link
            href={`/blog/${post.id}`}
            key={post.id}
            className={`relative group overflow-hidden rounded-3xl block reveal-on-scroll ${
              post.featured ? "md:col-span-2 h-100 md:h-150" : "col-span-1 h-87.5 md:h-112.5"
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>

            <div className="absolute top-6 left-6 flex items-center justify-between w-[calc(100%-3rem)]">
              <span className="bg-[#EAF5FF]/90 backdrop-blur-sm text-gray-900 px-4 py-1.5 rounded-full text-xs font-medium">
                {post.category}
              </span>
              <span className="material-symbols-outlined text-[#EAF5FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                arrow_outward
              </span>
            </div>

            <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 pr-6">
              <p className="text-[#EAF5FF]/80 text-xs font-medium tracking-wider mb-2">
                {post.date}
              </p>
              <h3 className={`font-serif text-[#EAF5FF] leading-tight ${post.featured ? "text-3xl md:text-5xl max-w-3xl" : "text-2xl md:text-3xl max-w-md"}`}>
                {post.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
    </div>
  );
}

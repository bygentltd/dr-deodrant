"use client";

import Link from "next/link";

import { useRevealOnScroll } from "@/hooks/use-reveal";
import { blogPosts } from "@/lib/blog-posts";

export default function BlogGrid() {
  useRevealOnScroll();
  const blogGridTopOffset = "pt-28 md:pt-32";
  const arrangedPosts = [
    blogPosts[2], // big
    blogPosts[1], // left
    blogPosts[0], // right
  ];
  return (
    <div className="w-full bg-[#F5FBFF]">
    <section className={`${blogGridTopOffset} pb-24 px-6 md:px-12 lg:px-16 max-w-350 mx-auto bg-[#F5FBFF]`}>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 md:mb-16 reveal-on-scroll">
        <div className="max-w-2xl">
          <div className="inline-block px-3 py-1 bg-[#003286] rounded-full text-[10px] font-bold uppercase tracking-widest text-white mb-4 md:mb-6">
            Our Journal
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl text-[#003286] leading-tight">
            Beyond your skin.
          </h1>
        </div>
        
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {arrangedPosts.map((post, index) => (
          <Link
            href={`/blog/${post.slug}`}
            key={post.slug}
            className={`relative group overflow-hidden rounded-2xl md:rounded-3xl block reveal-on-scroll ${
              post.featured ? "md:col-span-2 h-[280px] sm:h-[400px] md:h-[600px]" : "col-span-1 h-[260px] sm:h-[350px] md:h-[450px]"
            }`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            <img
              src={post.heroImage}
              alt={post.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-90"></div>

            <div className="absolute top-4 left-4 md:top-6 md:left-6 flex items-center justify-between w-[calc(100%-2rem)] md:w-[calc(100%-3rem)]">
              <span className="bg-[#F5FBFF]/90 backdrop-blur-sm text-[#003286] px-3 md:px-4 py-1 md:py-1.5 rounded-full text-[10px] md:text-xs font-medium">
                {post.category}
              </span>
              <span className="material-symbols-outlined text-[#F5FBFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                arrow_outward
              </span>
            </div>

            <div className="absolute bottom-4 left-4 pr-4 md:bottom-10 md:left-10 md:pr-6">
              <p className="text-[#F5FBFF]/80 text-[10px] md:text-xs font-medium tracking-wider mb-1 md:mb-2">
                {post.date}
              </p>
              <h3 className={`text-[#F5FBFF] leading-tight ${index === 0 ? "text-2xl sm:text-3xl md:text-5xl max-w-3xl" : "text-xl sm:text-2xl md:text-3xl max-w-md"}`}>
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

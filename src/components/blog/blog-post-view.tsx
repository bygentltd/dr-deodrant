"use client";

import Link from "next/link";

import { useRevealOnScroll } from "@/hooks/use-reveal";
import type { BlogPost } from "@/lib/blog-posts";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

type BlogPostViewProps = {
  post: BlogPost;
};

export default function BlogPostView({ post }: BlogPostViewProps) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);
  return (
    <article className="bg-[#F5FBFF] min-h-screen pb-16 md:pb-24">
      <div className="relative w-full h-[45vh] sm:h-[50vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <img
          src={post.heroImage}
          alt={post.heroAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-6 mt-10 md:mt-16">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 md:mb-6">
            <span className="text-[#F5FBFF]/80 text-[11px] sm:text-sm font-medium tracking-wider">{post.date}</span>
            <span className="bg-[#F5FBFF]/20 backdrop-blur-md text-[#F5FBFF] px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
              {post.category}
            </span>
            <span className="text-[#F5FBFF]/70 text-[11px] sm:text-sm font-medium">{post.author}</span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-6xl lg:text-7xl font-inter text-[#F5FBFF] max-w-5xl leading-tight mb-4 md:mb-6">
            {post.title}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#F5FBFF]/90 font-medium max-w-2xl">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-5 md:px-8 pt-12 md:pt-20">
        <div className="flex items-center justify-between gap-4 mb-8 md:mb-10 text-xs sm:text-sm text-gray-500">
          <Link href="/blog" className="font-medium text-gray-700 hover:text-[#003286] transition-colors">
            Back to Journal
          </Link>
          <span>{post.category}</span>
        </div>

        <div className="space-y-12 md:space-y-16">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-5 md:space-y-6">
              <div className="space-y-2 md:space-y-3">
                {section.eyebrow ? (
                  <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.3em] text-[#1D4F5D]/70">
                    {section.eyebrow}
                  </p>
                ) : null}
                <h2 className="text-lg sm:text-xl md:text-4xl font-inter text-[#003286] leading-tight">
                  {section.heading}
                </h2>
              </div>

              {section.image ? (
                <div>
                  <img
                    src={section.image.src}
                    alt={section.image.alt}
                    className="w-full h-[240px] sm:h-[350px] md:h-auto rounded-2xl md:rounded-3xl shadow-sm object-cover"
                  />
                </div>
              ) : null}

              <div className="space-y-4 md:space-y-5 text-[15px] sm:text-base md:text-lg text-gray-700 leading-relaxed font-light">
                {section.blocks.map((block, blockIndex) => {
                  if (block.type === "paragraph") {
                    return (
                      <p 
                        key={`${section.heading}-${blockIndex}`} 
                        className="text-left sm:text-justify"
                      >
                        {block.text}
                      </p>
                    );
                  }

                  if (block.type === "quote") {
                    return (
                      <blockquote
                        key={`${section.heading}-${blockIndex}`}
                        className="border-l-4 border-[#1D4F5D]/20 pl-6 py-1 text-[#003286] font-medium italic text-left"
                      >
                        {block.text}
                      </blockquote>
                    );
                  }

                  return (
                    <ul
                      key={`${section.heading}-${blockIndex}`}
                      className="space-y-3 list-disc pl-6 text-justify"
                    >
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
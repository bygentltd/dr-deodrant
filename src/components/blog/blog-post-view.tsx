"use client";

import Link from "next/link";

import { useRevealOnScroll } from "@/hooks/use-reveal";
import type { BlogPost } from "@/lib/blog-posts";

type BlogPostViewProps = {
  post: BlogPost;
};

export default function BlogPostView({ post }: BlogPostViewProps) {
  useRevealOnScroll();

  return (
    <article className="bg-[#eaf5ff] min-h-screen pb-24">
      <div className="relative w-full h-[60vh] md:h-[75vh] flex items-center justify-center overflow-hidden">
        <img
          src={post.heroImage}
          alt={post.heroAlt}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 flex flex-col items-center text-center px-6 mt-16 reveal-on-scroll">
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <span className="text-[#EAF5FF]/80 text-sm font-medium tracking-wider">{post.date}</span>
            <span className="bg-[#EAF5FF]/20 backdrop-blur-md text-[#EAF5FF] px-3 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
            <span className="text-[#EAF5FF]/70 text-sm font-medium">{post.author}</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#EAF5FF] max-w-5xl leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-[#EAF5FF]/90 font-medium max-w-2xl">
            {post.excerpt}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 pt-20 reveal-on-scroll">
        <div className="flex items-center justify-between gap-4 mb-10 text-sm text-gray-500">
          <Link href="/blog" className="font-medium text-gray-700 hover:text-gray-900 transition-colors">
            Back to Journal
          </Link>
          <span>{post.category}</span>
        </div>

        <div className="space-y-16">
          {post.sections.map((section) => (
            <section key={section.heading} className="space-y-6">
              <div className="space-y-3">
                {section.eyebrow ? (
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1D4F5D]/70">
                    {section.eyebrow}
                  </p>
                ) : null}
                <h2 className="text-3xl md:text-4xl font-serif text-gray-900 leading-tight">
                  {section.heading}
                </h2>
              </div>

              {section.image ? (
                <div>
                  <img
                    src={section.image.src}
                    alt={section.image.alt}
                    className="w-full rounded-3xl shadow-sm object-cover"
                  />
                </div>
              ) : null}

              <div className="space-y-5 text-base md:text-lg text-gray-700 leading-relaxed font-light">
                {section.blocks.map((block, blockIndex) => {
                  if (block.type === "paragraph") {
                    return <p key={`${section.heading}-${blockIndex}`}>{block.text}</p>;
                  }

                  if (block.type === "quote") {
                    return (
                      <blockquote
                        key={`${section.heading}-${blockIndex}`}
                        className="border-l-4 border-[#1D4F5D]/20 pl-6 py-1 text-gray-900 font-medium italic"
                      >
                        {block.text}
                      </blockquote>
                    );
                  }

                  return (
                    <ul
                      key={`${section.heading}-${blockIndex}`}
                      className="space-y-3 list-disc pl-6"
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
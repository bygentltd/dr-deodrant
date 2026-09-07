"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { Volume2 } from "lucide-react";

// GraphQL Query for Metaobjects of type "Video-1"
export const GET_VIDEO1_REELS_QUERY = `
  query getReelVideos {
    metaobjects(type: "Video-1", first: 10) {
      nodes {
        id
        handle
        fields {
          key
          value
          reference {
            ... on Video {
              id
              sources {
                url
                mimeType
                format
              }
            }
            ... on Product {
              id
              title
              handle
              featuredImage {
                url
                altText
              }
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
              }
              variants(first: 1) {
                nodes {
                  id
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export interface ReelCardData {
  id: string;
  videoUrl: string;
  title: string;
  price: string;
  productImage: string;
  productHandle?: string;
  variantId?: string;
}

// Clean fallback items for Dr. Deodorant (Zero Phitku URLs)
const FALLBACK_REELS: ReelCardData[] = [
  {
    id: "reel-aloe-vera",
    title: "Aloe Vera Roll-On",
    price: "Rs. 699.00",
    videoUrl: "/video/Untitled.mp4",
    productImage: "/Step_2.webp",
    productHandle: "aloe-vera-deodorant",
  },
  {
    id: "reel-natural",
    title: "Natural Crystal",
    price: "Rs. 699.00",
    videoUrl: "/video/Untitled.mp4",
    productImage: "/Step_1.webp",
    productHandle: "natural-deodorant",
  },
  {
    id: "reel-turmeric",
    title: "Turmeric Bright",
    price: "Rs. 699.00",
    videoUrl: "/video/Untitled.mp4",
    productImage: "/Result_1.webp",
    productHandle: "turmeric-deodorant",
  },
  {
    id: "reel-charcoal",
    title: "Charcoal Pure",
    price: "Rs. 699.00",
    videoUrl: "/video/Untitled.mp4",
    productImage: "/Step_2.webp",
    productHandle: "charcoal-deodorant",
  },
];

export default function ReelsActionSection({
  domain = "drdeodrant.myshopify.com",
  storefrontAccessToken = process.env.NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
}: {
  domain?: string;
  storefrontAccessToken?: string;
}) {
  // Vercel Feature Flag: Set NEXT_PUBLIC_ENABLE_REELS="true" or NEXT_PUBLIC_REELS="true" in Vercel to show the Reels section
  const isEnabled =
    process.env.NEXT_PUBLIC_ENABLE_REELS === "true" ||
    process.env.NEXT_PUBLIC_REELS === "true" ||
    process.env.NEXT_PUBLIC_REELS_ACTIVE === "true" ||
    process.env.NEXT_PUBLIC_SHOW_REELS === "true";

  const [reels, setReels] = useState<ReelCardData[]>(FALLBACK_REELS);
  const [activeSoundId, setActiveSoundId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  if (!isEnabled) return null;

  // Fetch Metaobjects of type "Video-1" via Shopify Storefront API GraphQL
  useEffect(() => {
    if (!storefrontAccessToken) return;

    async function fetchReels() {
      setLoading(true);
      try {
        const headers: Record<string, string> = {
          "Content-Type": "application/json",
        };
        if (storefrontAccessToken) {
          headers["X-Shopify-Storefront-Access-Token"] = storefrontAccessToken;
        }

        let response = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
          method: "POST",
          headers,
          body: JSON.stringify({ query: GET_VIDEO1_REELS_QUERY }),
        });

        let json = await response.json();
        let nodes = json?.data?.metaobjects?.nodes;

        // Try lowercase handle video_1 if Video-1 returned empty
        if (!nodes || nodes.length === 0) {
          const fallbackQuery = GET_VIDEO1_REELS_QUERY.replace('type: "Video-1"', 'type: "video_1"');
          response = await fetch(`https://${domain}/api/2024-01/graphql.json`, {
            method: "POST",
            headers,
            body: JSON.stringify({ query: fallbackQuery }),
          });
          json = await response.json();
          nodes = json?.data?.metaobjects?.nodes;
        }

        if (nodes && nodes.length > 0) {
          const parsedReels: ReelCardData[] = nodes.map((node: any, idx: number) => {
            let videoUrl = "";
            let title = "Dr. Deodorant";
            let price = "Rs. 699.00";
            let productImage = "/Step_1.webp";
            let productHandle = "";
            let variantId = "";

            node.fields.forEach((field: any) => {
              if (field.key === "video" || field.key === "video_file") {
                const sources = field.reference?.sources;
                if (sources && sources.length > 0) {
                  // Pick MP4 source URL preferentially
                  const mp4Source = sources.find((s: any) => s.url.includes(".mp4")) || sources[0];
                  videoUrl = mp4Source.url;
                }
              }
              if (field.key === "title") {
                title = field.value || title;
              }
              if (field.key === "featured_product" || field.key === "product") {
                const prodRef = field.reference;
                if (prodRef) {
                  title = prodRef.title || title;
                  productHandle = prodRef.handle || "";
                  if (prodRef.featuredImage?.url) {
                    productImage = prodRef.featuredImage.url;
                  }
                  if (prodRef.priceRange?.minVariantPrice) {
                    const amt = prodRef.priceRange.minVariantPrice.amount;
                    const curr = prodRef.priceRange.minVariantPrice.currencyCode || "INR";
                    price = `${curr === "INR" ? "Rs." : curr} ${parseFloat(amt).toFixed(2)}`;
                  }
                  if (prodRef.variants?.nodes?.[0]) {
                    variantId = prodRef.variants.nodes[0].id;
                  }
                }
              }
            });

            return {
              id: node.id || `metaobject-${idx}`,
              videoUrl: videoUrl || FALLBACK_REELS[idx % FALLBACK_REELS.length].videoUrl,
              title,
              price,
              productImage,
              productHandle,
              variantId,
            };
          });

          setReels(parsedReels);
        }
      } catch (error) {
        console.error("Error fetching Video-1 metaobjects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchReels();
  }, [domain, storefrontAccessToken]);

  // Handle clicking a card to un-mute its audio and mute all others
  const toggleSound = useCallback((reelId: string) => {
    setActiveSoundId((prev) => (prev === reelId ? null : reelId));
  }, []);

  const handleMuteSelf = useCallback(() => {
    setActiveSoundId(null);
  }, []);

  // Horizontal Scroll Navigation Controls (Loops back to start at final reel)
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollContainerRef.current;
      if (scrollLeft <= 25) {
        scrollContainerRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
      } else {
        scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" });
      }
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollContainerRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 25) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="bg-[#EAF5FF] py-16 md:py-24 px-0 sm:px-6 overflow-hidden">
      <div className="max-w-[1600px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-inter font-bold text-[#003286] leading-tight px-4">
            Freshness,<br className="sm:hidden" /> From Every Angle
          </h2>

        </div>

        {/* Outer Carousel Container with Fade Mask & Navigation Arrows */}
        <div className="relative">
          {/* Left Fade Gradient Mask */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 hidden sm:block w-16 md:w-24 bg-gradient-to-r from-[#EAF5FF] via-[#EAF5FF]/80 to-transparent z-20" />

          {/* Right Fade Gradient Mask */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 hidden sm:block w-16 md:w-24 bg-gradient-to-l from-[#EAF5FF] via-[#EAF5FF]/80 to-transparent z-20" />

          {/* Left Arrow Button */}
          <button
            onClick={scrollLeft}
            aria-label="Previous Reels"
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 bg-black/70 hover:bg-black text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-2xl backdrop-blur-md transition-all transform active:scale-90 border border-white/20"
          >
            &#10094;
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={scrollRight}
            aria-label="Next Reels"
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 bg-black/70 hover:bg-black text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full shadow-2xl backdrop-blur-md transition-all transform active:scale-90 border border-white/20"
          >
            &#10095;
          </button>

          {/* Horizontal Reels Container: Start-aligned so Video #1 is 100% visible on left */}
          <div
            ref={scrollContainerRef}
            className="flex items-center gap-4 sm:gap-6 lg:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none py-4 px-6 sm:px-12 md:px-16 scroll-pl-6 sm:scroll-pl-12 justify-start scroll-smooth"
          >
            {reels.map((reel) => (
              <SingleReelCard
                key={reel.id}
                reel={reel}
                hasSound={activeSoundId === reel.id}
                onCardClick={() => toggleSound(reel.id)}
                onMuteSelf={handleMuteSelf}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SingleReelCard({
  reel,
  hasSound,
  onCardClick,
  onMuteSelf,
}: {
  reel: ReelCardData;
  hasSound: boolean;
  onCardClick: () => void;
  onMuteSelf: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasSoundRef = useRef(hasSound);
  const onMuteSelfRef = useRef(onMuteSelf);

  useEffect(() => {
    hasSoundRef.current = hasSound;
  }, [hasSound]);

  useEffect(() => {
    onMuteSelfRef.current = onMuteSelf;
  }, [onMuteSelf]);

  // Handle Mute / Unmute state changes cleanly
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !hasSound;
    if (hasSound) {
      video.play().catch(() => {});
    }
  }, [hasSound]);

  // Robust Intersection Observer to play/pause without triggering layout shifts
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.muted = !hasSoundRef.current;
            video.play().catch(() => {});
          } else {
            video.pause();
            video.currentTime = 0; // Reset frame to prevent Mac memory/layout caching bugs
            video.muted = true;
            if (hasSoundRef.current) {
              onMuteSelfRef.current();
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      onClick={onCardClick}
      className="relative flex-shrink-0 w-[80vw] sm:w-[280px] md:w-[300px] lg:w-[310px] xl:w-[330px] h-[480px] lg:h-[540px] xl:h-[570px] aspect-[9/16] lg:aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl bg-black group snap-start sm:snap-center border-4 border-[#EAF5FF] cursor-pointer select-none transition-transform duration-300 hover:scale-[1.02] [transform:translateZ(0)]"
      style={{ transform: "translateZ(0)" }}
    >
      {/* Video Element - NOTE: autoPlay attribute is completely removed */}
      {reel.videoUrl && (
        <video
          ref={videoRef}
          src={reel.videoUrl}
          muted={!hasSound}
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover pointer-events-none absolute inset-0"
        />
      )}

      {/* Sound Status Indicator Badge */}
      {hasSound && (
        <div className="absolute top-4 right-4 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCardClick();
            }}
            className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20 shadow-md hover:bg-black/80 transition-all"
          >
            <Volume2 size={15} className="text-blue-400 animate-pulse" />
          </button>
        </div>
      )}

      {/* Bottom Product Bar (Navigates to Product Page on Click) */}
      <Link
        href={reel.productHandle ? `/shop/original` : `/shop/original`}
        onClick={(e) => e.stopPropagation()}
        className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-[1.2rem] p-2.5 flex items-center justify-between shadow-xl z-20 transition-all duration-300 hover:bg-white group/btn"
      >
        {/* Left Product Thumbnail & Info */}
        <div className="flex items-center gap-2.5 min-w-0">
          <img
            src={reel.productImage}
            alt={reel.title}
            className="w-10 h-10 rounded-lg object-cover bg-neutral-100 flex-shrink-0 border border-neutral-200"
          />
          <div className="min-w-0">
            <h4 className="text-xs sm:text-sm font-bold text-gray-900 truncate leading-tight font-inter">
              {reel.title}
            </h4>
            <p className="text-[11px] font-medium text-gray-600 mt-0.5">
              {reel.price}
            </p>
          </div>
        </div>

        {/* Right ADD Button */}
        <span className="flex-shrink-0 bg-black group-hover/btn:bg-neutral-800 text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider transition-all duration-200 transform active:scale-95 shadow-md">
          ADD
        </span>
      </Link>
    </div>
  );
}

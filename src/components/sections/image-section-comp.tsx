"use client";

interface ImageSectionCompProps {
  src: string;
  alt?: string;
}

export default function ImageSectionComp({
  src,
  alt = "How to use Dr. Deodrant crystal deodorant",
}: ImageSectionCompProps) {
  return (
    <section className="bg-[#F5FBFF]">
      <div className="w-full">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
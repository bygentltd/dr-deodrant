import Image from "next/image";
import { Check } from "lucide-react";

export function CertificateSection() {
    return (
        <section className="py-12 sm:py-16 md:py-24 bg-[#eaf5ff] relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12 md:gap-16">
                    {/* Left: Certificate Image */}
                    <div className="w-full md:w-1/2 flex justify-center order-1 px-4 sm:px-0">
                        <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-lg aspect-[4/5] sm:aspect-[3/4] md:aspect-[2/3]">
                            <Image
                                src="/Certificate.webp"
                                alt="Dr. Deodrant Certificate of Authenticity"
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div className="w-full md:w-1/2 space-y-5 sm:space-y-6 order-2 text-center md:text-left px-2 sm:px-0">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#003286] tracking-tight">
                            We didn't just claim it.<br /> We got it certified.
                        </h2>
                        <div className="space-y-3 sm:space-y-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-[320px] sm:max-w-none mx-auto md:mx-0">
                            <p>
                                Certified thoroughly, so you don't have to think twice.
                            </p>
                            <p>
                                We don't just claim to be safe — we prove it. DR.DEODRANT is independently certified, internationally tested, and built to a standard your skin deserves.
                            </p>
                            <p>
                                Because what goes on your body should be held to the highest bar.
                            </p>
                            <p className="font-semibold text-[#003286] pt-2 sm:pt-4">
                                Trust DR.DEODRANT. <br /> Trust What's Inside.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

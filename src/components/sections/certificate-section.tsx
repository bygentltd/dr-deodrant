import Image from "next/image";
import { Check } from "lucide-react";

export function CertificateSection() {
    return (
        <section className="py-16 md:py-24 bg-[#eaf5ff] relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
                    {/* Left: Certificate Image */}
                    <div className="w-full md:w-1/2 flex justify-center order-1">
                        <div className="relative w-full max-w-lg aspect-[4/5] md:aspect-[2/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
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
                    <div className="w-full md:w-1/2 space-y-6 order-2">
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0a2544] tracking-tight">
                            We didn't just claim it.<br />We got it certified.
                        </h2>
                        <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                            <p>
                                Certified thoroughly, so you don't have to think twice.
                            </p>
                            <p>
                                We don't just claim to be safe — we prove it. DR.DEODRANT is independently certified, internationally tested, and built to a standard your skin deserves.
                            </p>
                            <p>
                                Because what goes on your body should be held to the highest bar.
                            </p>
                            <p className="font-semibold text-[#0a2544] pt-4">
                                Trust DR.DEODRANT. Trust What's Inside.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

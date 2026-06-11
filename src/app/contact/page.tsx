import React from 'react';
import { FlowButton } from "@/components/ui/flow-button";

const Page = () => {
    return (
        <section className="bg-[#f5fbff] py-32 md:py-64 lg:py-48 px-4 sm:px-6 md:px-12 lg:px-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20">

                {/* Left Column: Info */}
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#003286] mb-4 md:mb-6">Support</h1>
                    <p className="text-sm md:text-base text-gray-600 mb-8 max-w-sm">
                        Do you have any questions about our products? You can send us an email or fill in the following form.
                    </p>

                    <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                            <div>
                                <h3 className="text-[#003286] font-semibold text-sm md:text-base">Email</h3>
                                <a href="mailto:support@drdeodrant.com" className="text-gray-500 underline text-sm md:text-base">support@drdeodrant.com</a>
                            </div>
                            <div>
                                <h3 className="text-[#003286] font-semibold text-sm md:text-base">Phone</h3>
                                <a href="tel:5551234567" className="text-gray-500 text-sm md:text-base">+91 83830 27724</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <form
                    action="https://formspree.io/f/meewrobw"
                    method="POST"
                    className="space-y-5 md:space-y-6 bg-white/50 p-6 md:p-8 rounded-2xl border border-blue-100 shadow-sm"
                >
                    <input type="text" name="subject" placeholder="Subject*" required className="w-full bg-transparent border-b border-gray-300 py-2 text-sm md:text-base focus:outline-none focus:border-[#003286]" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <input type="text" name="firstName" placeholder="First Name*" required className="bg-transparent border-b border-gray-300 py-2 text-sm md:text-base focus:outline-none focus:border-[#003286]" />
                        <input type="text" name="lastName" placeholder="Last Name" className="bg-transparent border-b border-gray-300 py-2 text-sm md:text-base focus:outline-none focus:border-[#003286]" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <input type="email" name="email" placeholder="Email*" required className="bg-transparent border-b border-gray-300 py-2 text-sm md:text-base focus:outline-none focus:border-[#003286]" />
                        <input type="text" name="orderNumber" placeholder="Order Number" className="bg-transparent border-b border-gray-300 py-2 text-sm md:text-base focus:outline-none focus:border-[#003286]" />
                    </div>

                    <textarea name="message" placeholder="Your Message*" rows={3} required className="w-full bg-transparent border-b border-gray-300 py-2 text-sm md:text-base focus:outline-none focus:border-[#003286]"></textarea>

                    <FlowButton
                        text="Send Message"
                        className="w-full sm:w-auto mt-2"
                        defaultBgColor="bg-[#003286]"
                        defaultTextColor="text-white"
                        circleColor="bg-[#2C476B]"
                    />

                    <p className="text-xs text-gray-400">*We aim to respond to inquiries within 24 hours.</p>
                </form>
            </div>
        </section>
    );
};

export default Page;
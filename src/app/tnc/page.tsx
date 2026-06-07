export default function TermsConditionsPage() {
  return (
    <div className="min-h-screen bg-[#F5FBFF]">
      <main className="max-w-4xl mx-auto px-6 py-24 md:py-32">
        
        {/* Header */}
        <header className="text-center mb-14">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#00399A]">
            Terms & Conditions
          </h1>

          <p className="mt-4 text-[#6B7280] text-sm md:text-base">
            Last updated: June 2026
          </p>
        </header>

        {/* Content */}
        <div className="bg-white rounded-[32px] border border-black/5 shadow-sm p-8 md:p-12 lg:p-14">

          <div className="space-y-12">

            <section>
              <h2 className="text-2xl font-semibold text-[#00399A] mb-4">
                Acceptance of Terms
              </h2>
              <p className="leading-8 text-[#4A4A4A]">
                By accessing or using the Dr. Deodrant website,
                purchasing our products, or interacting with our services,
                you agree to be bound by these Terms & Conditions,
                our Privacy Policy, and all related policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#00399A] mb-4">
                Products & Usage
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-[#4A4A4A] leading-7">
                <li>
                  Dr. Deodrant products are personal-care cosmetic items
                  intended for external use only.
                </li>
                <li>
                  Results may vary depending on skin type, lifestyle,
                  and environmental factors.
                </li>
                <li>
                  Our products are not medical treatments and are not
                  intended to diagnose, treat, cure, or prevent any disease.
                </li>
                <li>
                  Customers are encouraged to perform a patch test before
                  full application.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#00399A] mb-4">
                Orders & Payments
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-[#4A4A4A] leading-7">
                <li>
                  All orders are subject to product availability and order confirmation.
                </li>
                <li>
                  Prices are displayed in Indian Rupees (INR) unless otherwise stated.
                </li>
                <li>
                  We reserve the right to cancel or refuse orders due to
                  pricing errors, stock limitations, or suspected fraudulent activity.
                </li>
                <li>
                  Payments must be completed using approved secure payment methods.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#00399A] mb-4">
                Shipping & Delivery
              </h2>

              <p className="leading-8 text-[#4A4A4A]">
                Delivery timelines are estimates only and may vary due to
                courier operations, weather conditions, public holidays,
                or other circumstances beyond our control. Dr. Deodrant
                is not liable for delays caused by third-party logistics providers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#00399A] mb-4">
                Returns, Refunds & Exchanges
              </h2>

              <p className="leading-8 text-[#4A4A4A]">
                Due to hygiene and safety considerations, returns are not
                accepted once products have been delivered. Refunds,
                cancellations, and exchanges are governed by our Return &
                Refund Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#00399A] mb-4">
                Intellectual Property
              </h2>

              <p className="leading-8 text-[#4A4A4A]">
                All website content, including text, images, graphics,
                logos, product names, branding elements, and design assets,
                remains the exclusive property of Dr. Deodrant and may not
                be copied, reproduced, distributed, or used without prior
                written permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#00399A] mb-4">
                Limitation of Liability
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-[#4A4A4A] leading-7">
                <li>
                  Dr. Deodrant shall not be liable for allergic reactions,
                  misuse of products, or indirect damages arising from use.
                </li>
                <li>
                  Product usage is undertaken at the customer's own discretion
                  and responsibility.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#00399A] mb-4">
                User Conduct
              </h2>

              <p className="leading-8 text-[#4A4A4A]">
                Users agree not to submit false information, engage in
                fraudulent activities, interfere with website operations,
                or violate applicable laws. Such actions may result in
                account restrictions, order cancellations, or legal action.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#00399A] mb-4">
                Governing Law
              </h2>

              <p className="leading-8 text-[#4A4A4A]">
                These Terms & Conditions shall be governed by and construed
                in accordance with the laws of India. Any disputes arising
                from the use of this website or our products shall be subject
                to the exclusive jurisdiction of the courts of Maharashtra.
              </p>
            </section>

            {/* Contact Card */}
            <section className="bg-[#F5FBFF] rounded-3xl p-8 border border-[#00399A]/10">
              <h2 className="text-2xl font-semibold text-[#00399A] mb-5">
                Contact Information
              </h2>

              <div className="space-y-3 text-[#4A4A4A]">
                <p>
                  For any questions regarding these Terms & Conditions,
                  please contact us:
                </p>

                <p>
                  <span className="font-semibold">Email:</span>{" "}
                  <a
                    href="mailto:support@drdeodorant.com"
                    className="text-[#00399A] underline underline-offset-2"
                  >
                    support@drdeodorant.com
                  </a>
                </p>

                <p className="leading-7">
                  <span className="font-semibold">Address:</span><br />
                  NIDA DOOWA, Bldg No. 4/1604 Shivkrupa CHS,
                  CTS No. 195 PT, Off JP Road, MHADA Layout,
                  D N Nagar, Mumbai Suburban,
                  Maharashtra – 400053, India.
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
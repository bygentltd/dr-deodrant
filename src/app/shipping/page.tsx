export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-[#F5FBFF]">
      <main className="max-w-4xl mx-auto px-6 py-24 md:py-32">

        {/* Header */}
        <header className="text-center mb-14">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#00399A]">
            Shipping Policy
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
                Order Processing Time
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-[#4A4A4A] leading-7">
                <li>
                  Orders are typically processed and dispatched within 48 hours of confirmation.
                </li>
                <li>
                  Processing may be delayed during sales, holidays, or unforeseen circumstances.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#00399A] mb-4">
                Delivery Timeline
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-[#4A4A4A] leading-7">
                <li>
                  Standard delivery: 3–10 business days, depending on location and courier access.
                </li>
                <li>
                  Remote areas may require additional time.
                </li>
                <li>
                  Delivery timelines are estimates, not guarantees.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#00399A] mb-4">
                Shipping Charges
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-[#4A4A4A] leading-7">
                <li>
                  Shipping fees (if applicable) are displayed at checkout before payment.
                </li>
                <li>
                  Promotional free shipping offers may apply during campaigns.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#00399A] mb-4">
                Order Tracking
              </h2>

              <ul className="list-disc pl-6 space-y-3 text-[#4A4A4A] leading-7">
                <li>
                  Once shipped, customers receive tracking details via Email, SMS, or WhatsApp.
                </li>
                <li>
                  Please ensure notifications from Dr. Deodrant are enabled on your device.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#00399A] mb-4">
                Delivery Delays
              </h2>

              <p className="leading-8 text-[#4A4A4A] mb-4">
                Delays may occur due to:
              </p>

              <ul className="list-disc pl-6 space-y-3 text-[#4A4A4A] leading-7">
                <li>Weather or natural disruptions.</li>
                <li>Courier operational issues.</li>
                <li>Strikes, holidays, or regulatory restrictions.</li>
              </ul>

              <p className="leading-8 text-[#4A4A4A] mt-4">
                Refunds are not issued for courier delays.
              </p>

              <p className="leading-8 text-[#4A4A4A] mt-4">
                In rare exceptional cases, we may offer a brand voucher as goodwill.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#00399A] mb-4">
                Incorrect Address or Failed Delivery
              </h2>

              <p className="leading-8 text-[#4A4A4A] mb-4">
                If delivery fails due to:
              </p>

              <ul className="list-disc pl-6 space-y-3 text-[#4A4A4A] leading-7">
                <li>Incorrect address.</li>
                <li>Unavailability of recipient.</li>
                <li>Repeated delivery refusal.</li>
              </ul>

              <p className="leading-8 text-[#4A4A4A] mt-4">
                The order may be marked RTO (Return to Origin).
              </p>

              <p className="leading-8 text-[#4A4A4A] mt-4">
                Refunds (if eligible) will be processed after the parcel returns to our facility, minus applicable shipping and handling charges.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#00399A] mb-4">
                Damaged or Missing Packages
              </h2>

              <p className="leading-8 text-[#4A4A4A] mb-4">
                If your package arrives damaged or incomplete:
              </p>

              <ul className="list-disc pl-6 space-y-3 text-[#4A4A4A] leading-7">
                <li>Record a clear unboxing video from the moment of opening.</li>
                <li>Contact us within 24–48 hours of delivery.</li>
                <li>
                  Claims without video proof or after the specified time window may not be eligible for resolution.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-[#00399A] mb-4">
                Packaging Updates
              </h2>

              <p className="leading-8 text-[#4A4A4A]">
                Product packaging or containers may change as part of ongoing improvements.
                Customers may receive newer versions before website images are updated.
              </p>
            </section>

            <section className="bg-[#F5FBFF] rounded-3xl p-8 border border-[#00399A]/10">
              <h2 className="text-2xl font-semibold text-[#00399A] mb-5">
                Customer Support
              </h2>

              <div className="space-y-4 text-[#4A4A4A]">
                <p>
                  For any shipping-related queries, contact:
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

                <p>
                  Response time: 2–3 business days, excluding holidays or
                  external verification delays.
                </p>
              </div>
            </section>

          </div>
        </div>
      </main>
    </div>
  );
}
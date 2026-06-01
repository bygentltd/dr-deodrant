"use client";

import Link from "next/link";
import { 
  MapPin, 
  Clock, 
  Phone, 
  Mail, 
  Send
} from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faInstagram, 
  faXTwitter, 
  faTiktok, 
  faYoutube 
} from '@fortawesome/free-brands-svg-icons';

export function Footer() {
  return (
    <footer className="w-full bg-[#EAF5FF]">

   <div className="bg-[#113d86] text-white pt-20 pb-10 px-8 md:px-16 rounded-t-[3rem] md:rounded-t-[5rem]">
      <div className="max-w-7xl mx-auto">
        
        {/* --- Top Row: Contact Info --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 pb-16 border-b border-white/10">
          
          {/* Address */}
          <div className="flex items-start gap-4 group cursor-default">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-white group-hover:text-[#53606b]">
              <MapPin size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-serif text-lg mb-1">Address</h4>
              <p className="text-sm text-white/70 leading-relaxed">
                4b/39 James St, Fortitude Valley<br />QLD 4006
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4 group cursor-default">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-white group-hover:text-[#53606b]">
              <Clock size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-serif text-lg mb-1">Hours</h4>
              <p className="text-sm text-white/70 leading-relaxed">
                Mon–Sat, 9am–6pm
              </p>
            </div>
          </div>

          {/* Call Us */}
          <div className="flex items-start gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-white group-hover:text-[#53606b]">
              <Phone size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-serif text-lg mb-1">Call Us</h4>
              <p className="text-sm text-white/70 leading-relaxed group-hover:text-white transition-colors">
                +391 (0)35 2568
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 group cursor-pointer">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-white group-hover:text-[#53606b]">
              <Mail size={20} strokeWidth={1.5} />
            </div>
            <div>
              <h4 className="font-serif text-lg mb-1">Email</h4>
              <p className="text-sm text-white/70 leading-relaxed group-hover:text-white transition-colors">
                support@drdeodrant.com
              </p>
            </div>
          </div>

        </div>

        {/* --- Middle Row: Newsletter & Links --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 py-16">
          
          {/* Left: Newsletter */}
          <div className="lg:col-span-5 pr-0 lg:pr-12">
            <h3 className="font-serif text-3xl mb-4">Dr. Deodrant</h3>
            <p className="text-sm text-white/80 mb-8 max-w-sm">
              Monthly wellness insights and exclusive offers. Join 2,400+ guests.
            </p>
            
            {/* Input Form */}
            <form className="relative flex items-center" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-white/10 border border-white/10 rounded-full px-6 py-4 text-sm text-white placeholder:text-white/50 outline-none focus:border-white/30 focus:bg-white/15 transition-all"
                required
              />
              <button 
                type="submit" 
                className="absolute right-2 top-2 bottom-2 aspect-square bg-white/20 hover:bg-white text-white hover:text-[#53606b] rounded-full flex items-center justify-center transition-colors"
                aria-label="Subscribe"
              >
                <Send size={16} strokeWidth={2} className="ml-1" />
              </button>
            </form>
          </div>

          {/* Right: Links Grids */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-10">
            {/* Explore Column */}
            <div className="flex flex-col gap-4">
              <h4 className="font-serif text-xl mb-2">Explore</h4>
              {['Home', 'About', 'Services', 'Blog', 'Contact'].map((link) => (
                <Link key={link} href="#" className="text-sm text-white/70 hover:text-white transition-colors w-fit">
                  {link}
                </Link>
              ))}
            </div>

            {/* Company Column */}
            <div className="flex flex-col gap-4">
              <h4 className="font-serif text-xl mb-2">Company</h4>
              {['Our Story', 'Pricing', 'FAQs', 'Privacy Policy', 'Terms & Conditions'].map((link) => (
                <Link key={link} href="#" className="text-sm text-white/70 hover:text-white transition-colors w-fit">
                  {link}
                </Link>
              ))}
            </div>

            {/* Wellness Column */}
            {/* <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
              <h4 className="font-serif text-xl mb-2">Wellness</h4>
              {['Massages', 'Facials', 'Body Treatments', 'Rituals'].map((link) => (
                <Link key={link} href="#" className="text-sm text-white/70 hover:text-white transition-colors w-fit">
                  {link}
                </Link>
              ))}
            </div> */}
          </div>

        </div>

        {/* --- Bottom Row: Copyright & Socials --- */}
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/10">
          <p className="text-xs text-white/60">
            © 2026 Dr. Deodrant. All Rights Reserved.
          </p>
          
          <div className="flex items-center gap-5">
            <Link href="#" className="text-white/60 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
            <Link href="#" className="text-white/60 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </Link>
            {/* Using a custom SVG for TikTok to match the aesthetic since Lucide doesn't have it natively */}
            <Link href="#" className="text-white/60 hover:text-white transition-colors">
              <FontAwesomeIcon icon={faTiktok} size="lg" />
            </Link>
          </div>
        </div>

      </div>
    </div>
    </footer>
  );
}
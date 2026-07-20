import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative bg-charcoal text-white/80 overflow-hidden">
      {/* Layered ambient background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-charcoal via-[oklch(0.13_0.02_230)] to-[oklch(0.09_0.015_240)]" />
      <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(60%_55%_at_15%_10%,oklch(0.66_0.12_210/0.28),transparent_65%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-60 [background:radial-gradient(50%_50%_at_90%_30%,oklch(0.5_0.14_215/0.25),transparent_70%)]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      {/* Top hairline accent */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal/50 to-transparent" />

      {/* Brisbane skyline silhouette */}
      <svg
        aria-hidden
        viewBox="0 0 1600 240"
        preserveAspectRatio="xMidYEnd slice"
        className="pointer-events-none absolute inset-x-0 bottom-0 w-full h-32 sm:h-44 md:h-52 lg:h-60 text-teal/25"
      >
        <defs>
          <linearGradient id="bneFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="1" />
          </linearGradient>
        </defs>
        {/* Story Bridge cables (left) */}
        <g stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.7">
          <path d="M40,240 L40,150 L260,150 L260,240" />
          <path d="M40,150 Q150,90 260,150" />
          <path d="M40,150 L80,170 L120,180 L160,182 L200,180 L240,170 L260,150" />
          <line x1="80" y1="170" x2="80" y2="240" />
          <line x1="120" y1="180" x2="120" y2="240" />
          <line x1="160" y1="182" x2="160" y2="240" />
          <line x1="200" y1="180" x2="200" y2="240" />
          <line x1="240" y1="170" x2="240" y2="240" />
        </g>
        {/* Skyline buildings */}
        <path
          fill="url(#bneFade)"
          d="M300,240 L300,180 L340,180 L340,150 L380,150 L380,200 L420,200 L420,120 L460,120 L460,90 L500,90 L500,140 L540,140 L540,170 L580,170 L580,100 L620,100 L620,60 L660,60 L660,110 L700,110 L700,80 L740,80 L740,40 L780,40 L780,90 L820,90 L820,130 L860,130 L860,70 L900,70 L900,110 L940,110 L940,160 L980,160 L980,100 L1020,100 L1020,140 L1060,140 L1060,180 L1100,180 L1100,120 L1140,120 L1140,160 L1180,160 L1180,200 L1220,200 L1220,150 L1260,150 L1260,190 L1300,190 L1300,170 L1340,170 L1340,210 L1380,210 L1380,180 L1420,180 L1420,220 L1600,220 L1600,240 Z"
        />
        {/* Wheel of Brisbane */}
        <g stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6">
          <circle cx="1480" cy="180" r="42" />
          <line x1="1480" y1="138" x2="1480" y2="222" />
          <line x1="1438" y1="180" x2="1522" y2="180" />
          <line x1="1450" y1="150" x2="1510" y2="210" />
          <line x1="1510" y1="150" x2="1450" y2="210" />
          <line x1="1480" y1="222" x2="1465" y2="240" />
          <line x1="1480" y1="222" x2="1495" y2="240" />
        </g>
      </svg>

      <div className="container-prime relative py-16 md:py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
        <div className="col-span-1 sm:col-span-2 lg:col-span-2 max-w-md">
          <Logo className="h-24 sm:h-28 md:h-32 w-auto -ml-2 mix-blend-lighten drop-shadow-[0_8px_30px_rgba(0,0,0,0.4)]" />
          <p className="mt-6 text-sm leading-relaxed text-white/65">
            Prime Finish Renovations delivers premium residential and commercial
            renovations across Brisbane. Licensed, insured, and obsessed with
            craftsmanship - from concept to handover.
          </p>
          <div className="mt-6 flex flex-wrap gap-3 text-xs text-white/55">
            <span className="rounded-sm border border-white/10 px-3 py-1.5">Fully Licensed</span>
            <span className="rounded-sm border border-white/10 px-3 py-1.5">Fully Insured</span>
            <span className="rounded-sm border border-white/10 px-3 py-1.5">Brisbane-based</span>
          </div>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-widest">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              { to: "/services", label: "Services" },
              { to: "/projects", label: "Projects" },
              { to: "/about", label: "About Us" },
              { to: "/contact", label: "Get a Quote" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="hover:text-teal transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white uppercase tracking-widest">Contact</h4>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-teal shrink-0" />
              <a href="tel:+61450010250" className="hover:text-teal">0450 010 250</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-teal shrink-0" />
              <a href="mailto:info@primefinishrenovations.com" className="hover:text-teal break-all">
                info@primefinishrenovations.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-teal shrink-0" />
              <span>Servicing Brisbane & surrounding suburbs</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-white/5 bg-charcoal/80 backdrop-blur-sm">
        <div className="container-prime py-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-white/50 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Prime Finish Renovations. All rights reserved.</p>
          <p>Transforming Spaces. Elevating Lives.</p>
        </div>
      </div>
    </footer>
  );
}
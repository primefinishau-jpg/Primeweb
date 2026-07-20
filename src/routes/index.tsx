import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ChefHat,
  Home,
  Phone,
  Quote,
  ShieldCheck,
  Sparkles,
  Bath,
  Building2,
  MapPin,
} from "lucide-react";
import heroPortrait from "@/assets/hero-portrait-grounded.png";
import kitchenImg from "@/assets/project-kitchen.jpg";
import bathroomImg from "@/assets/project-bathroom.jpg";
import extensionImg from "@/assets/project-extension.jpg";
import commercialImg from "@/assets/project-commercial.jpg";
import badmintonImg from "@/assets/project-badminton.jpg";
import craftImg from "@/assets/about-craft.jpg";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prime Finish Renovations - Premium Renovations Brisbane" },
      {
        name: "description",
        content:
          "Brisbane's premium renovation experts. Kitchens, bathrooms, full-home renovations and commercial fitouts. Fully licensed, insured and on-time. Free quote in 24 hours.",
      },
      { property: "og:title", content: "Prime Finish Renovations - Brisbane's Renovation Experts" },
      {
        property: "og:description",
        content: "Transforming Spaces. Elevating Lives. Premium renovations done right.",
      },
    ],
    links: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Home, title: "Full Home Renovations", desc: "End-to-end transformations from concept to handover." },
  { icon: ChefHat, title: "Kitchen Renovations", desc: "Bespoke joinery, stone benchtops, premium appliances." },
  { icon: Bath, title: "Bathroom Renovations", desc: "Spa-quality ensuites built to last decades." },
  { icon: Building2, title: "Commercial Fitouts", desc: "Hospitality, retail, sport and office spaces delivered on time." },
];

const featuredProject = {
  img: badmintonImg,
  title: "Northside Badminton Centre",
  tag: "Featured Client · Commercial Fitout",
  location: "Brisbane, QLD",
  blurb:
    "A full commercial fitout for one of Brisbane's premier badminton facilities - tournament-grade flooring, custom joinery and a clean, high-impact finish.",
};
const projects = [
  { img: kitchenImg, title: "Paddington Kitchen", tag: "Kitchen Renovation", location: "Brisbane, QLD" },
  { img: bathroomImg, title: "New Farm Ensuite", tag: "Bathroom Renovation", location: "Brisbane, QLD" },
  { img: extensionImg, title: "Wilston Renovation", tag: "Full Home Renovation", location: "Brisbane, QLD" },
  { img: commercialImg, title: "Fortitude Valley Café", tag: "Commercial Fitout", location: "Brisbane, QLD" },
];

const testimonials = [
  {
    name: "Sarah & James M.",
    project: "Full home renovation, Ascot",
    quote:
      "Prime Finish handled every detail with care. The finish quality is unmatched and they delivered on time and on budget.",
  },
  {
    name: "Daniel R.",
    project: "Kitchen & living, Paddington",
    quote: "Professional from day one. Communication was constant and the craftsmanship blew us away.",
  },
  {
    name: "Northside Badminton Centre",
    project: "Commercial fitout, Brisbane",
    quote: "Tight commercial timeline - they smashed it. Trades, finishes, project management: all top-tier.",
  },
];

function HomePage() {
  return (
    <>
      {/* HERO */}      <section className="relative min-h-screen flex items-center text-white overflow-hidden bg-charcoal">
        {/* Atmospheric backdrop */}
        <div className="absolute inset-0 bg-linear-to-br from-charcoal via-charcoal to-[oklch(0.1_0.02_230)]" />
        {/* Teal ambient glows */}
        <div className="absolute inset-0 opacity-70 [background:radial-gradient(40%_45%_at_10%_25%,oklch(0.66_0.12_210/0.4),transparent_70%)]" />
        <div className="absolute inset-0 opacity-60 [background:radial-gradient(35%_40%_at_95%_75%,oklch(0.66_0.12_210/0.35),transparent_70%)]" />
        {/* Subtle architectural grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Foreground portrait - only shown once there's real room for it (xl+) so it never
            collides with the copy column on tablets */}
        <div className="pointer-events-none select-none hidden lg:block absolute z-10 top-20 right-[34%] 2xl:right-[42%] h-[calc(100svh-5.5rem)] max-h-[700px] w-auto">
          <div className="absolute left-1/2 bottom-0 h-10 w-60 -translate-x-1/2 rounded-full bg-black/75 blur-2xl opacity-100" />
          <img
            src={heroPortrait}
            alt="Prime Finish Renovations - your Brisbane renovation specialist"
            className="relative h-full w-auto object-contain object-bottom drop-shadow-[0_34px_48px_rgba(0,0,0,0.68)]"
            width={578}
            height={1320}
            fetchPriority="high"
          />
        </div>

        <div className="container-prime relative pt-20 md:pt-24 lg:pt-28 xl:pt-36 pb-16 md:pb-20 gw-full grid grid-cols-1 lg:grid-cols-7 gap-5 items-center">
          {/* Left: copy */}
          <div className="relative z-20 lg:col-span-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/10 backdrop-blur px-4 py-1.5 text-[11px] font-semibold text-teal uppercase tracking-[0.22em]">
              <MapPin className="h-3.5 w-3.5" /> Brisbane Renovation Experts
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-5xl lg:text-[58px] xl:text-7xl font-semibold leading-[1.05] text-balance drop-shadow-[0_4px_20px_rgba(0,0,0,0.4)]">
              Transforming spaces.
              <br />
              <span className="bg-gradient-to-r from-teal to-primary-glow bg-clip-text text-transparent">
                Elevating lives.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-white/85 leading-relaxed">
              Premium home renovations and commercial fitouts across Brisbane,
              delivered by a team obsessed with finish, function and follow-through
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Fully licensed & insured Brisbane renovators",
                "Fixed-price contracts · zero surprise variations",
                "Dedicated project manager on every job",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-white/90">
                  <CheckCircle2 className="h-5 w-5 text-teal mt-0.5 shrink-0" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <a
                href="tel:+61450010250"
                className="inline-flex items-center gap-3 text-white hover:text-teal transition-colors"
              >
                <div className="h-12 w-12 rounded-sm bg-white/10 backdrop-blur grid place-items-center ring-1 ring-white/15">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-white/60">Call us</div>
                  <div className="text-lg font-semibold">0450 010 250</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right: floating glass lead capture card */}
          <div className="lg:col-span-3 mt-10 md:mt-0">
            <div className="relative max-w-md mx-auto md:max-w-none md:ml-auto">
              {/* Multi-layer glow */}
              <div className="absolute -inset-8 rounded-[2rem] bg-gradient-to-br from-teal/50 via-primary-glow/30 to-transparent blur-3xl opacity-80 animate-pulse [animation-duration:6s]" />
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-teal/30 to-transparent blur-xl" />
              {/* Glass card */}
              <div className="relative z-30 bg-card/95 backdrop-blur-xl text-foreground p-6 sm:p-7 md:p-9 rounded-xl shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.1)] ring-1 ring-white/20 border border-white/10">
                {/* Top sheen */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent" />
                <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal">
                  <Sparkles className="h-3.5 w-3.5" /> Free Quote · 24-hour reply
                </div>
                <h2 className="mt-3 text-2xl font-semibold">Start your renovation</h2>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Tell us about your project. No obligation.
                </p>
                <div className="mt-6 md:col-span-12 lg:col-span-6 xl:col-span-5">
                  <QuoteForm compact />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-charcoal text-white border-t border-white/5">
        <div className="container-prime py-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: ShieldCheck, label: "Fully Licensed & Insured" },
            { icon: CheckCircle2, label: "Fixed-Price Contracts" },
            { icon: MapPin, label: "Brisbane-based · Local Trades" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-3">
              <t.icon className="h-5 w-5 text-teal" />
              <span className="text-sm font-medium text-white/80">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 md:py-28">
        <div className="container-prime">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">What we do</p>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">
                A complete renovation & construction partner.
              </h2>
            </div>
            <p className="max-w-md text-muted-foreground">
              From single-room refreshes to full-scale builds, every Prime Finish
              project is delivered with the same uncompromising standard.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-md overflow-hidden">
            {services.map((s) => (
              <div key={s.title} className="group bg-card p-6 md:p-8 hover:bg-charcoal hover:text-white transition-all duration-300">
                <s.icon className="h-8 w-8 text-teal" />
                <h3 className="mt-6 text-xl font-semibold">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground group-hover:text-white/70">
                  {s.desc}
                </p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn more <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container-prime">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 md:mb-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">Recent work</p>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-balance max-w-xl">
                Featured projects.
              </h2>
            </div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal hover:text-teal"
            >
              View full portfolio <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Featured client */}
          <Link
            to="/projects"
            className="group relative block overflow-hidden rounded-md mb-6"
          >
            <img
              src={featuredProject.img}
              alt={featuredProject.title}
              loading="lazy"
              width={1920}
              height={1080}
              className="w-full h-[280px] sm:h-[380px] md:h-[420px] lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 md:p-12 text-white max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-teal/40 bg-teal/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-teal">
                <Sparkles className="h-3 w-3" /> {featuredProject.tag}
              </span>
              <h3 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold">
                {featuredProject.title}
              </h3>
              <p className="mt-2 text-sm uppercase tracking-widest text-white/65">
                {featuredProject.location}
              </p>
              <p className="mt-4 max-w-xl text-sm sm:text-base text-white/85 leading-relaxed">
                {featuredProject.blurb}
              </p>
            </div>
          </Link>

          {/* Supporting grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((p) => (
              <Link
                to="/projects"
                key={p.title}
                className="group relative overflow-hidden rounded-md"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="w-full h-[220px] sm:h-[240px] md:h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <p className="text-[11px] uppercase tracking-widest text-teal">{p.tag} · {p.location}</p>
                  <h3 className="mt-1.5 text-lg font-semibold">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US - split */}
      <section className="py-20 md:py-28">
        <div className="container-prime grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <img
              src={craftImg}
              alt="Prime Finish craftsmanship"
              loading="lazy"
              width={1600}
              height={1100}
              className="rounded-md w-full object-cover shadow-elegant"
            />
            <div className="hidden md:block absolute -bottom-8 -right-8 bg-charcoal text-white p-6 lg:p-8 rounded-md max-w-xs shadow-elegant">
              <div className="text-4xl lg:text-5xl font-semibold text-teal">98%</div>
              <p className="mt-2 text-sm text-white/70">
                Of clients refer us to family and friends within 12 months.
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">Why Prime Finish</p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">
              Premium craftsmanship, without the chaos.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We're a tight-knit team of licensed builders, project managers and
              trusted trades - built to deliver on the things every homeowner wishes
              their builder did: clean sites, clear communication, and the finish
              they were promised.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Dedicated project manager on every job",
                "Fixed-price contracts with no surprise variations",
                "Weekly progress updates with photos",
                "All trades licensed, insured and police-checked",
                "Brisbane-based team · local trades · local accountability",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-teal mt-0.5 shrink-0" />
                  <span className="text-sm text-foreground">{p}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-10 inline-flex items-center gap-2 rounded-sm bg-charcoal px-6 py-3.5 text-sm font-semibold text-white hover:bg-charcoal-soft"
            >
              About our process <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28 bg-charcoal text-white">
        <div className="container-prime">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">Our process</p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">
              A clear path from concept to handover.
            </h2>
          </div>
          <div className="mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: "01", t: "Consult", d: "On-site consultation to understand scope, vision and budget." },
              { n: "02", t: "Design & Quote", d: "Fixed-price proposal with detailed scope, timeline and materials." },
              { n: "03", t: "Build", d: "Dedicated PM, weekly updates, premium trades on a clean site." },
              { n: "04", t: "Handover", d: "Quality checks, full walkthrough and a finish you'll be proud of." },
            ].map((s) => (
              <div key={s.n} className="border-t border-white/15 pt-6">
                <div className="text-sm font-semibold text-teal">{s.n}</div>
                <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
                <p className="mt-3 text-sm text-white/65 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 md:py-28">
        <div className="container-prime">
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">Client stories</p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">
              Built on referrals, finished to perfection.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card border border-border rounded-md p-6 md:p-8 hover:shadow-elegant transition-shadow">
                <Quote className="h-8 w-8 text-teal" />
                <p className="mt-6 text-base leading-relaxed text-foreground">"{t.quote}"</p>
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{t.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 [background:radial-gradient(60%_60%_at_50%_50%,oklch(0.66_0.12_210/0.5),transparent_60%)]" />
        <div className="container-prime relative text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-balance">
            Ready to transform your space?
          </h2>
          <p className="mt-6 text-lg text-white/80">
            Call us directly, or scroll back up to request a free quote - we
            reply within 24 hours.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="tel:+61450010250"
              className="inline-flex items-center gap-2 rounded-sm bg-teal px-7 py-4 text-sm font-semibold text-white hover:bg-teal-deep shadow-teal"
            >
              <Phone className="h-4 w-4" /> Call 0450 010 250
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm border border-white/20 bg-white/5 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10"
            >
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
import React, { useState } from "react";
import { ChevronDown, Search, Phone, Facebook, Twitter, Youtube, Pencil, Video, Palette, Magnet, Target } from "lucide-react";
import logo from '../../assets/logo.png';

export default function NanotextNavbar() {
  const [open, setOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
      {/* Top strip */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:py-4">
        {/* Left: Logo + Brand */}
        <div className="flex items-center gap-3">
          <LogoMark />
          <div className="leading-tight">
            {/* <p className="text-xs tracking-wide text-slate-500">Lorem, ipsum.</p> */}
            {/* <p className="text-lg font-semibold tracking-wide"> */}
           
            {/* </p> */}
          </div>
        </div>

        {/* Center: Hotline (desktop) */}
        <div className="hidden items-center gap-2 text-sm text-slate-600 md:flex">
          <Phone className="h-4 w-4" />
          <span>
            Hotline: <a className="font-medium text-slate-800" href="tel:+441801333712">+91 9319284073</a>
          </span>
        </div>

        {/* Right: Search + Social + CTA (desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search …"
              className="h-10 w-64 rounded-full border border-slate-200 bg-white pl-9 pr-4 text-sm outline-none ring-0 transition focus:border-sky-300 focus:shadow-[0_0_0_3px_rgba(14,165,233,0.15)]"
            />
          </div>

          <nav className="ml-2 flex items-center gap-2">
            <a href="#" aria-label="Facebook" className="rounded-full p-2 hover:bg-slate-100"><Facebook className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="rounded-full p-2 hover:bg-slate-100"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="YouTube" className="rounded-full p-2 hover:bg-slate-100"><Youtube className="h-4 w-4" /></a>
          </nav>

          <a
            href="#"
            className="ml-2 rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
          >
            GET STARTED
          </a>
        </div>

        {/* Mobile toggles */}
        <button
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-sm md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          Menu
          <ChevronDown className={`h-4 w-4 transition ${mobileOpen ? "rotate-180" : ""}`} />
        </button>
      </div>

      {/* Bottom nav (desktop) */}
      <div className="hidden border-t border-slate-100 md:block">
        <div className="mx-auto flex max-w-7xl items-center gap-8 px-4">
          <DesktopLink label="Home" active />
          <DesktopLink label="About Us" />

          {/* What we do dropdown */}
          <div className="relative"
               onMouseEnter={() => setOpen(true)}
               onMouseLeave={() => setOpen(false)}>
            <button className="flex items-center gap-1 border-b-2 border-transparent py-3 text-slate-700 hover:text-sky-600">
              What we do <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
            </button>

            {open && (
              <div className="absolute left-0 top-full w-[720px] translate-y-1 bg-white p-6 shadow-xl ring-1 ring-slate-900/5">
                <div className="grid grid-cols-5 gap-6">
                  <ServiceItem icon={<Pencil className="h-5 w-5" />} title="Content Writing" />
                  <ServiceItem icon={<Video className="h-5 w-5" />} title="Video Marketing" />
                  <ServiceItem icon={<Palette className="h-5 w-5" />} title="Graphic Design" />
                  <ServiceItem icon={<Magnet className="h-5 w-5" />} title="Lead Magnet Creation" />
                  <ServiceItem icon={<Target className="h-5 w-5" />} title="Content Marketing" />
                </div>
              </div>
            )}
          </div>

          <DesktopLink label="Case Studies" />
          <DesktopLink label="Blog" />
          <DesktopLink label="Pricing" />
          <DesktopLink label="Contact Us" />
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="border-t border-slate-100 md:hidden">
          <div className="px-4 py-3">
            <div className="mb-3 flex items-center gap-2 rounded-xl border border-slate-200 p-2">
              <Search className="h-4 w-4 text-slate-400" />
              <input className="w-full bg-transparent text-sm outline-none" placeholder="Search …" />
            </div>
            <ul className="space-y-1 text-sm">
              <li><a className="block rounded-lg px-3 py-2 hover:bg-slate-50" href="#">Home</a></li>
              <li><a className="block rounded-lg px-3 py-2 hover:bg-slate-50" href="#">About Us</a></li>
              <li>
                <details className="group rounded-lg">
                  <summary className="cursor-pointer list-none rounded-lg px-3 py-2 hover:bg-slate-50">
                    <span className="inline-flex items-center gap-1">What we do <ChevronDown className="h-4 w-4 transition group-open:rotate-180" /></span>
                  </summary>
                  <div className="mt-1 grid grid-cols-2 gap-2 px-3 pb-3">
                    <MobileService title="Content Writing" />
                    <MobileService title="Video Marketing" />
                    <MobileService title="Graphic Design" />
                    <MobileService title="Lead Magnet Creation" />
                    <MobileService title="Content Marketing" />
                  </div>
                </details>
              </li>
              <li><a className="block rounded-lg px-3 py-2 hover:bg-slate-50" href="#">Case Studies</a></li>
              <li><a className="block rounded-lg px-3 py-2 hover:bg-slate-50" href="#">Blog</a></li>
              <li><a className="block rounded-lg px-3 py-2 hover:bg-slate-50" href="#">Pricing</a></li>
              <li><a className="block rounded-lg px-3 py-2 hover:bg-slate-50" href="#">Contact Us</a></li>
              <li className="pt-2"><a className="block rounded-full bg-blue-600 px-4 py-2 text-center text-sm font-semibold text-white" href="#">GET STARTED</a></li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

function DesktopLink({ label, active = false }) {
  return (
    <a
      href="#"
      className={`border-b-2 py-3 text-slate-700 hover:text-sky-600 ${
        active ? "border-sky-400 text-sky-600" : "border-transparent"
      }`}
    >
      {label}
    </a>
  );
}

function ServiceItem({ icon, title }) {
  return (
    <a href="#" className="group flex flex-col items-center gap-3 rounded-2xl p-4 text-center hover:bg-slate-50">
      <div className="grid h-14 w-14 place-items-center rounded-2xl bg-sky-50 text-sky-600 ring-1 ring-sky-100">
        {icon}
      </div>
      <span className="text-sm text-slate-700">{title}</span>
    </a>
  );
}

function MobileService({ title }) {
  return (
    <a href="#" className="rounded-lg border border-slate-200 px-3 py-2 text-slate-700 hover:bg-slate-50">
      {title}
    </a>
  );
}

function LogoMark() {
  return (
    <div className="grid h-10  place-items-center ">
      
      <img className="h-10 " src={logo} alt="" />
    </div>
  );
}

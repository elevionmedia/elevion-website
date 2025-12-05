// AboutSection.jsx
import React from "react";

const AboutSection = () => {
  return (
    <section className="bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        {/* Top badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="inline-block h-8 w-8 rounded-full bg-lime-400/80 flex items-center justify-center">
            <span className="h-3 w-3 rounded-full bg-slate-900" />
          </span>
          <p className="text-sm font-medium text-slate-500 tracking-wide">
            About Us
          </p>
        </div>

        {/* Main title + content */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-start">
          {/* Left: title + text */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight mb-4">
              Empowering Your Success
              <br />
              <span className="text-lime-500">with Digital Expertise</span>
            </h2>
            <p className="text-sm md:text-base text-slate-500 leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Aliquet eget sit amet tellus cras adipiscing. Semper risus in
              hendrerit gravida. Etiam erat velit scelerisque in dictum non
              consectetur a erat.
            </p>

            {/* Circular badge */}
            <div className="inline-flex items-center gap-3">
              <div className="relative h-20 w-20 rounded-full border-[6px] border-lime-400 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-slate-900 text-white text-xs font-semibold flex flex-col items-center justify-center text-center leading-tight">
                  <span>Digital</span>
                  <span>Agency</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 max-w-[180px]">
                Transforming ideas into engaging digital experiences.
              </p>
            </div>
          </div>

          {/* Right: stats sliders + button */}
          <div className="flex-1 w-full">
            <div className="space-y-6">
              <ProgressRow
                label="Marketing & Business Growth"
                value={85}
              />
              <ProgressRow label="Creativity & Innovation" value={80} />
              <ProgressRow
                label="Business & Financial Management"
                value={95}
              />
            </div>

            <button className="mt-8 inline-flex items-center px-6 py-3 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition">
              About Us
              <span className="ml-2 inline-block h-5 w-5 rounded-full bg-lime-400 flex items-center justify-center text-[10px] text-slate-900">
                →
              </span>
            </button>
          </div>
        </div>

        {/* Images + numbers row */}
        <div className="mt-14 flex flex-col lg:flex-row gap-10 items-start">
          {/* Left images */}
          <div className="flex-[1.2] grid grid-cols-2 gap-4">
            <div className="col-span-2 md:col-span-1">
              <div className="overflow-hidden rounded-2xl bg-slate-200 h-full">
                <img
                  src="https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg"
                  alt="Team working together"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
              <div className="overflow-hidden rounded-2xl bg-slate-200 h-1/2">
                <img
                  src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg"
                  alt="Business meeting"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
              <div className="overflow-hidden rounded-2xl bg-slate-200 h-1/2 hidden sm:block">
                <img
                  src="https://images.pexels.com/photos/1181555/pexels-photo-1181555.jpeg"
                  alt="Creative planning"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </div>
          </div>

          {/* Right stats */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
            <StatBox number="3k+" label="Successful Projects" />
            <StatBox number="200+" label="Expert Team" />
            <StatBox number="350+" label="Happy Customers" />
            <StatBox number="16+" label="Years of Experience" />
          </div>
        </div>
      </div>
    </section>
  );
};

const ProgressRow = ({ label, value }) => {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <span className="text-xs font-semibold text-slate-500">
          {value}%
        </span>
      </div>
      <div className="relative h-2 rounded-full bg-slate-200">
        <div
          className="h-2 rounded-full bg-lime-400"
          style={{ width: `${value}%` }}
        />
        <span
          className="absolute -top-1 h-4 w-4 rounded-full bg-white border border-lime-400 shadow-sm"
          style={{ left: `calc(${value}% - 0.5rem)` }}
        />
      </div>
    </div>
  );
};

const StatBox = ({ number, label }) => {
  return (
    <div className="text-left">
      <p className="text-2xl font-semibold text-slate-900 mb-1">{number}</p>
      <p className="text-xs text-slate-500 leading-snug">{label}</p>
    </div>
  );
};

export default AboutSection;

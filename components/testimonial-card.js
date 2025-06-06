// components/TestimonialSlider.js
'use client'; // Required for Next.js App Router if using client-side hooks like useState

import React, { useState } from 'react';

// SVG icon for the left arrow
const ArrowLeftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
  </svg>
);

// SVG icon for the right arrow
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
  </svg>
);

// Sample data for testimonials with updated image links.
const testimonialsData = [
  {
    id: 1,
    image: 'https://www.aleo.agency/_nuxt/img/c642e72.jpg',
    quote: "Ils ont été très réactifs et on su me proposer ce qui correspondait exactement à mon besoin.",
    name: 'ERIC JURION',
    title: 'GÉRANT LE REPÈRE',
    caseStudyUrl: '#',
    bgColor: 'bg-[#E9F5FE]',
    textColor: 'text-[#0284c7]',
    nameColor: 'text-slate-800',
    titleColor: 'text-slate-600',
    buttonBgColor: 'bg-[#38bdf8]',
    buttonTextColor: 'text-white',
  },
  {
    id: 2,
    image: 'https://www.aleo.agency/_nuxt/img/9a61e17.jpg',
    quote: "Une collaboration au top depuis plusieurs années ! Si vous êtes à la recherche d'une agence réactive, ALEO est celle qu'il vous faut. Des experts de la communication qui proposent des prestations toujours adaptées à mes besoins.",
    name: 'FRÉDÉRIC MASSON',
    title: 'GÉRANT MASSON FRÈRES',
    caseStudyUrl: '#',
    bgColor: 'bg-[#FCE4EC]',
    textColor: 'text-[#0284c7]',
    nameColor: 'text-slate-800',
    titleColor: 'text-slate-600',
    buttonBgColor: 'bg-[#38bdf8]',
    buttonTextColor: 'text-white',
  },
  {
    id: 3,
    image: 'https://www.aleo.agency/_nuxt/img/118860e.jpg',
    quote: "ALEO m'accompagne dans le développement de mon cabinet depuis plus d'un an. Leur professionnalisme et leur réactivité m'ont permis de démarrer sereinement mon activité. Je recommande à 100%.",
    name: 'ELSA DUBOIS',
    title: 'GÉRANTE CMEG',
    caseStudyUrl: '#',
    bgColor: 'bg-[#E8EAF6]',
    textColor: 'text-[#0284c7]',
    nameColor: 'text-slate-800',
    titleColor: 'text-slate-600',
    buttonBgColor: 'bg-[#38bdf8]',
    buttonTextColor: 'text-white',
  },
];

// Base styling for navigation arrow buttons remains the same
const arrowButtonBaseStyle = "absolute top-1/2 -translate-y-1/2 rounded-full p-2.5 sm:p-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 ease-in-out z-20";
const arrowButtonActiveColor = "bg-purple-700 hover:bg-purple-800 text-white";

// Component for individual testimonial card. It no longer needs to manage its own active state.
const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-xl overflow-hidden w-full h-full">
      {/* Image Section */}
      <div className="w-full md:w-[38%] flex-shrink-0">
        <img
          src={testimonial.image}
          alt={testimonial.name || 'Client image'}
          className="object-cover w-full h-60 sm:h-72 md:h-full"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = `https://placehold.co/400x450/E0E0E0/B0B0B0?text=Image+Not+Found`;
          }}
        />
      </div>

      {/* Text Content Section */}
      <div className={`w-full md:w-[62%] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col ${testimonial.bgColor}`}>
        <blockquote className={`text-lg sm:text-xl md:text-2xl font-medium ${testimonial.textColor} mb-5 sm:mb-6 leading-relaxed flex-grow`}>
          <span>&ldquo;{testimonial.quote}&rdquo;</span>
        </blockquote>
        <div className="mt-auto">
          <p className={`font-semibold ${testimonial.nameColor} text-base sm:text-lg`}>{testimonial.name}</p>
          <p className={`${testimonial.titleColor} text-sm sm:text-base mb-5 sm:mb-6`}>{testimonial.title}</p>
          <a href={testimonial.caseStudyUrl} className={`inline-flex items-center self-start px-5 py-2.5 sm:px-6 sm:py-3 rounded-md text-xs sm:text-sm font-medium ${testimonial.buttonTextColor} ${testimonial.buttonBgColor} hover:opacity-90 transition-colors shadow-md hover:shadow-lg`}>
            Voir l'étude de cas
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// Main Slider Component, now functioning as a carousel
export default function TestimonialSliderApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = testimonialsData.length;

  // Constants for carousel calculation
  const SLIDE_WIDTH_PERCENT = 80; // Each slide takes up 80% of the viewport width
  const PEEK_PERCENT = (100 - SLIDE_WIDTH_PERCENT) / 2; // This leaves 10% on each side

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  if (!testimonialsData || totalSlides === 0) {
    return (
      <div className="flex justify-center items-center h-64 bg-slate-50 font-inter">
        <p className="text-slate-500">No testimonials available.</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 py-12 md:py-20 font-inter antialiased">
      {/* The outer container is relative to position the arrows correctly */}
      <div className="relative w-full mx-auto">
        {/* This is the viewport of our carousel, it hides the overflowing content */}
        <div className="w-full overflow-hidden">
          {/* This is the track that moves. We apply the transform to this element. */}
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              // The transform logic to center the active slide
              transform: `translateX(calc(${PEEK_PERCENT}% - ${currentIndex * SLIDE_WIDTH_PERCENT}%))`,
            }}
          >
            {testimonialsData.map((testimonial, index) => {
              const isActive = index === currentIndex;
              return (
                // This is each individual slide wrapper
                <div
                  key={testimonial.id}
                  style={{ flex: `0 0 ${SLIDE_WIDTH_PERCENT}%` }}
                  className="p-2 sm:p-4"
                >
                  <div
                    className={`transition-all duration-300 ease-in-out h-full ${
                      isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-90'
                    }`}
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrows - positioned on top of the carousel */}
        {totalSlides > 1 && (
          <>
            <button
              onClick={handlePrev}
              className={`${arrowButtonBaseStyle} ${arrowButtonActiveColor} left-0 sm:left-4 md:left-8 bg-black !rounded-full w-16 h-16 flex justify-center items-center`}
              aria-label="Previous testimonial"
            >
              <ArrowLeftIcon />
            </button>
            <button
              onClick={handleNext}
              className={`${arrowButtonBaseStyle} ${arrowButtonActiveColor} right-0 sm:right-4 md:right-8 bg-black !rounded-full w-16 h-16 flex justify-center items-center`}
              aria-label="Next testimonial"
            >
              <ArrowRightIcon />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

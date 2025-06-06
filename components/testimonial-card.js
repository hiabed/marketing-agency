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

// Sample data for testimonials. You should replace this with your actual data.
// I've tried to match the color schemes from your screenshots for the first three items.
const testimonialsData = [
  {
    id: 1,
    image: 'https://placehold.co/400x450/E9F5FE/0284c7?text=Client+Image+1', // Placeholder image
    quote: "Ils ont été très réactifs et on su me proposer ce qui correspondait exactement à mon besoin.",
    name: 'ERIC JURION',
    title: 'GÉRANT LE REPÈRE',
    caseStudyUrl: '#', // Replace with actual URL
    bgColor: 'bg-[#E9F5FE]', // Light blue background for text area
    textColor: 'text-[#0284c7]', // Sky blue for quote text
    nameColor: 'text-slate-800',
    titleColor: 'text-slate-600',
    buttonBgColor: 'bg-[#38bdf8]', // Bright sky blue for button
    buttonTextColor: 'text-white',
  },
  {
    id: 2,
    image: 'https://placehold.co/400x450/FCE4EC/881337?text=Client+Image+2', // Placeholder image
    quote: "Une collaboration au top depuis plusieurs années ! Si vous êtes à la recherche d'une agence réactive, ALEO est celle qu'il vous faut. Des experts de la communication qui proposent des prestations toujours adaptées à mes besoins.",
    name: 'FRÉDÉRIC MASSON',
    title: 'GÉRANT MASSON FRÈRES',
    caseStudyUrl: '#',
    bgColor: 'bg-[#FCE4EC]', // Light pinkish background (adjust as needed)
    textColor: 'text-[#0284c7]', // Consistent quote text color
    nameColor: 'text-slate-800',
    titleColor: 'text-slate-600',
    buttonBgColor: 'bg-[#38bdf8]', // Consistent button color
    buttonTextColor: 'text-white',
  },
  {
    id: 3,
    image: 'https://placehold.co/400x450/E8EAF6/312e81?text=Client+Image+3', // Placeholder image
    quote: "ALEO m'accompagne dans le développement de mon cabinet depuis plus d'un an. Leur professionnalisme et leur réactivité m'ont permis de démarrer sereinement mon activité. Je recommande à 100%.",
    name: 'ELSA DUBOIS',
    title: 'GÉRANTE CMEG',
    caseStudyUrl: '#',
    bgColor: 'bg-[#E8EAF6]', // Light lavender background
    textColor: 'text-[#0284c7]', // Consistent quote text color
    nameColor: 'text-slate-800',
    titleColor: 'text-slate-600',
    buttonBgColor: 'bg-[#38bdf8]', // Consistent button color
    buttonTextColor: 'text-white',
  },
  // Add more testimonials here
];

// Base styling for navigation arrow buttons
const arrowButtonBaseStyle = "absolute top-1/2 -translate-y-1/2 rounded-full p-2.5 sm:p-3 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200 ease-in-out z-10";
const arrowButtonActiveColor = "bg-purple-700 hover:bg-purple-800 text-white"; // Dark purple as in screenshots

// Component for individual testimonial card
const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div
      className={`flex flex-col md:flex-row bg-white shadow-2xl rounded-xl overflow-hidden w-full max-w-3xl lg:max-w-4xl mx-auto transition-opacity duration-500 ease-in-out ${isActive ? 'opacity-100' : 'opacity-0 absolute invisible'}`}
      // `absolute invisible` for non-active cards to prevent layout shifts while allowing opacity transition
    >
      {/* Image Section: Takes about 38% of width on medium screens and up */}
      <div className="w-full md:w-[38%] flex-shrink-0">
        <img
          src={testimonial.image}
          alt={testimonial.name || 'Client image'}
          className="object-cover w-full h-60 sm:h-72 md:h-full" // Full height on md+, fixed on smaller
          onError={(e) => {
            // Fallback for broken images
            e.target.onerror = null; // Prevent infinite loop
            e.target.src = `https://placehold.co/400x450/E0E0E0/B0B0B0?text=Image+Not+Found`;
          }}
        />
      </div>

      {/* Text Content Section: Takes about 62% of width on medium screens and up */}
      <div className={`w-full md:w-[62%] p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col ${testimonial.bgColor || 'bg-gray-50'}`}>
        {/* Quote - using blockquote for semantic HTML and flex-grow to take available space */}
        <blockquote className={`text-lg sm:text-xl md:text-2xl font-medium ${testimonial.textColor || 'text-gray-700'} mb-5 sm:mb-6 leading-relaxed flex-grow`}>
          <span className="block relative">&ldquo;{testimonial.quote}&rdquo;</span>
        </blockquote>
        {/* Attributtion and Call to Action - mt-auto pushes this block to the bottom if flex-grow is used above */}
        <div className="mt-auto">
          <p className={`font-semibold ${testimonial.nameColor || 'text-slate-800'} text-base sm:text-lg`}>{testimonial.name}</p>
          <p className={`${testimonial.titleColor || 'text-slate-600'} text-sm sm:text-base mb-5 sm:mb-6`}>{testimonial.title}</p>
          <a
            href={testimonial.caseStudyUrl}
            className={`inline-flex items-center self-start px-5 py-2.5 sm:px-6 sm:py-3 rounded-md text-xs sm:text-sm font-medium ${testimonial.buttonTextColor || 'text-white'} ${testimonial.buttonBgColor || 'bg-blue-600'} hover:opacity-90 transition-colors shadow-md hover:shadow-lg`}
          >
            Voir l'étude de cas
            {/* Arrow icon for the button */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

// Main Slider Component - Rename this to `TestimonialSlider` or your preferred name.
export default function TestimonialSliderApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = testimonialsData.length;

  // Handler for the previous button
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  // Handler for the next button
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  // Conditional rendering if no testimonials are provided
  if (!testimonialsData || totalSlides === 0) {
    return (
      <div className="flex justify-center items-center h-64 bg-slate-50 font-inter">
        <p className="text-slate-500">No testimonials available.</p>
      </div>
    );
  }

  return (
    // Outer container for background color and padding
    <div className="w-full bg-slate-50 py-12 md:py-20 flex justify-center items-center font-inter antialiased">
      {/* Relative container for positioning arrows and holding the card */}
      {/* Max width is set to be wider than the card to allow space for arrows to be visually pleasing */}
      <div className="relative w-full max-w-5xl xl:max-w-[1300px] mx-auto px-5 sm:px-10 md:px-16 lg:px-20">

        {/* Container for the testimonial cards. This helps manage transitions and alignment. */}
        {/* min-height ensures space is reserved, preventing content jump during slide changes. */}
        <div className="relative flex justify-center items-center min-h-[520px] md:min-h-[480px] lg:min-h-[450px]">
          {testimonialsData.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isActive={index === currentIndex}
            />
          ))}
        </div>

        {/* Navigation Arrows - Rendered only if there's more than one testimonial */}
        {totalSlides > 1 && (
          <>
            {/* Left Arrow: Positioned to the side of the card area */}
            <button
              onClick={handlePrev}
              className={`${arrowButtonBaseStyle} ${arrowButtonActiveColor} left-0 sm:left-1 md:left-2 lg:left-3 xl:left-[-10px]`}
              aria-label="Previous testimonial"
            >
              <ArrowLeftIcon />
            </button>
            {/* Right Arrow: Positioned to the side of the card area */}
            <button
              onClick={handleNext}
              className={`${arrowButtonBaseStyle} ${arrowButtonActiveColor} right-0 sm:right-1 md:right-2 lg:right-3 xl:right-[-10px]`}
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

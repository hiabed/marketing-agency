// components/FAQSection.js
'use client'; // Required for Next.js App Router if using client-side hooks like useState

import React, { useState } from 'react';
import { defaultData } from './FAQ-section-questions';

const PlusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
  </svg>
);

const MinusIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
  </svg>
);

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      {/* Question part - clickable to toggle answer visibility */}
      <button
        onClick={onClick}
        className="rounded-[10px] bg-[#d8eeff] flex justify-between items-center w-full py-4 sm:py-5 px-4 sm:px-6 text-left focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 transition-colors duration-150 ease-in-out hover:bg-[rgb(200_222_249)]"
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-base font-medium">{question}</span>
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </button>
      {/* Answer part - shown or hidden based on isOpen state */}
      {/* Added smooth transition for height and opacity */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="px-4 sm:px-6 pb-4 sm:pb-5 pt-1 text-sm text-gray-600 leading-relaxed">
          {/* Using a div for the answer to allow for more complex HTML if needed */}
          <div>{answer}</div>
        </div>
      </div>
    </div>
  );
};

// Main FAQ Section Component
export default function FAQSection({ faqData = [] }) {
  const [openIndex, setOpenIndex] = useState(null); // Manages which FAQ item is currently open
  // Handles click on an FAQ item, toggling its open state
  // Allows only one item to be open at a time. Click an open item to close it.
  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const currentFaqData = faqData.length > 0 ? faqData : defaultData;
  // Conditional rendering if no data is available
  return (
    // Outer container with gradient background and padding
    <section className="w-[80%] mx-auto min-w-[800px] py-12 md:py-16 bg-[rgb(195_225_249)] font-inter antialiased radiused-lg">
      {/* Max width container for defaultDatacontent, centered */}
      <div className="max-w-3xl lg:max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-purple-800 mb-8 sm:mb-10">
          Une question ?
        </h2>
        {/* Container for FAQ items with white background and rounded corners/shadow */}
        <div className="flex bg-[#c3e1f9] !bg-[#c3e1f9] flex-col gap-3 bg-white shadow-xl overflow-hidden rounded-[10px]">
          {currentFaqData.map((item, index) => (
            <FAQItem
              className="!rounded-[10px]"
              key={item.id || index} // Use item.id if available, otherwise index
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => handleItemClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

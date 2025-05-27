// pages/FAQList.js
"use client";

import { useState, useEffect, useRef } from 'react';
import { allFaqData } from './FAQ-data'; // Adjust path if needed
import FAQItem from './FAQItem'; // Adjust path
// If using shadcn/ui button for nav links:
// import { Button } from "@/components/ui/button"; // Assuming shadcn is setup

export default function FAQPageWithSidebar() {
  const [activeSection, setActiveSection] = useState(allFaqData[0]?.id || '');
  const sectionRefs = useRef({}); // To store refs to content sections

  // Scroll to section on sidebar click
  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId); // Set active immediately for visual feedback
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Intersection Observer for updating active section on scroll
  useEffect(() => {
    const observerOptions = {
      root: null, // relative to document viewport
      rootMargin: '0px',
      threshold: 0.4, // When 40% of the section is visible
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = Object.values(sectionRefs.current);

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    // Initial check for first section if not already set by observer
    if (allFaqData.length > 0 && !sections.some(s => s && s.id === activeSection)) {
        setActiveSection(allFaqData[0].id);
    }


    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, [activeSection]); // Rerun effect if data changes (though faqData is static here)


  // Effect for initial active section (focus first element)
  useEffect(() => {
    if (allFaqData.length > 0) {
      setActiveSection(allFaqData[0].id);
    }
  }, []);


  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-1/4 lg:w-1/5 p-4 md:p-8 bg-gray-50 border-r border-gray-200 md:sticky md:top-0 md:h-screen md:overflow-y-auto">
        <nav>
          <ul className="space-y-2">
            {allFaqData.map(section => (
              <li key={section.id}>
                <button
                  onClick={() => handleNavClick(section.id)}
                  // If using shadcn/ui Button:
                  // asChild
                  // variant={activeSection === section.id ? "secondary" : "ghost"} 
                  // className={`w-full justify-start text-left px-3 py-2 rounded-md text-sm font-medium 
                  //   ${activeSection === section.id 
                  //     ? 'bg-red-100 text-red-700' // Active: light red
                  //     : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'}`}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium block
                    ${activeSection === section.id 
                      ? 'bg-red-100 text-red-700 font-semibold' // Active: light red
                      : 'text-gray-600 hover:bg-gray-200 hover:text-gray-800'}`}
                >
                  {section.categoryTitle}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="w-full md:w-3/4 lg:w-4/5 p-4 md:p-8 overflow-y-auto">
        {allFaqData.map(section => (
          <section 
            key={section.id} 
            id={section.id}
            ref={el => sectionRefs.current[section.id] = el} // Assign ref for IntersectionObserver
            className="mb-12 pt-16 -mt-16" // pt and -mt for scroll offset if you have a sticky header
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
              {section.categoryTitle}
            </h2>
            <div className="space-y-4">
              {section.questions.map((q, index) => (
                <FAQItem
                  key={`${section.id}-q-${index}`}
                  id={`${section.id}-q-${index}`} // Unique ID for aria-controls
                  question={q.question}
                  answer={q.answer}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
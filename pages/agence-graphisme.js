import React, { useCallback, useEffect, useState } from 'react';
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer';
import Video from '../components/Video'; // Assuming Video is a component that renders a video
import GraphismeHeader from '../components/GraphismeHeader';  // Assuming GraphismeHeader is a component that renders the header
import BrandingSection from '../components/BrandingSection';
import VisualIdentityBenefits from '../components/VisualIdentityBenefits';
import CreationLogo from '../components/CreationLogo';
import PricingSolution from '../components/PricingSolution';
import DesignProcess from '../components/DesignProcess';
import ProcessTimeline from '../components/ProcessTimeline';
import TestimonialCarousel from '../components/testimonial-carousel';
import CaseStudySlider from '../components/case-study-slider';
import TestimonialCard from '../components/testimonial-card'; // Assuming this is a component for individual testimonials
import FAQSection from '../components/FAQ-section'; // Assuming this is the FAQ section component

function AgenceGraphisme() { // Renamed for clarity if this is intended to be a page component
  return (
    <div>
      <GraphismeHeader />
      {/* <FAQList /> */}
      <BrandingSection />
      <VisualIdentityBenefits />
      <Video />
      <CreationLogo />
      <PricingSolution />
      <DesignProcess />
      <ProcessTimeline />
      <TestimonialCarousel />
      <TestimonialCard />
      <FAQSection/>
      <ContactUs/>
      <Footer/>

    </div>
  );
}

export default AgenceGraphisme;
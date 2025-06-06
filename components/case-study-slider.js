"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function CaseStudySlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const caseStudies = [
    {
      id: 1,
      logo: "/placeholder.svg?height=200&width=200",
      logoAlt: "REPÈRE logo",
      logoText: "R E P È R E",
      logoColor: "bg-green-600",
      quote: "Ils ont été très réactifs et on su me proposer ce qui correspondait exactement à mon besoin.",
      author: "ERIC JURION",
      position: "GÉRANT LE REPÈRE",
    },
    {
      id: 2,
      logo: "/placeholder.svg?height=200&width=200",
      logoAlt: "CHAUFF'TAJ logo",
      logoText: "CHAUFF'TAJ",
      logoColor: "bg-orange-500",
      quote: "Très professionnel, très réactif, je recommande vivement à 100% !",
      author: "MARTIN DUBOIS",
      position: "DIRECTEUR CHAUFF'TAJ",
    },
    {
      id: 3,
      logo: "/placeholder.svg?height=200&width=200",
      logoAlt: "Belle Demoiselle logo",
      logoText: "BELLE DEMOISELLE",
      logoColor: "bg-pink-500",
      quote: "Ravie d'avoir travaillé avec l'agence ! Le personnel a été réactif à tout moment.",
      author: "SOPHIE LAURENT",
      position: "FONDATRICE BELLE DEMOISELLE",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === caseStudies.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? caseStudies.length - 1 : prev - 1))
  }

  // Calculate previous and next slide indices
  const prevIndex = currentSlide === 0 ? caseStudies.length - 1 : currentSlide - 1
  const nextIndex = currentSlide === caseStudies.length - 1 ? 0 : currentSlide + 1

  return (
    <section className="relative bg-sky-50 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main slider container */}
        <div className="relative flex items-center">
          {/* Previous slide (partially visible) */}
          <div className="absolute left-0 w-1/6 h-full opacity-30 transform -translate-x-1/2">
            <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-full bg-gray-200"></div>
            </div>
          </div>

          {/* Navigation button - Previous */}
          <button
            onClick={prevSlide}
            className="absolute left-4 z-10 w-12 h-12 rounded-full bg-purple-900 text-white flex items-center justify-center shadow-lg focus:outline-none"
            aria-label="Previous case study"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Current slide */}
          <div className="flex w-full">
            {/* Logo side */}
            <div className="w-2/5 bg-white rounded-l-lg shadow-lg overflow-hidden">
              <div className="h-full flex flex-col items-center justify-center p-8 bg-gray-100">
                <div
                  className={`w-40 h-40 ${caseStudies[currentSlide].logoColor} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <div className="text-white text-4xl font-bold border-2 border-white w-24 h-24 rounded-full flex items-center justify-center">
                    R
                  </div>
                </div>
                <div className="text-center text-green-600 text-2xl font-bold tracking-widest">
                  {caseStudies[currentSlide].logoText}
                </div>
              </div>
            </div>

            {/* Content side */}
            <div className="w-3/5 bg-sky-100 rounded-r-lg shadow-lg p-12 flex flex-col justify-between">
              <div>
                <blockquote className="text-3xl font-light text-sky-500 mb-8 leading-relaxed">
                  "{caseStudies[currentSlide].quote}"
                </blockquote>
                <div className="text-gray-700 uppercase font-semibold">
                  {caseStudies[currentSlide].author} - {caseStudies[currentSlide].position}
                </div>
              </div>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex items-center px-6 py-3 rounded-full bg-sky-400 text-white font-medium hover:bg-sky-500 transition-colors"
                >
                  Voir l'étude de cas
                  <svg
                    className="ml-2 w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation button - Next */}
          <button
            onClick={nextSlide}
            className="absolute right-4 z-10 w-12 h-12 rounded-full bg-purple-900 text-white flex items-center justify-center shadow-lg focus:outline-none"
            aria-label="Next case study"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Next slide (partially visible) */}
          <div className="absolute right-0 w-1/6 h-full opacity-30 transform translate-x-1/2">
            <div className="h-full bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="w-full h-full bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

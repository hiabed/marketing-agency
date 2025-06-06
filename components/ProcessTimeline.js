"use client"
import { useEffect, useState } from "react"

export default function ProcessTimeline() {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("timeline-section")
      if (!element) return

      const rect = element.getBoundingClientRect()
      const elementTop = rect.top
      const elementHeight = rect.height
      const windowHeight = window.innerHeight

      // Start animation when section comes into view
      const startPoint = windowHeight - elementTop
      const progress = Math.max(0, Math.min(1, startPoint / (elementHeight + windowHeight * 0.5)))

      setScrollProgress(progress)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const steps = [
    {
      number: 1,
      title: "Prise de brief",
      description:
        "Afin de créer une image qui vous ressemble, définissez vos objectifs et vos préférences avec un expert ALEO.",
      side: "right",
      image: "https://www.aleo.agency/_nuxt/image/2327d1.png"
    },
    {
      number: 2,
      title: "Création de votre logo et de vos visuels",
      description:
        "2 jours de logos créés pour vous ! Votre graphiste dédié vous propose créer votre logo et comprendre vos besoins à votre activité.",
      side: "left",
      image: "https://www.aleo.agency/_nuxt/image/11616d.png"
    },
    {
      number: 3,
      title: "Validation de votre logo",
      description:
        "Nous vous envoyons votre logo en présentation avec vous, préférez celui qui vous plaît le plus comprendre parfaitement.",
      side: "right",
      image: "https://www.aleo.agency/_nuxt/image/10a11d.png"
    },
    {
      number: 4,
      title: "Livraison des différents formats",
      description: "Nous vous envoyons logo, réalisé en tous les formats dont vous avez besoin (vectoriel) !",
      side: "left",
      image: "https://www.aleo.agency/_nuxt/image/e21045.png"
    },
  ]

  const totalHeight = steps.length * 180 + 110

  return (
    <section id="timeline-section" className="py-16 px-4 bg-gradient-to-b from-sky-100 to-sky-200 min-h-screen">
      <div className="max-w-5xl mx-auto">
        {/* Timeline Container */}
        <div className="relative" style={{ minHeight: `${totalHeight}px` }}>
          {/* Background Timeline Line (Gray) */}
          <div
            className="absolute left-1/2 transform -translate-x-px w-0.5 bg-gray-400"
            style={{
              height: `${totalHeight}px`,
              top: "196px",
            }}
          ></div>

          {/* Animated Timeline Line (Red) - fills as you scroll */}
          <div
            className="absolute left-1/2 transform -translate-x-px w-0.5 bg-red-500 transition-all duration-200 ease-out"
            style={{
              height: `${Math.min(scrollProgress * (totalHeight - 50), totalHeight - 50)}px`,
              top: "196px",
            }}
          ></div>

          {/* Header positioned on the left side */}
          <div className="absolute left-0 top-0 w-1/2 pr-16">
            <p className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-2">
              LE DESIGN GRAPHIQUE CHEZ ALEO
            </p>
            <h2 className="text-2xl font-bold text-gray-900">
              Comment ça <span className="text-red-500">marche</span> ?
            </h2>
          </div>

          {/* Steps */}
          {steps.map((step, index) => {
            const stepProgress = scrollProgress > (index + 0.5) / steps.length ? 1 : 0

            return (
              <div
                key={step.number}
                className="relative"
                style={{
                  marginTop: `5px`,
                }}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full border-2 border-white transition-all duration-300 z-20 ${
                    stepProgress > 0 ? "bg-red-500" : "bg-gray-400"
                  }`}
                  style={{ top: "190px" }}
                ></div>

                {/* Step Content */}
                <div className="grid grid-cols-2 gap-0 items-start">
                  {step.side === "right" ? (
                    <>
                      {/* Left side - Empty for right-aligned steps */}
                      <div></div>

                      {/* Right side - Content */}
                      <div className="pl-16 flex items-start gap-6">
                        {/* Image - Made bigger */}
                        <div className="w-64 bg-gray-400 rounded-lg shadow-md flex-shrink-0 mt-1">
                          <img
                            src={step.image}
                            alt={`Étape ${step.number}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>

                        {/* Text Content */}
                        <div className="flex-1">
                          <div className="mb-3">
                            <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                              ÉTAPE {step.number}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{step.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Left side - Content */}
                      <div className="pr-16 flex items-start gap-6 justify-end text-right">
                        {/* Text Content */}
                        <div className="flex-1">
                          <div className="mb-3">
                            <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                              ÉTAPE {step.number}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">{step.title}</h3>
                          <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                        </div>

                        {/* Image - Made bigger */}
                        <div className="w-64 bg-gray-400 rounded-lg shadow-md flex-shrink-0 mt-1">
                          <img
                            src={step.image}
                            alt={`Étape ${step.number}`}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>

                      {/* Right side - Empty for left-aligned steps */}
                      <div></div>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

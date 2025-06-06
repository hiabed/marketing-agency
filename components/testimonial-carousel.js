"use client"

export default function TestimonialCarousel() {
  const testimonials = [
    {
      stars: 5,
      text: "Ravie d'avoir travaillé et d'avoir fait confiance à l'agence ! J'ai un logo plus qu'au top, le personnel a été réactif à tout moment quant à la création des différentes choses que j'avais demandées !",
      author: "Institut Belle Demoiselle",
    },
    {
      stars: 5,
      text: "Très content de notre collaboration. La création de mon logo a déclenché la création de sacs et pleins d'autres goodies. J'ai pu grâce à ALEO, remoderniser mon identité visuelle, et mes clients adorent les cartes de visite.",
      author: "LE REPÈRE",
    },
    {
      stars: 5,
      text: "Très professionnel, très réactif, je recommande vivement à 100 % !",
      author: "CHAUFF'TAJ",
    },
    {
      stars: 5,
      text: "Ravie d'avoir travaillé et d'avoir fait confiance à l'agence ! J'ai un logo plus qu'au top, le personnel a été réactif à tout moment quant à la création des différentes choses que j'avais demandées !",
      author: "Institut Belle Demoiselle",
    },
  ]

  // Duplicate testimonials for seamless loop
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-sky-50 to-sky-100">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-red-500 text-sm font-semibold uppercase tracking-wide mb-4">
            LES AVIS DES CLIENTS ALEO, VOTRE AGENCE DE COMMUNICATION DIGITALE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">
            Plus de <span className="text-red-500">15 000</span> entrepreneurs
            <br />
            nous font confiance
          </h2>
          <p className="text-gray-600 text-lg">Artisans, créateurs, indépendants...</p>
        </div>

        {/* Testimonial Carousel with Edge Shadows */}
        <div className="relative overflow-hidden">
          {/* Left Shadow Gradient */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-sky-100 via-sky-100/80 to-transparent z-10 pointer-events-none"></div>

          {/* Right Shadow Gradient */}
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-sky-100 via-sky-100/80 to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-scroll hover:pause-animation">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-96 bg-white rounded-lg p-6 shadow-md mx-2">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-purple-800" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{testimonial.text}</p>

                {/* Author */}
                <p className="font-semibold text-purple-900 uppercase text-sm">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Google Rating */}
        <div className="flex items-center justify-center mt-12">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-2 text-gray-700 font-medium">4.6/5 sur Google Avis</span>
            <span className="ml-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .pause-animation:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

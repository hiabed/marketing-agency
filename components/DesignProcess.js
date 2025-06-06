import { CheckCircle, Pencil, Sparkles } from "lucide-react"

export default function DesignProcess() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Designer image with decorative elements */}
          <div className="relative">
            {/* image */}
            <img
              src="https://www.aleo.agency/_nuxt/img/746778a.png"
              alt="Graphic Designer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right side - Process steps */}
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-l font-bold text-gray-900 mb-2">Prise de brief par un graphiste dédié</h3>
                <p className="text-gray-600">
                  Afin de créer un logo qui vous corresponde, définissez vos attentes et vos objectifs avec un expert
                  ALEO.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-l font-bold text-gray-900 mb-2">Création graphique</h3>
                <p className="text-gray-600">
                  Votre graphiste dédié vous proposera différentes pistes créatives pour que vous puissiez choisir celle
                  qui vous convient le plus.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
              <div className="flex-shrink-0 mt-1">
                <CheckCircle className="h-6 w-6 text-red-500" />
              </div>
              <div>
                <h3 className="text-l font-bold text-gray-900 mb-2">Retouches et livraison</h3>
                <p className="text-gray-600">
                  Nous vous envoyons différentes propositions de logo et effectuons des retouches afin qu'il soit
                  conforme à vos attentes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

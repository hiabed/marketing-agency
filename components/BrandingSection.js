import Image from "next/image"
import { Lightbulb, Award, Network } from "lucide-react"
import styles from "../styles/BrandingSection.module.css"

export default function BrandingSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <div className={styles.content}>
            {/* Header */}
            <div className={styles.header}>
              <p className={styles.headerText}>UNE IDENTITÉ VISUELLE UNIQUE AVEC L'AGENCE DE GRAPHISME ALEO</p>
              <h1 className={styles.title}>
                <span className={styles.titleBlue}>Partagez votre</span>
                <br />
                <span className={styles.titlePurple}>meilleure</span> <span className={styles.titleBlue}>image</span>
              </h1>
            </div>

            {/* Features */}
            <div className={styles.features}>
              {/* Feature 1 */}
              <div className={styles.feature}>
                <img width="72" height="72" src="https://www.aleo.agency/_nuxt/img/9b6ef6d.svg" alt="Retour sur investissement" loading="lazy" class="ml-auto mr-auto md:ml-0 md:mr-0"></img>
                <div className={styles.featureContent}>
                  <h3>Un logo personnalisé</h3>
                  <p>Obtenez un logo 100% personnalisé adapté à votre activité.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className={styles.feature}>
                <img width="72" height="72" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzYiIGN5PSIzNiIgcj0iMzYiIGZpbGw9IiNENUVCRkQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM4Ljc4IDE4Ljg1M2ExLjI1IDEuMjUgMCAwIDEgMi4zMDguOTZsLTEuNzMzIDQuMTY3YTEuMjUgMS4yNSAwIDEgMS0yLjMwOC0uOTZsMS43MzMtNC4xNjdabTYuMDc3LS4wMjVhMS4yNSAxLjI1IDAgMCAxIDIuMjg3IDEuMDFMNDEuNDIgMzIuODA1YTExLjI0NyAxMS4yNDcgMCAwIDEgNS44MyA5Ljg2MmMwIDYuMjEzLTUuMDM2IDExLjI1LTExLjI1IDExLjI1LTYuMjEyIDAtMTEuMjUtNS4wMzctMTEuMjUtMTEuMjVhMTEuMjQgMTEuMjQgMCAwIDEgNS4xMzItOS40NDNsLTYuNjY2LTEzLjMzMmExLjI1IDEuMjUgMCAwIDEgMi4yMzYtMS4xMThsNi42NjYgMTMuMzNjLjk4NC0uMzYxIDIuMDMzLS41OSAzLjEyNS0uNjYybC01LjY0LTExLjU2YTEuMjUgMS4yNSAwIDAgMSAyLjI0Ni0xLjA5N2w2LjI2IDEyLjgyOWMuMzM4LjA2NC42NzIuMTQzIDEgLjIzN2w1Ljc0OC0xMy4wMjNabS0uMTA2IDIzLjgzOWE4Ljc1MiA4Ljc1MiAwIDAgMC04Ljc1LTguNzUgOC43NSA4Ljc1IDAgMSAwIDguNzUgOC43NVpNMzYuMDg0IDM3LjVhMS4yNSAxLjI1IDAgMCAxIDIgMXY4LjMzM2ExLjI1IDEuMjUgMCAwIDEtMi41IDBWNDFsLTEuMzMzIDFhMS4yNSAxLjI1IDAgMSAxLTEuNS0ybDMuMzMzLTIuNVoiIGZpbGw9IiMzOTA3M0YiLz48L3N2Zz4=" alt="Retour sur investissement" loading="lazy"></img>
                <div className={styles.featureContent}>
                  <h3>Un graphiste dédié</h3>
                  <p>Bénéficiez du savoir-faire et de la créativité d'un graphiste dédié.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className={styles.feature}>
                <img width="72" height="72" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIiIGhlaWdodD0iNzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzYiIGN5PSIzNiIgcj0iMzYiIGZpbGw9IiNENUVCRkQiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTM2IDIzLjA4M2E1LjQxNyA1LjQxNyAwIDEgMCAwIDEwLjgzNCA1LjQxNyA1LjQxNyAwIDAgMCAwLTEwLjgzNFpNMjguMDgzIDI4LjVhNy45MTcgNy45MTcgMCAxIDEgMTUuODM0IDAgNy45MTcgNy45MTcgMCAwIDEtMTUuODM0IDBabS0uNDE2IDkuNTgzYTUuNDE3IDUuNDE3IDAgMSAwIDAgMTAuODM0IDUuNDE3IDUuNDE3IDAgMCAwIDAtMTAuODM0Wk0xOS43NSA0My41YTcuOTE3IDcuOTE3IDAgMSAxIDE1LjgzMyAwIDcuOTE3IDcuOTE3IDAgMCAxLTE1LjgzMyAwWm0xOS4xNjcgMGE1LjQxNyA1LjQxNyAwIDEgMSAxMC44MzMgMCA1LjQxNyA1LjQxNyAwIDAgMS0xMC44MzMgMFptNS40MTYtNy45MTdhNy45MTcgNy45MTcgMCAxIDAgMCAxNS44MzQgNy45MTcgNy45MTcgMCAwIDAgMC0xNS44MzRaIiBmaWxsPSIjMzkwNzNGIi8+PC9zdmc+" alt="Retour sur investissement" loading="lazy"></img>
                <div className={styles.featureContent}>
                  <h3>Une identité de marque cohérente</h3>
                  <p>Construisez une identité visuelle cohérente sur l'ensemble de vos supports.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <Image
                src="/side_image.jpg"
                alt="Showcase of various logo designs and branding materials"
                width={600}
                height={400}
                className={styles.image}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

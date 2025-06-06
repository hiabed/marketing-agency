import { ArrowRight } from "lucide-react"
import styles from "../styles/CreationLogo.module.css"

export default function CreationLogo() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Content */}
          <div className={styles.content}>
            <p className={styles.headerText}>L'AGENCE DE CRÉATION DE LOGOS ET DE VISUELS DES PROS</p>
            <h1 className={styles.title}>
              Une logo <span className={styles.titleRed}>pro</span> ?<br />
              Un graphiste <span className={styles.titleRed}>pro</span> !
            </h1>
            <p className={styles.description}>
              Un graphiste s'occupe pour vous de la création de votre logo. Vous avez une idée ? On la concrétise !
            </p>
            <button className={styles.ctaButton}>
              Prendre rendez-vous
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Right Testimonial */}
          <div className={styles.testimonialContainer}>
            <div className={styles.imageWrapper}>
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Patrice - Graphiste professionnel"
                className={styles.designerImage}
              />
              <div className={styles.testimonialBubble}>
                <p className={styles.quote}>"Je crée des logos uniques et mémorables"</p>
                <p className={styles.author}>PATRICE - GRAPHISTE</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
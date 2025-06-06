import { Globe, Heart, Rocket } from "lucide-react"
import styles from "../styles/VisualIdentityBenefits.module.css"

export default function VisualIdentityBenefits() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.headerText}>UNE IDENTITÉ VISUELLE, POURQUOI ?</p>
          <h2 className={styles.title}>
            <span className={styles.titlePurple}>Votre entreprise </span>
            <span className={styles.titleRed}>mérite</span>
            <br />
            <span className={styles.titlePurple}>un logo unique</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className={styles.cardsGrid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <Globe className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Renforcez l'image de votre entreprise</h3>
            <p className={styles.cardDescription}>
              Marquez vos clients et devenez reconnaissable au premier coup d'œil.
            </p>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <Heart className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Rassurez et fidélisez vos clients</h3>
            <p className={styles.cardDescription}>Communiquez avec une image professionnelle et moderne.</p>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={styles.iconContainer}>
              <Rocket className={styles.icon} />
            </div>
            <h3 className={styles.cardTitle}>Démarquez-vous de vos concurrents</h3>
            <p className={styles.cardDescription}>Sortez du lot grâce à une identité unique qui fera la différence.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

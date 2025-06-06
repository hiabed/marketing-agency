import { ArrowRight } from "lucide-react"
import styles from "../styles/PricingSolution.module.css"

export default function PricingSolution() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <p className={styles.headerText}>POURQUOI FAIRE APPEL À ALEO POUR SON IDENTITÉ VISUELLE ?</p>
          <h2 className={styles.title}>
            ALEO vous propose une
            <br />
            solution <span className={styles.titleRed}>clé en main</span>
          </h2>
          <p className={styles.subtitle}>Quels que soient vos besoins, on a une solution ALEO !</p>
        </div>

        {/* Pricing Card */}
        <div className={styles.pricingCard}>
          <p className={styles.priceLabel}>Votre logo pro pour</p>
          <div className={styles.priceContainer}>
            <h3 className={styles.price}>400</h3>
            <span className={styles.currency}>€</span>
          </div>
          <p className={styles.taxInfo}>HT</p>
          <p className={styles.priceDescription}>Marquez les esprits de vos clients dès maintenant</p>
          <button className={styles.ctaButton}>
            Je lance mon projet
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}

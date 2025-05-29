import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          {/* ALEO Logo */}
          <div className={styles.logoSection}>
            <h2 className={styles.logo}>ALEO</h2>
          </div>

          {/* Solutions ALEO */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Solutions ALEO</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#" className={styles.footerLink}>
                  Site web
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Référencement naturel
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Fiche d'établissement Google
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Publicité Réseaux sociaux
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Publicité sur Google
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Logo et supports imprimés
                </a>
              </li>
            </ul>
          </div>

          {/* À propos */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>À propos</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#" className={styles.footerLink}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  ALEO
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Recrutement
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Programme partenaire
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Parrainer un pro
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Nos standards publicitaires
                </a>
              </li>
            </ul>
          </div>

          {/* En savoir plus */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>En savoir plus</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="#" className={styles.footerLink}>
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#" className={styles.footerLink}>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className={styles.footerColumn}>
            <h3 className={styles.columnTitle}>Nous suivre :</h3>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialLink} aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="YouTube">
                <Youtube size={20} />
              </a>
              <a href="#" className={styles.socialLink} aria-label="TikTok">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>©2025 ALEO Agency — Tous droits réservés</div>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>
              Accueil
            </a>
            <a href="#" className={styles.legalLink}>
              Conditions Générales de Vente
            </a>
            <a href="#" className={styles.legalLink}>
              Mentions légales
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

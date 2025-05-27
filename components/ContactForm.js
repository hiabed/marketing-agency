"use client"

import { useState } from "react"
import styles from "./ContactForm.module.css"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    prenomNom: "",
    entreprise: "",
    telephone: "",
    email: "",
    commentaires: "",
    avezEntreprise: "",
    accepteConditions: false,
  })

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Contactez-nous</h2>
        <p className={styles.formDescription}>Remplissez ce formulaire pour être recontacté par l'un de nos experts.</p>
      </div>

      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="prenomNom" className={styles.formLabel}>
              Prénom et Nom*
            </label>
            <input
              type="text"
              id="prenomNom"
              name="prenomNom"
              value={formData.prenomNom}
              onChange={handleInputChange}
              className={styles.formInput}
              placeholder="------"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="entreprise" className={styles.formLabel}>
              Nom de votre entreprise
            </label>
            <input
              type="text"
              id="entreprise"
              name="entreprise"
              value={formData.entreprise}
              onChange={handleInputChange}
              className={styles.formInput}
              placeholder="------"
            />
          </div>
        </div>

        <div className={styles.formRow}>
          <div className={styles.formGroup}>
            <label htmlFor="telephone" className={styles.formLabel}>
              Téléphone*
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleInputChange}
              className={styles.formInput}
              placeholder="----------"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.formLabel}>
              Adresse email*
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={styles.formInput}
              placeholder="mon-adresse@email.com"
              required
            />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="commentaires" className={styles.formLabel}>
            Commentaires (optionnel)
          </label>
          <div className={styles.textareaLabel}>Parlez-nous de votre projet !</div>
          <textarea
            id="commentaires"
            name="commentaires"
            value={formData.commentaires}
            onChange={handleInputChange}
            className={styles.formTextarea}
            rows="4"
          ></textarea>
        </div>

        <div className={styles.questionGroup}>
          <label className={styles.questionLabel}>Vous avez votre entreprise ?*</label>
          <div className={styles.buttonGroup}>
            <button
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, avezEntreprise: "oui" }))}
              className={`${styles.choiceButton} ${formData.avezEntreprise === "oui" ? styles.choiceButtonActive : ""}`}
            >
              OUI
            </button>
            <button
              type="button"
              onClick={() => setFormData((prev) => ({ ...prev, avezEntreprise: "non" }))}
              className={`${styles.choiceButton} ${formData.avezEntreprise === "non" ? styles.choiceButtonActive : ""}`}
            >
              NON
            </button>
          </div>
        </div>

        <div className={styles.checkboxGroup}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="accepteConditions"
              checked={formData.accepteConditions}
              onChange={handleInputChange}
              className={styles.checkbox}
              required
            />
            <span className={styles.checkboxText}>
              J'accepte les conditions générales d'utilisation et la politique de confidentialité
            </span>
          </label>
        </div>

        <button type="submit" className={styles.submitButton}>
          Être recontacté →
        </button>
      </form>
    </div>
  )
}

export default ContactForm

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
        <p className={styles.formDescription}>Remplissez ce formulaire pour être recontacté<br/> par l'un de nos experts.</p>
      </div>
      <iframe 
        title="Embedded form" 
        frameborder="0" 
        src="https://qk45j2zt.paperform.co/?embed=1&takeover=0&inline=1&popup=0&_d=www.aleo.agency&_in=0&page_url=https://www.aleo.agency/foire-aux-questions/&utm_source=undefined&utm_medium=undefined&utm_campaign=undefined&utm_content=undefined&sc=undefined&utm_term=undefined&id_form1=undefined&email=undefined&telephone=undefined&name=" 
        width="100%" 
        height="612px"
        allowfullscreen 
        allowpaymentrequest 
        allow="geolocation *;camera *;microphone *;">
      </iframe>
    </div>
  )
}

export default ContactForm

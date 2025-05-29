"use client"

import styles from "../styles/ContactForm.module.css"

const ContactForm = () => {
  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2 className={styles.formTitle}>Contactez-nous</h2>
        <p className={styles.formDescription}>Remplissez ce formulaire pour être recontacté<br/> par l'un de nos experts.</p>
      </div>
      <iframe
        height="612"
        className={styles.frame}
        title="Embedded form" 
        frameborder="0" 
        width="100%"
        src="https://qk45j2zt.paperform.co/?embed=1&takeover=0&inline=1&popup=0&_d=www.aleo.agency&_in=0&page_url=https://www.aleo.agency/foire-aux-questions/&utm_source=undefined&utm_medium=undefined&utm_campaign=undefined&utm_content=undefined&sc=undefined&utm_term=undefined&id_form1=undefined&email=undefined&telephone=undefined&name=" 
        allowfullscreen 
        allowpaymentrequest >
      </iframe>
    </div>
  )
}

export default ContactForm

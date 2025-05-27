"use client"

import React, { useState, useEffect } from "react"
import styles from "./ContactUs.module.css"
import ContactForm from "./ContactForm"

const ContactUs = () => {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.container}>
        <img className={styles.image} src="img.jpg"></img>
        <div className={styles.subContainer}>
          <div className={styles.grandson}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs;

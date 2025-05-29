import React, { useCallback, useEffect, useState } from 'react';
import styles from '../styles/agence-graphisme.module.css';
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer';
import FAQList from '../components/FAQList';

function AgenceGraphisme() { // Renamed for clarity if this is intended to be a page component
  return (
    <div>
      <section className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>replace me</h1>
          <h2 className={styles.subtitle}>replace me</h2>
          <p className={styles.paragraph}>replace me</p>
          <button className={styles.contact_button}>Nous contacter</button>
        </div>
      </section>
      {/* <FAQList /> */}
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default AgenceGraphisme;
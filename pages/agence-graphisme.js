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
          <h1 className={styles.title}>Studio graphique | Agence de graphisme</h1>
          <h2 className={styles.subtitle}>Un logo percutant pour rassurer ses clients</h2>
          <p className={styles.paragraph}>Unique et impactant, un logo pro vous permet de vous différencier et de marquer les esprits de vos clients.</p>
          <div className={styles.buttons}>
            <button className={styles.contact_button}>Recevoir nos offres</button>
            <button className={styles.contact_button}>Prendre rendez-vous</button>
          </div>
          <img className={styles.logos} src='https://www.aleo.agency/_nuxt/img/be232eb.png'></img>
          <img className={styles.woman} src='https://www.aleo.agency/_nuxt/img/d16665b.png'></img>
        </div>
      </section>
      {/* <FAQList /> */}
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default AgenceGraphisme;
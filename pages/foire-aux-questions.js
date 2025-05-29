// Assuming this file is, for example, pages/foire-aux-questions.js or a component used elsewhere
// If it's a page, the filename dictates the route.

import { useCallback, useEffect, useState } from 'react'; // These were in your original code, keep if needed for other things in this component
import styles from '../styles/foire-aux-questions.module.css'; // The './' indicates the current directory
import ContactUs from '../components/ContactUs'
import Footer from '../components/Footer';
import FAQList from '../components/FAQList';

function FaqPage() {
  return (
    <div>
      <section className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Foire aux questions ALEO</h1>
          <h2 className={styles.subtitle}>Une question ? Une réponse !</h2>
          <p className={styles.paragraph}>Retrouvez ci-dessous toutes nos explications et contactez-nous pour plus d’informations.</p>
          <button className={styles.contact_button}>Nous contacter</button>
        </div>
      </section>
      <FAQList />
      <ContactUs/>
      <Footer/>
    </div>
  );
}

export default FaqPage;
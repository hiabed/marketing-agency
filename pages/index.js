// Assuming this file is, for example, pages/foire-aux-questions.js or a component used elsewhere
// If it's a page, the filename dictates the route.

import { useCallback, useEffect, useState } from 'react'; // These were in your original code, keep if needed for other things in this component
import Button from '../components/Button'; // From your original code
import ClickCount from '../components/ClickCount'; // From your original code
import styles from './index.module.css'; // The './' indicates the current directory
import ContactUs from '../components/ContactUs'
// Import the FAQList component we created
import FAQList from '../components/FAQList'; // Adjust path if your components folder is structured differently

// Your main component, now named to reflect it might be a page or a self-contained FAQ section
function FaqPage() { // Renamed for clarity if this is intended to be a page component
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
      {/* <ClickCount /> */}
      {/* <Button onClick={throwError}>Test Error</Button> */}
    </div>
  );
}

export default FaqPage; // If this is a page in the `pages` directory, export default is important
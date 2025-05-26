// FAQList.js
"use client";

import { useState } from "react";
import { Plus } from 'lucide-react'; // Assuming you still want to use Plus and handle rotation via CSS
import styles from './FAQList.module.css'; // Assuming this CSS file exists and is correctly styled

const faqData = [
  {
    question: "Est-il possible de modifier mon site internet ALEO après sa réalisation ?",
    answer:
      "Oui, il est tout à fait possible de modifier votre site internet après sa réalisation. Nous proposons des services de maintenance et de mise à jour pour que votre site reste toujours actuel et performant.",
  },
  {
    question: "Quel est le prix de la création d'un site web ?",
    answer:
      "Le prix de création d'un site web varie selon vos besoins spécifiques, les fonctionnalités souhaitées et la complexité du projet. Nous vous proposons un devis personnalisé après étude de votre projet.",
  },
  {
    question: "Pour la refonte de mon site internet, puis-je me tourner vers ALEO ?",
    answer:
      "Absolument ! ALEO accompagne les entreprises dans la refonte complète de leur site internet. Nous analysons votre site actuel et proposons des améliorations adaptées à vos objectifs.",
  },
  {
    question: "Proposez-vous des designs personnalisés ou utilisez-vous des templates ?",
    answer:
      "Nous proposons les deux options selon vos besoins et votre budget. Nous pouvons créer des designs entièrement personnalisés ou adapter des templates premium à votre identité visuelle.",
  },
];

const FAQList = () => {
  // Removed TypeScript type annotation: <number | null>
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.faqTitle}>Site Internet</h2>
      
      <div className={styles.faqList}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <button
              onClick={() => setOpenFaq(openFaq === index ? null : index)}
              className={styles.faqButton}
              // For accessibility, it's good to indicate the expanded state
              aria-expanded={openFaq === index}
              aria-controls={`faq-answer-${index}`}
            >
              <span className={styles.faqQuestion}>{item.question}</span>
              <Plus
                className={`${styles.faqIcon} ${openFaq === index ? styles.faqIconRotated : ''}`}
                // You might want to change the icon based on state, e.g. <Minus /> when open
                // Or handle the + to - transformation purely with CSS on .faqIconRotated
              />
            </button>

            {/*
              If you want a CSS transition for opening/closing,
              this conditional rendering approach will make it harder.
              You might need to always render the div and toggle a class for max-height animation,
              as discussed in previous examples.
              However, if you're okay with instant show/hide, this is fine.
            */}
            {openFaq === index && (
              <div id={`faq-answer-${index}`} className={styles.faqAnswer}>
                <div className={styles.faqAnswerContent}>
                  <p>{item.answer}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQList;
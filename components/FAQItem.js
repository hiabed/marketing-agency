"use client";

import { useState } from "react";
import { Plus, Minus } from 'lucide-react'; // Import Minus as well
import styles from './FAQItem.module.css'; // We'll create this CSS file

const FaqItem = ({ question, answer, id }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={styles.faqButton}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${id}`}
      >
        <span className={styles.faqQuestion}>{question}</span>
        {isOpen ? (
          <Minus className={`${styles.faqIcon} ${styles.faqIconOpen}`} />
        ) : (
          <Plus className={`${styles.faqIcon} ${styles.faqIconClosed}`} />
        )}
      </button>
      {/* For smooth animation, we always render the answer div and control with CSS */}
      <div
        id={`faq-answer-${id}`}
        className={`${styles.faqAnswerWrapper} ${isOpen ? styles.faqAnswerWrapperOpen : ''}`}
      >
        <div className={styles.faqAnswerContent}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FaqItem;
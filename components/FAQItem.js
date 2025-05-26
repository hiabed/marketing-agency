import { useState } from 'react';
import styles from './FAQItem.module.css';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.faqItem}>
      <button
        className={styles.questionHeader}
        onClick={toggleOpen}
        aria-expanded={isOpen} // For accessibility
        aria-controls={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`} // For accessibility
      >
        <span className={styles.questionText}>{question}</span>
        <span className={styles.icon} aria-hidden="true"> {/* Decorative icon */}
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        id={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`} // For accessibility
        className={`${styles.answer} ${isOpen ? styles.answerOpen : ''}`}
      >
        <div className={styles.answerContent}>
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
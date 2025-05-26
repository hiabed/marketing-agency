import styles from './FAQList.module.css';
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/react';


const faqData = [
  {
    question: "Est-il possible de modifier mon site internet ALEO après sa réalisation ?",
    answer: "Nous comprenons que votre entreprise est en constante évolution. Chez ALEO, nous concevons votre site internet et effectuons des modifications de contenu de manière ponctuelle en fonction de vos besoins.Que vous ayez besoin de rafraîchir certaines pages de votre site, d'ajuster votre contenu, ou de changer une image, notre équipe d'éditeurs de site est à votre service pour effectuer ces modifications. Avec un design responsive, votre site s'adapte parfaitement aux ordinateurs, tablettes et mobiles. Nous souhaitons que votre site internet reste une vitrine pertinente et efficace, alignée avec l'évolution de votre entreprise."
  },
  {
    question: "Une deuxième question pour l'exemple ?",
    answer: "Absolument ! Voici la réponse pour la deuxième question, illustrant le fonctionnement de l'accordéon."
  },
  {
    question: "Une deuxième question pour l'exemple ?",
    answer: "Absolument ! Voici la réponse pour la deuxième question, illustrant le fonctionnement de l'accordéon."
  },
];

const FAQList = () => {
  return (
    // You can add a container class here if you need specific layout for the whole list
    // <div className={styles.faqListContainer}>
    <div>
      <CAccordion alwaysOpen={false}> {/* `alwaysOpen={false}` makes it behave like a typical accordion (only one item open at a time). Remove or set to true to allow multiple open. */}
        {faqData.map((faqItem, index) => (
          <CAccordionItem itemKey={faqItem.id || index} key={faqItem.id || index}>
            <CAccordionHeader>
              {faqItem.question}
            </CAccordionHeader>
            <CAccordionBody>
              {/* The default styling for CAccordionBody might not use a <p> tag,
                  so wrapping in <p> is good for semantic HTML and consistent styling. */}
              <p>{faqItem.answer}</p>
            </CAccordionBody>
          </CAccordionItem>
        ))}
      </CAccordion>
    </div>
  );
};

export default FAQList;
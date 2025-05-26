import FAQItem from './FAQItem';
import styles from './FAQList.module.css';

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
    <div className={styles.faqContainer}>
      <h2 className={styles.faqTitle}>Foire Aux Questions</h2> {/* Or whatever title they use */}
      {faqData.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQList;
import styles from '../styles/agence-graphisme.module.css';

const GraphismeHeader = () => {
  return (
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
          <div className={styles.arrowDiv}>
            <a href='#' className={styles.link}>
              <svg className={styles.svg} width="40" height="40" viewBox="0 0 40 40" fill="#A3CCEE" xmlns="http://www.w3.org/2000/svg" data-v-51048b37=""><path fill-rule="evenodd" clip-rule="evenodd" d="M11.2315 6.30381C13.557 3.97839 16.7109 2.67188 19.9996 2.67188C23.2882 2.67188 26.4423 3.97837 28.7678 6.30381C31.0932 8.62927 32.3996 11.7832 32.3996 15.0719V24.6718C32.3996 27.9605 31.0932 31.1147 28.7678 33.4402C26.4423 35.7656 23.2882 37.0717 19.9996 37.0717C16.711 37.0717 13.5571 35.7656 11.2315 33.4402C8.90611 31.1147 7.59961 27.9606 7.59961 24.6718V15.0719C7.59961 11.7832 8.90612 8.62925 11.2315 6.30381ZM19.9996 5.07188C17.3474 5.07188 14.804 6.12549 12.9286 8.00088C11.0532 9.87626 9.99961 12.4197 9.99961 15.0719V24.6718C9.99961 27.324 11.0532 29.8677 12.9286 31.743C14.8039 33.6184 17.3473 34.6717 19.9996 34.6717C22.6519 34.6717 25.1954 33.6184 27.0706 31.743C28.946 29.8677 29.9996 27.324 29.9996 24.6718V15.0719C29.9996 12.4197 28.946 9.87624 27.0706 8.00088C25.1953 6.12551 22.6518 5.07188 19.9996 5.07188Z" data-v-51048b37=""></path> <g class={styles.container_arrow} data-v-51048b37=""><path fill-rule="evenodd" clip-rule="evenodd" d="M19.9988 9.0719C20.6615 9.0719 21.1988 9.60916 21.1988 10.2719V23.0719C21.1988 23.7346 20.6615 24.2719 19.9988 24.2719C19.3361 24.2719 18.7988 23.7346 18.7988 23.0719V10.2719C18.7988 9.60916 19.3361 9.0719 19.9988 9.0719Z" data-v-51048b37=""></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3515 17.4234C14.8201 16.9547 15.5799 16.9547 16.0485 17.4234L20 21.3749L23.9515 17.4234C24.4202 16.9547 25.1798 16.9547 25.6485 17.4234C26.1171 17.892 26.1171 18.6519 25.6485 19.1205L20.8485 23.9205C20.3798 24.389 19.6202 24.389 19.1515 23.9205L14.3515 19.1205C13.8828 18.6519 13.8828 17.892 14.3515 17.4234Z" data-v-51048b37=""></path></g></svg>
            </a>
          </div>
        </div>
      </section>
  );
}

export default GraphismeHeader;
import React from "react";
import styles from './index.module.scss';
import InputAdd from "../InputAdd";

const App = () => {
  return (
    <article className={styles.article}>
         <h1 className={styles.articleTitle}>To Do App</h1>
      <section className={styles.articleSection}>
          <InputAdd/>
      </section>
      <section className={styles.articleSection}></section>
    </article>
  );
}

export default App;

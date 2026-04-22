import Header from "./Header";
import Footer from "./Footer";
import styles from "./page.module.css";

export default function PageLayout({children}) {
  return (
    <>
      <main className={styles.main}>
        <Header/>
        {children}
        
      </main>
      <Footer/>
    </>
  );
}
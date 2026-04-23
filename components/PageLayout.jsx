import Header from "./Header";
import Footer from "./Footer";
import styles from "./page.module.css";

export default function PageLayout({children}) {
  return (
    <>
      <Header/>
      <main className={styles.main}>
        {children}
        
      </main>
      <Footer/>
    </>
  );
}
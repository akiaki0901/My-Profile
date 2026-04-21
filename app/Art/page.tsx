"use client";
import styles from "./page.module.css";
import Header from "../../components/Header";
import ButtonOpenText from "../../components/ButtonOpenText";
import Footer from "../../components/Footer"
export default function Home() {

  return (
    <main>
      <div className={styles.title_header}>
   
         <Header />
      
      </div>
      <h1 className={styles.pagetitle}>
        絵について
      </h1>
       
    </main>
  );
}
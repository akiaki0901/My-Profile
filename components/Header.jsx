import Link from "next/link";
import styles from "./page.module.css";

export default function Header() {
  return (
    <header className="header">
       <div className={styles.title_header}>
         
              <h1 className={styles.title}>
                <Link href="/" >
                  自分ページ
                </Link>
              </h1>
              <h1 className={styles.nav}>
                <Link href="/Unity" >
                  Unityについて
                </Link>
              </h1>
            
        </div>
    </header>
  );
}
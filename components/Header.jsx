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
                  Unity
                </Link>
              </h1>
                <h1 className={styles.nav}>
                <Link href="/Python" >
                  Python
                </Link>
              </h1>
              <h1 className={styles.nav}>
                <Link href="/NextJS" >
                  Next.js
                </Link>
              </h1>
              <h1 className={styles.nav}>
                <Link href="/Art" >
                  絵
                </Link>
              </h1>
        </div>
    </header>
  );
}
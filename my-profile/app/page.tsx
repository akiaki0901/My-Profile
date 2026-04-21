"use client";
import styles from './page.module.css';
import Header from "@/components/Header";

export default function Home() {
  /*const [showProfile, setShowProfile] = useState(false);*/

  return (
    <main>
      <Header />
      <h1 className={styles.pagetitle}>自己紹介</h1>

          <h2 className={styles.subtitle}>プロフィール</h2>
          <p className={styles.container}>  16歳 / プログラミング勉強中</p>

          <h2 className={styles.subtitle}>スキル</h2>
          <ul className={styles.container}>
            <li> ・ C#（Unity）</li>
            <li> ・Next.jsでJavaScriptやcss、html（最近始めた）</li>
            <li> ・Python（pygameで適当に使うGUIツール作成）</li>
          </ul>
  

      <h2 className={styles.subtitle}>趣味</h2>
      <p className={styles.container}>  ゲーム制作・絵</p>
    </main>
  );
}
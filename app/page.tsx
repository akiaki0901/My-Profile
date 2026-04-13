"use client";
import { useState } from 'react';
import styles from './page.module.css';
import Link from "next/link";
export default function Home() {
  /*const [showProfile, setShowProfile] = useState(false);*/

  return (
    <main>
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
        
      </div>
      <h1 className={styles.pagetitle}>自己紹介</h1>

          <h2 className={styles.subtitle}>プロフィール</h2>
          <p className={styles.container}>  16歳 / プログラミング勉強中</p>

          <h2 className={styles.subtitle}>スキル</h2>
          <ul className={styles.container}>
            <li>  C#（Unity）</li>
            <li>  JavaScript（最近始めた）</li>
            <li>  Python（勉強中）</li>
            <li>  Python（勉強中）</li>
          </ul>
  

      <h2 className={styles.subtitle}>趣味</h2>
      <p className={styles.container}>  ゲーム制作・絵</p>
    </main>
  );
}
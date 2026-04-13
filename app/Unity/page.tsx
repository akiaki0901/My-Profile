"use client";
import { useState } from 'react';
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
    const [showShooting, setShooting] = useState(false);
    const [showHakusla, setShowHakusla] = useState(false);
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
       <h1 className={styles.pagetitle}>
        Unityゲーム制作
      </h1>
        <div className={styles.section}>
            <div className={styles.header}>
              <h1 className={styles.subtitle}>
                  シューティングゲーム作成
              </h1>
              {!showShooting && (
                  <button onClick={() => setShooting(true)} className={styles.showButton}>
                      詳細を開く▼
                  </button>
              )}
            </div>
            {showShooting && (
                <div className={styles.section}>
                    <p className={styles.container}>
                    pythonで始めたゲーム作りですが、スマホで動くゲームが作りたいと思い、Unityを使い始めました。
                    一番最初に作ろうとしたのはpythonで作った抽象的なキャラが動くシューティングゲームです。
                    ゲーム自体はかろうじて動きましたが、C#とUnityに慣れてなくてpublicと書いたらstaticと反射で書くような作り方をしていました。
                    規模が大きくなっていくにつれて、コードがぐちゃぐちゃになったりそもそもUnityの座標を完全無視したSpriteRendererを書き換える方式
                    がつらくなってきて、詰んだのでこのゲームの製作は一旦断念しました。
                    </p>
                    <button onClick={() => setShooting(false)} className={styles.showButton}>
                        ▲詳細を閉じる
                    </button>
                </div>
            )}
        </div>
        <div className={styles.section}>
          <div className={styles.header}>
            <h1 className={styles.subtitle}>
              ハクスラダンジョンゲーム作成
            </h1>
             {!showHakusla && (<button onClick={() => setShowHakusla(!showHakusla)} className={styles.showButton}>
              詳細を開く▼
            </button>)}
          </div>
            {showHakusla && (
              <div className={styles.section}>
                <p className={styles.container}>
                  シューティングゲームの製作で、C#とUnityの基礎を学んだので、次に作ろうとしたのは、
                  よくあるハクスラダンジョンゲームです。staticが計算とかにしか使わないものであることや、
                  monobehaviourの仕様を理解して、画像も毎回座標と色のクラスを使ってUnityに描かせるという重すぎる方法をやめて、
                  自作のドット絵エディタにpngで出力させる方法にして、1000倍(比喩ではありません。)軽くしたり、
                  やっとゲーム作りのスタートラインに立てたと思います。完成が楽しみです。
                </p>
                <button onClick={() => setShowHakusla(false)} className={styles.showButton}>
                          ▲詳細を閉じる
                </button>
              </div>
            )} 
          
        </div>    
    </main>
  );
}
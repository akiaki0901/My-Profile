"use client";
import styles from "./page.module.css";
import Header from "../../components/Header";
import ButtonOpenText from "../../components/ButtonOpenText";
import Footer from "../../components/Footer"
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <div className={styles.title_header}>
         <Header />
      </div>

       <h1 className={styles.pagetitle}>
        Unityゲーム制作
      </h1>
      <ButtonOpenText title = "シューティングゲーム作成" defaultOpen={true}>
          <p>
            pythonで始めたゲーム作りですが、スマホで動くゲームが作りたいと思い、Unityを使い始めました。
            一番最初に作ろうとしたのはpythonで作った抽象的なキャラが動くシューティングゲームです。
            ゲーム自体はかろうじて動きましたが、C#とUnityに慣れてなくてpublicと書いたらstaticと反射で書くような作り方をしていました。
            規模が大きくなっていくにつれて、コードがぐちゃぐちゃになったりそもそもUnityの座標を完全無視したSpriteRendererを書き換える方式
            がつらくなってきて、詰んだのでこのゲームの製作は一旦断念しました。
          </p>
          <Image
            src="/unityShoot.png"
            alt=""
            width={500}
            height={300}
          />
      </ButtonOpenText>

      <ButtonOpenText title = "ハクスラダンジョンゲーム作成" defaultOpen={true}>
          <p>
            シューティングゲームの製作で、C#とUnityの基礎を学んだので、次に作ろうとしたのは、
            よくあるダンジョンでアイテムや装備を集めるゲームです。staticが計算とかにしか使わないものであることや、
            monobehaviourの仕様を理解して、画像も毎回座標と色のクラスを使ってUnityに描かせるという重すぎる方法をやめて、
            自作のドット絵エディタにpngで出力させる方法にして、1000倍(比喩ではありません。)軽くしたり、
            やっとゲーム作りのスタートラインに立てたと思います。完成が楽しみです。
          </p>
          <Image
            src="/dangeonWalk.png"
            alt=""
            width={500}
            height={300}
          />
          <Image
            src="/dangeonBattle.png"
            alt=""
            width={500}
            height={300}
          />
      </ButtonOpenText>
       
    </main>
  );
}
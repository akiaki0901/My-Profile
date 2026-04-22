import styles from "./page.module.css";
import ButtonOpenText from "@/components/ButtonOpenText";
import Image_Text from "@/components/Image_Text";
import PageLayout from "@/components/PageLayout";

export default function Home() {
  return (
    <PageLayout>
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
          <Image_Text imageName={"/unityShoot.png"}>
            <p>ピクセル書き換えで動いている</p>
          </Image_Text>
      </ButtonOpenText>

      <ButtonOpenText title = "ハクスラダンジョンゲーム作成" defaultOpen={true}>
          <p>
            シューティングゲームの製作で、C#とUnityの基礎を学んだので、次に作ろうとしたのは、
            よくあるダンジョンでアイテムや装備を集めるゲームです。staticが計算とかにしか使わないものであることや、
            monobehaviourの仕様を理解して、画像も毎回座標と色のクラスを使ってUnityに描かせるという重すぎる方法をやめて、
            自作のドット絵エディタにpngで出力させる方法にして、1000倍(比喩ではありません。)軽くしたり、
            やっとゲーム作りのスタートラインに立てたと思います。完成が楽しみです。
          </p>
          <Image_Text imageName={"/dangeonWalk.png"}>
            <p>ランダム生成マップ</p>
          </Image_Text>
          
          <Image_Text imageName={"/dangeonBattle.png"}>
            <p>ターン制バトル</p>
          </Image_Text>

      </ButtonOpenText>
       
    </PageLayout>
  );
}
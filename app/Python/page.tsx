"use client";
import styles from "./page.module.css";
import Header from "../../components/Header";
import ButtonOpenText from "../../components/ButtonOpenText";
import Footer from "../../components/Footer";
import Image_Text from "../../components/Image_Text";
import PageLayout from "../../components/PageLayout";
import Image from "next/image";

export default function Home() {

  return (
    <PageLayout>
 
      <h1 className={styles.pagetitle}>
        Pythonゲーム制作
      </h1>

      <ButtonOpenText title = "初めての自作ゲーム「ランダムドア」" defaultOpen={true}>
          <p>
            Pythonで初めて作ったゲームは、ランダムドアというゲームです。pygameを使いました。正解のドアを選んで進み、正解して進むとドアが増えていきます。
            ドアが4つになるとまた2に戻る感じでした。面白いゲームではないです。
          </p>

          <Image_Text imageName={"/door.png"}>
            <p>初めて動いた感動はあった</p>
          </Image_Text>
      </ButtonOpenText>
      
      <ButtonOpenText title = "お絵描きアプリ零号機作成">
        <p>
            カーソルが左上から動き黒か白を選ぶと次に行き、端につくと下に改行、そして左からまた描く。
            書き出しは背景がgbなのでスクショで可能(したことはない)。
        </p>

        <Image_Text imageName={"/dot1.png"}>
          <p>頑張ればQRコードとか作れそう</p>
        </Image_Text>
      </ButtonOpenText>
     
      <ButtonOpenText title = "お絵描きアプリ初号機作成">
          <p>
            カーソルを矢印キーで自由に動かせて、色も数字キーで指定可能。書き出しは背景がgbなのでスクショで可能(したことはない)。
            一応作品は描ける(もちろん描いたことはない)。
          </p>

          <Image_Text imageName={"/dot2.png"}>
            <p>右上の白ドットがカーソル</p>
          </Image_Text>

      </ButtonOpenText>
      
      <ButtonOpenText title = "お絵描きアプリ弐号機作成">
          <p>
            ついにマウスで描けるようになります。書き出しはコマンドプロンプトにprint関数で座標リストを表示、ゲームで使うことができます。
            色はゲーム側で一色指定してもらう必要あり。次のドットメーカーのプロトタイプ的存在。
          </p>

          <Image_Text imageName={"/dot3.png"}>
            <p>マウスで動くのはでかい</p>
          </Image_Text>

      </ButtonOpenText>
      
      <ButtonOpenText title = "お絵描きアプリ参号機作成">
          <p>
            名前をビッグドットメーカーとして作成しました。立ち上げ時に縦横ピクセル数とピクセルサイズ(見た目だけ)、書き出し形式を指定可能。
            シフトで直線描画も可能。色は初号機の数字キーシステム。書き出し形式は2つ選べて、どちらもテキストファイルに書き込むのですが、
            UnityのVector2Intかただのタプルかを選ぶ形式です。まだUnityでの画像を何個も使ってゲームを作る方法を知らずにUnityに毎フレーム描画させてた頃に使っていました。
          </p>

          <Image_Text imageName={"/bigDot.png"}>
            <p>結構使った</p>
          </Image_Text>

      </ButtonOpenText>
      
       <ButtonOpenText title = "お絵描きアプリ四号機作成">
          <p>
            作業の効率化と新たな制作方法への対応をテーマに名前をNewドットメーカーとして作成しました。
            まず色システムが大幅進化。画面下に数字キーに割り振られた色が表示されており、1から5が原色セットで変更を受け付けません。
            6から0がRGBAを調整して色を変えて置いておけるパレットとして使えます。スポイト機能もあり、かなり使いやすいです。
            新機能に関してはzキーでUndo、fキーで画面全塗りなどの機能も追加されて便利になりました。
            そして、書き出しが最強になりました。なんとpngで出力できます。色と座標データさえあればpng化は容易だったのです。
          </p>
          <Image_Text imageName={"/newDot.png"}>
           <p>普通に使える</p>
          </Image_Text>

      </ButtonOpenText>
   
    </PageLayout>
  );
}
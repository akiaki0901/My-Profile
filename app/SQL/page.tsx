import styles from "./page.module.css";
import ButtonOpenText from "@/components/ButtonOpenText";
import Image_Text from "@/components/Image_Text";
import PageLayout from "@/components/PageLayout";

export const metadata ={
  title: "学習記録|SQL",
  description: "SQL学習の記録"
}

export default function Home() {
  return (
    <PageLayout>{/*ナビゲーションバーとフッター*/}

        <h1 className={styles.pagetitle}>
            SQLについて
        </h1>

        <h2 className={styles.subtitle}>SQLとは</h2>
        <p className={styles.container}>
            SQLとは使いやすすぎる表管理データベース。いろんなところで使われてるらしい。
            簡単に言えばexelでのデータ管理のような感じ。行ごとに顧客、列ごとに顧客ごとのデータをまとめる的な。
        </p>
        <p style={{paddingLeft:"60px"}}>
           ブラックリスト
        </p>
        <div style={{paddingLeft:"70px"}}>
            <table className="table-auto border border-collapse">
            <thead>
                <tr>
                <th className="border px-4 py-2">名前</th>
                <th className="border px-4 py-2">年齢</th>
                <th className="border px-4 py-2">性別</th>
                <th className="border px-4 py-2">備考</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td className="border px-4 py-2">田中</td>
                <td className="border px-4 py-2">27</td>
                <td className="border px-4 py-2">男</td>
                <td className="border px-4 py-2">万引きにより出禁済</td>
                </tr>
                <tr>
                <td className="border px-4 py-2">佐藤</td>
                <td className="border px-4 py-2">42</td>
                <td className="border px-4 py-2">女</td>
                <td className="border px-4 py-2">万引きの疑い</td>
                </tr>
            </tbody>
            </table>
        </div>
        <p className={styles.container}>
            .db形式のファイルを扱い、上のようなテーブル表に名前をつけて保存できる。
            コマンドによる細かい編集、表示データの絞り込みも可能。コマンドラインからの編集もできるが、操作性が終わってるので
            VSCodeで.sql形式のファイルを作成し、編集することをお勧めする。
            .sqlのファイルを読み取るコマンドがあるくらいなので、推奨の方法なのだろう。
        </p>

        <h2 className={styles.subtitle}>SQLの実践</h2>
        <p className={styles.container}>
            SQLをとりあえず使ってみたい。そんな人のための簡単な実践方法を紹介する。
        </p>
        <p className={styles.container}>
            SQLをとりあえず使ってみたい。そんな人のための簡単な実践方法を紹介する。
        </p>
    </PageLayout>
  );
}
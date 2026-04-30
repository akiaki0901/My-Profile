
import styles from "./page.module.css";
import PageLayout from "@/components/PageLayout";
import Articles from "@/components/Articles"

export const metadata ={
  title:"自己紹介|Next.js",
  description:"Next.jsでやったことを紹介"
}

export default async function NextPage() {
  return (
    
    <PageLayout>{/*ナビゲーションバーとフッター*/}     
      <h1 className={styles.pagetitle}>
        Next.jsについて
      </h1>
      <Articles type='Next.js'/>
    </PageLayout>
    
  );
}
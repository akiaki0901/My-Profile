{/*"use client";*/}
import {client} from "@/lib/microcms";

import styles from "./page.module.css";
import PageLayout from "@/components/PageLayout";
import Articles from "@/components/Articles"

export default async function NextPage() {
const data = await client.get({
  endpoint:'diary',
});

  return (
    
    <PageLayout>{/*ナビゲーションバーとフッター*/}     
      <h1 className={styles.pagetitle}>
        Next.jsについて
      </h1>
      <Articles type='Next.js'/>
    </PageLayout>
    
  );
}
import styles from "./page.module.css";
import PageLayout from "@/components/PageLayout";
import Articles from "@/components/Articles"

export default function Home() {

  return (
    <PageLayout>

      <h1 className={styles.pagetitle}>
        絵について
      </h1>
       
    </PageLayout>
  );
}
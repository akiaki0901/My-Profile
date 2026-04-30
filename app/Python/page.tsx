import styles from "./page.module.css";
import ButtonOpenText from "@/components/ButtonOpenText";
import Image_Text from "@/components/Image_Text";
import PageLayout from "@/components/PageLayout";
import Articles from "@/components/Articles"

export const metadata ={
  title:"自己紹介|Python",
  description:"Pythonでやったことを紹介"
}

export default function Home() {

  return (
    <PageLayout>
 
      <h1 className={styles.pagetitle}>
        Pythonでの制作
      </h1>
      <Articles type = {'Python'}/>
      
   
    </PageLayout>
  );
}
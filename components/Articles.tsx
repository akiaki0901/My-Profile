{/*"use client";*/}
import {client} from "@/lib/microcms";

import styles from "./page.module.css";

type Props = {
  type: string;
};

type Article = {
  id: string;
  title: string;
  content: string;
  type: string;
};

export default async function Articles({type}:Props) {
const data = await client.get({
  endpoint:'diary',
});

  return (
      <ul>
        {data.contents.map((item: Article)=>(
          item.type === type &&
          <li key = {item.id}>
             <h2 className={styles.subtitle}>{item.title}</h2>
             <div dangerouslySetInnerHTML={{__html: item.content}} 
             className={styles.container}
             />
          </li>
        ))}
      </ul>
    
  );
}
{/*"use client";*/}
import {client} from "@/lib/microcms";

import styles from "./page.module.css";

export default async function Articles({type}) {
const data = await client.get({
  endpoint:'diary',
});

  return (
      <ul>
        {data.contents.map((item: any)=>(
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
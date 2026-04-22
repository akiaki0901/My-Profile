"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function ButtonOpenText({ title, children, defaultOpen=false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h1 className={styles.subtitle}>{title}</h1>

        {!open && (
          <button onClick={() => setOpen(true)} className={styles.showButton}>
            詳細を開く▼
          </button>
        )}
      </div>

      {open && (
        <div className={styles.section}>
          
            {children}
          
          <button onClick={() => setOpen(false)} className={styles.showButton}>
            ▲詳細を閉じる
          </button>
        </div>
      )}
    </div>
  );
}
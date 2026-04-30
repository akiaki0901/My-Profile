/*"use client";
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
        <div className={styles.inner}>
          
            {children}
          
          <button onClick={() => setOpen(false)} className={styles.showButton}>
            ▲詳細を閉じる
          </button>
        </div>
      )}
    </div>
  );
}*/

"use client";
import { useState } from "react";

export default function ToggleBox({ title, children ,defaultOpen=false}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div style={{ maxWidth: "800px", margin: "20px"}}>
      
      {/* ヘッダー */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {title}

        <button onClick={() => setOpen(!open)}>
          {open ? <p style={{ color:"blue" }}>閉じる ▲</p> : <p style={{ color:"blue" }}>開く ▼</p>}
        </button>
      </div>

      {/* 中身 */}
      {open && (
        <div style={{ marginTop: "10px" }}>
          {children}
        </div>
      )}
    </div>
  );
}
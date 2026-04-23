import Image from "next/image";
import styles from "./page.module.css"
export default function Image_Text({imageName,children}) {
  return (
    <>
    <Image
      src= {imageName}
      alt=""
      width={200}
      height={200}
    />

      <p className={styles.imagedes}>▲{children}</p>
    </>
  );
}
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/Header.module.scss";

export default function LinkIcon({ path, }) {
  return (
    <Link href={"/"} className={styles.button_link} >
      <Image 
        src={path} 
        layout='fill' 
        objectFit="contain" 
      />
    </Link>
  );
}

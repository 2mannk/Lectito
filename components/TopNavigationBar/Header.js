import styles from "../../styles/Header.module.scss";
import SearchBar from "./SearchBar";
import LinkIcon from "./LinkIcon";

export default function Header() {
  return (
    <div className={styles.component_container}>
      <div style={{ display: "flex", flexDirection: "row", gap: "2px" }}>
        <LinkIcon path="/icons/question-mark.jpg" />
        <LinkIcon path="/icons/question-mark.jpg" />
      </div>

      <div style={{ alignSelf: 'center', display: "flex", flexDirection: "row", border: '1px solid black', }}>
        <SearchBar path="/icons/searchIcon_page-0001.jpg" />
      </div>

      <div style={{ display: "flex", flexDirection: "row-reverse", gap: "2px" }} >
        <LinkIcon path="/icons/question-mark.jpg" />
        <LinkIcon path="/icons/question-mark.jpg" />
      </div>
    </div>
  );
}

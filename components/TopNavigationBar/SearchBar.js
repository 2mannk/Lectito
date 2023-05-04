import { useState } from "react";
import Image from "next/image";
import styles from "../../styles/Header.module.scss";

export default function SearchBar({ path, }) {
  const [query, setQuery] = useState("");

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Tutaj można przeprowadzić wyszukiwanie na podstawie wartości z `query`
    console.log(`Szukaj: ${query}`);
  };

  return (
    <form onSubmit={handleFormSubmit} className={styles.search_bar_form}>
      <button type="submit" className={styles.search_bar_button} >
        <Image
          src={ path }
          layout='fill' 
          alt="Search Icon"
          objectFit="contain" 
        />
      </button>

      <input
        type="text"
        placeholder="Wyszukaj..."
        value={query}
        onChange={handleInputChange}
        className={styles.search_bar_input}
      />
    </form>
  );
}

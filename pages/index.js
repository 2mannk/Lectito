// strona główna aplikacji
// pierwsza strona, którą uzytkownik widzi po zalogowaniu do aplikacji

import Head from "next/head";
import Header from "@/components/TopNavigationBar/Header";

export default function MainPage() {
  return (
    <>
      <Head>
        <title>Lectito - write about you</title>
      </Head>
      <main style={{ height: "100%" }}>
        <section>
          <Header />
        </section>
      </main>
    </>
  );
}

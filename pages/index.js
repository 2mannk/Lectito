// strona główna aplikacji
// pierwsza strona, którą uzytkownik widzi po zalogowaniu do aplikacji

import Head from "next/head";
import NavigationBar from "../components/TopNavigationBar/NavigationBar";
import Grid from "@/components/items/Grid";

export default function MainPage() {
  return (
    <>
      <Head>
        <title>Lectito - write about you</title>
      </Head>
      <main class="bg-[#eeeee4] h-screen w-screen">
        <section class=''>
          <NavigationBar />
        </section>
        <section class='b-2 h-full'>
          <Grid />
        </section>
      </main>
    </>
  );
}

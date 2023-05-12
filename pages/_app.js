// plik z kodem ogólnym kazdej strony
// mozna tutaj przetrzymywać propsy i je przkazywać do kazdej strony
// plik ten przetrzymuje globalne style

import '@/styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
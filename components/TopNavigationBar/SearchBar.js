import React, { useState } from 'react';

export default function SearchBar() {
  const [phrase, setPhrase] = useState('');

  const ustawiamWyszukiwanie = (wartosc) => {
    setPhrase(wartosc);

    console.log(wartosc);
  }

  return (
    <form action="/" class="flex-1 max-w-md w-full h-full flex flex-row flex-nowrap p-2 gap-2">
      <button class="transform rotate-90 h-full self-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
      <input 
        type='text' 
        name="searchingPhrase" 
        class='rounded-lg pl-2 text-lg h-10 self-center w-full'
        onChange={(e) => ustawiamWyszukiwanie(e.target.value) } 
      />
    </form>
  );
}

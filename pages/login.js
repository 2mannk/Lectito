import { useState } from "react";

export default function () {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

  function checkData() {
    if(regex.test(email)) alert('bravo ', email)
    else alert('incorrect email')
    
  }

  return (
    <div class="bg-blue-500 w-full h-screen flex items-center justify-center">
      <div class='border-2 rounded-sm w-100 h-100 bg-white p-4 flex flex-col items-center'>
        <div class="text-2xl">Welcome!</div>
        <form action="#" class='flex flex-col p-4 gap-3'>
          <input value={email} type="text" name="username" placeholder="email" class='w-full border-b-2 text-lg pl-2' onChange={e => {setEmail(e.target.value); console.log(email)}} />
          <input value={password} type="password" name="password" placeholder="password" class='w-full border-b-2 text-lg pl-2' onChange={e => {setPassword(e.target.value); console.log(password)}} />
          <button 
            type="submit" 
            class="bg-blue-300 rounded-sm w-fit px-5 py-2 self-center" 
            onClick={() => checkData}
          >Log In</button>
        </form>
      </div>
    </div>
  );
}

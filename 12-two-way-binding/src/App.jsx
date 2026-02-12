import React from 'react'
import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');

  const formHandler =(e)=>{
  e.preventDefault();
  console.log('form submitted by', title);

  setTitle('');
  }

  return (
    <div>
      <form onSubmit={function prev(e){formHandler(e);}}>
        <input type="text" placeholder='enter name' value={title}
        onChange={(e)=>{
          setTitle(e.target.value);      }}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

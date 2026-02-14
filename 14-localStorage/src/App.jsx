import React from 'react'

const App = () => {
  localStorage.setItem('user','Shafi');
  const user = localStorage.getItem('user');
  console.log(user);
  localStorage.removeItem('user');
  console.log(user);
  

  const user2 = {
    username: 'Sofik',
    age: 22,
    city: 'Mau'
  }

  localStorage.setItem('user2',JSON.stringify(user2));

  console.log(localStorage.getItem('user2'));
  console.log(typeof(localStorage.getItem('user2')));

  const user2FromStorage = JSON.parse(localStorage.getItem('user2'));
  console.log(user2FromStorage);
  console.log(typeof(user2FromStorage));

  
  
  // localStorage.clear();

  return (
    <div>
      Sofik
    </div>
  )
}

export default App

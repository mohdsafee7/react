import React from 'react'

const App = () => {
  function btnClicked(){
    var a = document.querySelector('h1')

    a.addEventListener('click', function(){
      a.innerHTML = 'Changed'
    })

  }
  function mouseenter(){
    console.log('Mouse Entered');
  }

  function inputChange(value){
    console.log(value);
  }

  return (
    <div>
      <h1 id='xx'>Hello, guys</h1>
      <button onMouseEnter={mouseenter} onClick={btnClicked}>Change User</button>

      <input
      onChange={function(elem){
        inputChange(elem.target.value)
      }}
      type="text" name="" id="" placeholder='Your Name' />
    </div>
  )
}

export default App

import React from 'react'

const App = () => {
  const formHandler =(e)=>{
  e.preventDefault();
  console.log('form submitted');
  }
  return (
    <div>
      <form onSubmit={function prev(e){
        formHandler(e);
      }}>
        <input type="text"  placeholder='enter name'/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

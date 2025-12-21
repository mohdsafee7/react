import React from 'react'
import Card from './components/card'

const App = () => {
  return (
    <div className='parent'>
      <div>
        <Card user='Safee' age={18} img='https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'/>
      </div>
      <div> <Card user='Gungun' age={18} img='https://tse1.mm.bing.net/th/id/OIP.FD4U76vudQaXeT8h3sAZfAHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3'/> </div>
    </div>
  )
}

export default App

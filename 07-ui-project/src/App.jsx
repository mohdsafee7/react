import React from 'react'
import Section1 from './components/section1/section1'
import Section2 from './components/section2/Section2'
const App = () => {
  const users = [
    { img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dignissimos illo dolor velit, quasi eligendi?',
      tag: 'Satisfied'
    },
    { img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dignissimos illo dolor velit, quasi eligendi?',
      tag: 'Underserved'
    },
    { img: 'https://images.unsplash.com/photo-1670584301626-74bc006d0e1a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dignissimos illo dolor velit, quasi eligendi?',
      tag: 'Underbanked'
    },
    { img: 'https://plus.unsplash.com/premium_photo-1678453147461-0e53fe848df6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dignissimos illo dolor velit, quasi eligendi?',
      tag: 'Loyal'
    }
  ]
  return (
    <div>
    <Section1 users={users}/>
    <Section2 />

    </div>
  )
}

export default App

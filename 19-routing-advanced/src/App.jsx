import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import Product from './pages/Product'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'


const App = () => {
  return (
    <div className='bg-black text-cyan-200'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route element={<CourseDetail />} path='/courses/:id' /> {/*Dynamic Route Example*/}
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<Product />}> {/*Nested Route Example */}
          <Route path='kids' element={<Kids />} />
        </Route>


        <Route path='*' element={<NotFound />} />


      </Routes>

      <Footer />
    </div>
  )
}

export default App

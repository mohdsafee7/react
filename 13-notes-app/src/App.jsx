import { Scale } from 'lucide-react';
import React, { useState } from 'react'

const App = () => {
  
  // {two way binding}
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  //for mapping the data in the right side
  const [notes, setNotes] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log('Title:', title);
    setTitle('');
    // console.log('Details:', details);
    setDetails('');

    const newNote = [...notes];
    newNote.push({title, details});
    setNotes(newNote);

    // console.log(newNote)
  }

  const deleteNote = (idx) => {
    const newNote = [...notes];
    newNote.splice(idx, 1);
    setNotes(newNote);
  }

  return (
    <div className='bg-black h-screen lg:flex text-white'>
      <form
        onSubmit={(e)=>{ submitHandler(e);     }}
        className='flex lg:w-1/2  items-start flex-col gap-4 p-10'>

        <h1 className='p-1.5 font-bold text-3xl'>Notes App</h1>

          <input type='text' placeholder='Title' className='px-5 w-full font-medium py-2 border-2 outline-none rounded-1xl'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value);
          }}/>

        <textarea placeholder='Write Task' className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded-1xl' value={details} onChange={(e)=>{
          setDetails(e.target.value);
        }}></textarea>

        <button className='bg-white  active:scale-97 font-medium w-full outline-none text-black px-5 py-2' >Add Note</button>
      
      </form>

      <div className=' lg:w-1/2 w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-4xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start justify-start gap-5  mt-5 h-full overflow-auto'>
          {notes.map(function(elem,idx){

            return <div key={idx} className="relative h-52 w-40 bg-cover rounded-xl bg-[url('https://static.vecteezy.com/system/resources/thumbnails/010/793/873/small_2x/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] px-6 py-8 pb-8 pt-9 text-black">
              <div>
              <h2 className='text-xl font-bold  leading-tight'>{elem.title}</h2>
              <p className='mt-2 leading-tight break-words font-medium'>{elem.details}</p>
              </div>
              <div className='mt-11'>
              <button type='button' onClick={() => deleteNote(idx)} className='text-xs w-full cursor-pointer active:scale-95 bg-red-500 rounded font-bold text-white py-1 hover:underline '>Delete</button>
              </div>
            </div>
          })}
          
          
        </div>
      </div>
    </div>
  )
}

export default App

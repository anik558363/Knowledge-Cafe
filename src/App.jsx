
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);
  

  const handleAddToBookmarks = blog =>{
    setBookmarks([...bookmarks, blog]);
  }

  const handleAddToTime = time =>{
    setReadingTime(readingTime + time)
  }



  return (
    <div className='max-w-7xl mx-auto px-4 lg:px-0'>

      <Header></Header>
      <div className='md:flex gap-10 mt-4'>
        <Blogs handleAddToTime={handleAddToTime} handleAddToBookmarks={handleAddToBookmarks}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </div>
  )
}

export default App

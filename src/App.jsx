import { useState } from 'react'
import Courses from './components/Courses/Courses'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SelectedCourses from './components/SelectedCourses/SelectedCourses'

function App() {

  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleSelectedCourses = course =>{
    // console.log('Selected Courese', id);
    const newSelectedCourses = [...selectedCourses, course];
    console.log(newSelectedCourses);
    setSelectedCourses(newSelectedCourses);
  }
 

  return (
    <>
       <Header></Header>
       <div className='flex justify-center gap-4 my-20 max-w-screen-2xl mx-14'>
         <Courses handleSelectedCourses={handleSelectedCourses}></Courses>
         <SelectedCourses selectedCourses={selectedCourses}></SelectedCourses>
       </div>

       <Footer></Footer>
    </>
  )
}

export default App

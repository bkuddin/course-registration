import { useState } from 'react'
import Courses from './components/Courses/Courses'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import SelectedCourses from './components/SelectedCourses/SelectedCourses'	
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [selectedCourses, setSelectedCourses] = useState([]);
  const [hours, setHours] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)


  

  const handleSelectedCourses = course =>{
    // Handle Validation for duplicate selection
    const isExist = selectedCourses.find(item => item.id === course.id );

    let credit_time = course.credit; 
    let previous_price = course.price;


    if(isExist){
       
       toast.warn("'You've taken this particular course previously, right?'", {position: "top-center"});
    }
    else{
      const newSelectedCourses = [...selectedCourses, course];          
      setSelectedCourses(newSelectedCourses);

      // New hour added to previous hour
      selectedCourses.forEach(hour => { credit_time +=  hour.credit} )
      setHours(credit_time)

      // Minus remaining time 
        let remainingTime  = 20 - credit_time;
        // console.log(remainingTime);
       
        if(remainingTime <= 0){
          toast.warn("You're out of time to choose any more classes.", {position: "top-center"});
        }
        else{
          setRemainingTime(remainingTime)
        }

      // Total price
      selectedCourses.forEach(property => {previous_price += property.price});
      setTotalPrice((previous_price).toFixed(2)) 
      // console.log('This is', previous_price);
     
    }
    
  }

 
 

  return (
    <>
       <Header></Header>
       <div className='flex justify-center gap-8 my-20 max-w-screen-2xl mx-14'>
         <Courses handleSelectedCourses={handleSelectedCourses} ></Courses>
         <SelectedCourses 
         selectedCourses={selectedCourses} 
         hours={hours}
         remainingTime={remainingTime}
         totalPrice={totalPrice}>

         </SelectedCourses>

         <ToastContainer/>
       </div>
       
       <Footer></Footer>
    </>
  )
}

export default App
